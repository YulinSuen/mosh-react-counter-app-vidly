import http from "./httpService";

const apiEndPoint = "http://localhost:3900/api/movies";
export function getMovies() {
  return http.get(apiEndPoint); // returned a Promise
}

export function deleteMovie(movieId) {
  return http.delete(apiEndPoint + "/" + movieId);
}
