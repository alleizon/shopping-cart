/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import { useEffect, useState } from "react";
import { Form, Link, useLoaderData } from "react-router-dom";
import { getGames } from "../utils/games";
import "../css/Index.css";

export const loader = async () => {
  const games = await getGames();
  return games;
};

const Index = () => {
  const games = useLoaderData();
  const [inputValue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [filteredGames, setFilteredGames] = useState([]);

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
        <Form method="get" role="search">
          <div className="input-wrapper" onClick={handleClick}>
            <input
              type="search"
              className={
                filteredGames.length > 0 && isFocused ? "active-list" : ""
              }
              aria-label="search games"
              name="q"
              id="game-name"
              value={inputValue}
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
            <button type="submit">Submit</button>
            <button type="button">Random</button>
          </div>
        </Form>
      </div>
    </main>
  );
};

export default Index;
