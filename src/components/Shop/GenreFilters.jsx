// index can be used as key because genre values never change
/* eslint-disable react/no-array-index-key */

import { getGenres } from "../../utils/games";
import SelectFilterList from "./SelectFilterList";

const GenreFilters = ({ filter, hideFilters, setFilter }) => {
  const genres = getGenres();

  const renderList = () => (
    <ul>
      {genres.map((genre, index) => (
        <li key={index} data-filter={genre}>
          <button
            type="button"
            className={filter === genre ? "active" : ""}
            onClick={() => setFilter(genre)}
          >
            {genre}
          </button>
        </li>
      ))}
    </ul>
  );

  return (
    <div id="filters">
      {hideFilters ? (
        <SelectFilterList
          filter={filter}
          setFilter={setFilter}
          renderList={renderList}
        />
      ) : (
        <>
          <button
            type="button"
            id="reset-filters"
            onClick={() => setFilter(null)}
          >
            Clear
          </button>
          {renderList()}
        </>
      )}
    </div>
  );
};

export default GenreFilters;
