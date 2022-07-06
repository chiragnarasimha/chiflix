import React, { useEffect, useState } from "react";
import moviedb_instance from "../axios";
import moviedb_api, { POSTER_BASE_URL } from "../requests";
import "./Banner.scss";

const Banner = (props) => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await moviedb_instance.get(
        moviedb_api["CHIFLIX ORIGINALS"]
      );

      const requestMovie =
        request.data.results[
          Math.floor(Math.random() * (request.data.results.length - 1))
        ];
      setMovie(requestMovie);
      return requestMovie;
    };
    fetchData();
  }, []);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  return (
    <div>
      <header
        className="banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url("${POSTER_BASE_URL}${movie?.backdrop_path}")`,
          backgroundPosition: "center center",
        }}
      >
        <div className="banner--fadeBottom">
          <div className="banner__contents">
            <h1 className="banner__h1">
              {movie?.title || movie?.name || movie?.original_name}
            </h1>
            <div className="banner__buttons">
              <button className="banner__button">Play</button>
              <button className="banner__button">My List</button>
            </div>
            <h1 className="banner__description">
              {truncate(movie.overview, 200)}
            </h1>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Banner;
