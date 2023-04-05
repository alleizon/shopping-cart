import { useEffect, useState } from "react";
import { getFilteredGames } from "../../utils/games";

const Items = ({ games, filter }) => {
  const [filteredGames, setFilteredGames] = useState([]);
  const [page, setPage] = useState(null);

  const handlePageClick = (e) => {
    const newPage = Number(e.currentTarget.dataset.page);
    setPage(newPage);
  };

  const pageButtons = () => {
    const btns = [];
    for (let i = 0; i < filteredGames.length; i += 1) {
      btns.push(
        <button
          type="button"
          data-page={i}
          className={page === i ? "active-page" : ""}
          // eslint-disable-next-line react/no-array-index-key
          key={i}
          onClick={handlePageClick}
        >
          {i + 1}
        </button>
      );
    }
    return btns;
  };

  useEffect(() => {
    let newGames;
    if (filter) newGames = getFilteredGames(filter);
    else newGames = games;
    const pageSeparatorArr = [];
    let prevSep = 0;
    for (let i = 0; i <= newGames.length; i += 1) {
      if (i % 20 === 0 && i !== 0) {
        pageSeparatorArr.push(newGames.slice(prevSep, i));
        prevSep = i;
      }
      if (i === newGames.length && i % 20 !== 0) {
        pageSeparatorArr.push(newGames.slice(prevSep));
      }
    }

    setFilteredGames(pageSeparatorArr);
    setPage(0);
  }, [filter]);

  return page !== null ? (
    <>
      <div id="items">
        {filteredGames[page].map((game) => (
          <div key={game.id}>{game.name}</div>
        ))}
      </div>
      <div id="page-buttons">{pageButtons()}</div>
    </>
  ) : (
    <div>Loading...</div>
  );
};

export default Items;
