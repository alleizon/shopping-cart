import "../css/Shop.css";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import GenreFilters from "../components/Shop/GenreFilters";
import Items from "../components/Shop/Items";
import { getGames } from "../utils/games";
import useResizeWindow from "../hooks/useResizeWindow";

export const loader = async () => {
  const games = await getGames();
  return games;
};

const Shop = () => {
  const games = useLoaderData();
  const [filter, setFilter] = useState(null);
  const hideFilters = useResizeWindow();

  return (
    <main id="shop">
      <div id="shop-container">
        <GenreFilters
          filter={filter}
          hideFilters={hideFilters}
          setFilter={setFilter}
        />
        <Items games={games} filter={filter} />
      </div>
    </main>
  );
};

export default Shop;
