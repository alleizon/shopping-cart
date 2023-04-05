// index can be used as key because genre values never change
/* eslint-disable react/no-array-index-key */

import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const SelectFilterList = ({ setFilter, filter, renderList }) => {
  const [dropdownActive, setDropdownActive] = useState(false);

  const handleResetClick = () => {
    setFilter(null);
    setDropdownActive(false);
  };

  const handleFilterClick = () => {
    setDropdownActive(true);
  };

  useEffect(() => {
    setDropdownActive(false);
  }, [filter]);

  return (
    <div className={`select-list ${dropdownActive ? "dropdown" : ""}`}>
      {dropdownActive ? (
        <>
          <FontAwesomeIcon
            style={{
              position: "absolute",
              right: "0",
              padding: "0 0.3rem",
              height: "100%",
              cursor: "pointer",
              backgroundColor: "transparent",
              color: "#991b1b",
              transition: "all 0.2s ease-in-out",
              zIndex: "2",
            }}
            onClick={() => {
              setDropdownActive(false);
            }}
            icon={faXmark}
            size="lg"
          />
          <button type="button" onClick={handleResetClick}>
            Reset
          </button>
          {renderList()}
        </>
      ) : (
        <ul>
          <li>
            <button type="button" onClick={handleFilterClick}>
              {`Filter: ${filter || "none"}`}
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default SelectFilterList;
