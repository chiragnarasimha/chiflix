/**
 * requests.js contains a list of all the apis that will be used in this project
 */

const API_KEY = "9cb73c5cc8c64b259d35e8a228059987";

/**
 * This contains a list of all the apis used in this project
 */
const moviedb_api = {
  "NETFLIX ORIGINALS": `/discover/tv?api_key=${API_KEY}&with_network=213`,
  "Trending Now": `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  "Top Rated": `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  "Action Movies": `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  "Comedy Movies": `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  "Horror Movies": `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  "Romance Movies": `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  Documentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default moviedb_api;

export const POSTER_BASE_URL = `https://image.tmdb.org/t/p/original`;
