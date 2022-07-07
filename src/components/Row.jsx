import movieTrailer from "movie-trailer";
import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import moviedb_instance from "../axios";
import moviedb_api, { API_KEY, POSTER_BASE_URL } from "../requests";
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

  const [trailerURL, setTrailerURL] = useState("");

  const youTubePlayerOpts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const getRandomItem = (arr) => {
    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);

    // get random item
    const item = arr[randomIndex];

    return item;
  };

  const [previousMovie, setPreviousMovie] = useState({});
  const [showTrailer, setShowTrailer] = useState(false);
  const [trailerFound, setTrailerFound] = useState(true);

  const toggleShowTrailer = () => {
    if (showTrailer === true) {
      setShowTrailer(false);
    } else {
      setShowTrailer(true);
    }
  };

  const handleClick = (movie) => {
    // if (trailerURL) {
    //   setTrailerURL(``);
    //   return;
    // }

    if (movie === previousMovie) {
      toggleShowTrailer();
      return;
    }

    setShowTrailer(true);

    const tvGenreIDs = [
      10759, 16, 35, 80, 99, 18, 10751, 10762, 9648, 10763, 10764, 10765, 10766,
      10767, 10768, 37,
    ];

    const tvShow = tvGenreIDs.some((r) => movie.genre_ids.indexOf(r) >= 0);

    let tvOrMovieParam = `movie`;

    if (tvShow === true) {
      tvOrMovieParam = `tv`;
    }

    const requestURL = `/${tvOrMovieParam}/${movie.id}/videos?api_key=${API_KEY}`;

    const fetchData = async () => {
      const request = await moviedb_instance.get(`${requestURL}`);
      console.log(request.data.results);

      // If we are not able to find any videos, then just stop exit the function
      if (request.data.results.length === 0) {
        setTrailerURL(`error`);
        return;
      }
      const randomTrailer = getRandomItem(request.data.results);
      setTrailerURL(randomTrailer.key);
      return randomTrailer.key;
    };
    fetchData();
    setPreviousMovie(movie);
  };

  return (
    <div className="row">
      <h2 className="row__title">{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => {
          return (
            <img
              key={movie.id}
              onClick={() => handleClick(movie)}
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
              src={`${POSTER_BASE_URL}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          );
        })}
      </div>
      {/* {trailerFound === false && showTrailer === true && (
        <YouTube videoId="error" opts={youTubePlayerOpts} />
      )} */}
      {showTrailer === true && (
        <YouTube videoId={trailerURL} opts={youTubePlayerOpts} />
      )}
    </div>
  );
};

export default Row;

/// DEBUG CODE
// This is how to extract the url parameters.
// const urlParams = new URLSearchParams(new URL(url).search);

// console.log({
//   take: 2,
//   "new URLSearchParams(new URL(url).search)": new URLSearchParams(
//     new URL(url).search
//   ).get(`v`),
//   "new URL(url).searchParams": new URL(url).searchParams.get("v"),
// });

// const urlObject = new URL(url);
// setTrailerURL(urlObject.searchParams("v"));
// setTrailerURL(urlParams.get("v"));

// const handleClick = (movie) => {
//   const movieTrailerConfig = {
//     apiKey: API_KEY,
//     id: true,
//     tmdbId: movie.id,
//   };

//   if (trailerURL !== ``) {
//     setTrailerURL(``);
//   } else {
//     // movieTrailer(null, movieTrailerConfig)
//     //   .then((url) => {
//     //     console.clear();
//     //     console.log(movie);
//     //     console.log({ url: url });
//     //     setTrailerURL(url);
//     //   })
//     //   .catch((error) => console.error(error));
//   }
// };
