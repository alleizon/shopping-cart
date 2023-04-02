import "../css/Shop.css";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import GenreFilters from "../components/Shop/GenreFilters";
import Items from "../components/Shop/Items";
import { getGames } from "../utils/games";

export const loader = async () => {
  const games = await getGames();
  return games;
};

const Shop = () => {
  const games = useLoaderData();
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState(null);

  const handlePageClick = (e) => {
    const clickedPage = Number(e.target.dataset.page);
    setPage(clickedPage);
  };

  return (
    <main id="shop">
      <div>
        <GenreFilters games={games} setFilter={setFilter} />
        <Items page={page} filter={filter} />
        <div className="pages">
          <button type="button" data-page="1" onClick={handlePageClick}>
            1
          </button>
          <button type="button" data-page="2" onClick={handlePageClick}>
            2
          </button>
          <button type="button" data-page="3" onClick={handlePageClick}>
            3
          </button>
        </div>
      </div>
    </main>
  );
};

export default Shop;
