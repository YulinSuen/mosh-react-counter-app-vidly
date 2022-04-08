import http from "./httpService";
import config from "../config.json";

const apiEndPoint = config.apiUrl + "/movies";
export function getMovies() {
  return http.get(apiEndPoint); // returned a Promise
}

export function getMovie(movieId) {
  return http.get(apiEndPoint + "/" + movieId);
}

export function saveMovie(movie) {}

export function deleteMovie(movieId) {
  return http.delete(apiEndPoint + "/" + movieId);
}
