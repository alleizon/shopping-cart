// index can be used as key because genre values never change
/* eslint-disable react/no-array-index-key */

import { getGenres } from "../../utils/games";

const GenreFilters = ({ filter, hideFilters, setFilter }) => {
  const genres = getGenres();

  return (
    <div id="filters">
      {hideFilters ? (
        <select
          value={filter || "Filters"}
          onChange={(e) => {
            if (!genres.includes(e.target.value)) {
              setFilter(null);
              return;
            }
            setFilter(e.target.value);
          }}
        >
          <option>Filters</option>
          {genres.map((genre, index) => (
            <option key={index} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      ) : (
        <ul>
          {genres.map((genre, index) => (
            <li key={index} className={filter === genre ? "active" : ""}>
              <button type="button" onClick={() => setFilter(genre)}>
                {genre}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GenreFilters;
