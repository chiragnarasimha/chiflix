/**
 * axios.js will hold all the axios commands that will be used in this project. This will contain the APIs setup.
 */

import axios from "axios";

/**
 * This is the axios instance of moviedb.
 */
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;
