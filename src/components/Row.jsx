import React, { useEffect, useState } from "react";
import moviedb_instance from "../axios";
import moviedb_api, { POSTER_BASE_URL } from "../requests";
import "./Row.scss";

/**
 * This component will implement the rows. These rows will contain list of scrollable content to watch.
 * @param {String} title Title of the row
 * @param {String} fetchURL URL to use to fetch content from
 *
 */
const Row = ({ title, fetchURL, isLargeRow }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // moviedb_instance;
    const fetchData = async () => {
      const request = await moviedb_instance.get(fetchURL);
      setMovies(request.data.results);
      return request.data.results;
    };
    fetchData();
  }, [fetchURL]);
  // console.table(movies);

  return (
    <div className="row">
      <h2 className="row__title">{title}</h2>
      <div className="row__posters">
        {movies.map((movie, index) => {
          return (
            <img
              key={movie.id}
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
              src={`${POSTER_BASE_URL}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Row;
