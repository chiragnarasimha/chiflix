import React from "react";
import Row from "./Row";
import moviedb_api from "../requests";

/**
 * This will generate the rows of all the categories
 * @returns
 */
const Rows = () => {
  /**
   *  This function will return the react Row component for each entry in the hashmap
   * @param {HashMap} moviedb_api This is a map with the name of all the categories and its api
   */
  const generateRows = (moviedb_api) => {
    // Make the netflix originals bigger than the other rows

    let rowArray = [];

    // moviedb_api.delete("NETFLIX ORIGINALS");

    // delete moviedb_api["NETFLIX ORIGINALS"];

    for (const movie in moviedb_api) {
      if (Object.hasOwnProperty.call(moviedb_api, movie)) {
        const apiURL = moviedb_api[movie];

        let isLargeRow = false;
        if (movie === "NETFLIX ORIGINALS") {
          isLargeRow = true;
        }
        rowArray.push(
          <Row
            key={`${movie} ${apiURL}`}
            title={movie}
            fetchURL={apiURL}
            isLargeRow={isLargeRow}
          />
        );
      }
    }

    return rowArray;
  };

  const rows = generateRows(moviedb_api);
  return <div>{rows}</div>;
};

export default Rows;
