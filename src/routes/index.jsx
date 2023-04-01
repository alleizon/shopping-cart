/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import { useEffect, useRef, useState } from "react";
import { Form, Link, useLoaderData, useNavigate } from "react-router-dom";
import { getGames, getRandomGame } from "../utils/games";
import "../css/Index.css";

export const loader = async () => {
  const games = await getGames();
  return games;
};

const Index = () => {
  const games = useLoaderData();
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [filteredGames, setFilteredGames] = useState([]);
  const [error, setError] = useState(false);
  const timeoutId = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue === "") {
      setError(true);
      if (timeoutId.current) {
        clearTimeout(timeoutId.current);
      }
      timeoutId.current = setTimeout(() => {
        setError(false);
        timeoutId.current = null;
      }, 3000);
      return;
    }

    if (e.nativeEvent.submitter.id === "random-btn") {
      const rnd = getRandomGame();
      navigate(`product/${rnd.slug}`);
      return;
    }

    if (filteredGames.length) {
      navigate(`product/${filteredGames[0].slug}`);
      return;
    }
    navigate(`product/${inputValue}`);
  };

  const handleClick = (e) => {
    const inputWrapper = document.querySelector("#index .input-wrapper");
    if (e.target === inputWrapper || inputWrapper.contains(e.target)) return;
    setIsFocused(false);
  };

  const handleOnChange = (e) => {
    const { value } = e.target;
    if (value.length > 2) {
      const toMatch = value.toLowerCase();
      setFilteredGames(
        games.filter((game) => game.name.toLowerCase().includes(toMatch))
      );
    } else setFilteredGames([]);
    setInputValue(value);
  };

  useEffect(() => {
    window.addEventListener("mousedown", handleClick);
    return () => window.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <main id="index">
      <div>
        <Link to="shop" id="index-shop">
          Shop
        </Link>
        <Form
          noValidate
          className={error ? "error" : ""}
          onSubmit={handleSubmit}
          role="search"
        >
          <div className="input-wrapper" onClick={handleClick}>
            <input
              type="search"
              className={`${
                filteredGames.length > 0 && isFocused ? "active-list" : ""
              } ${error ? "error" : error}`}
              aria-label="search games"
              name="q"
              id="game-name"
              value={inputValue}
              required
              autoComplete="off"
              onFocus={() => setIsFocused(true)}
              onChange={handleOnChange}
              placeholder="Search for a game by name..."
            />
            {filteredGames.length > 0 && isFocused && (
              <ul className="filtered-list">
                {filteredGames.map((filteredGame) => (
                  <Link
                    to={`product/${filteredGame.slug}`}
                    key={filteredGame.id}
                  >
                    {filteredGame.name}
                  </Link>
                ))}
              </ul>
            )}
          </div>
          <div className="btn-wrapper">
            <button id="submit-btn" type="submit">
              Submit
            </button>
            <button id="random-btn" type="submit">
              Random
            </button>
          </div>
        </Form>
      </div>
    </main>
  );
};

export default Index;
