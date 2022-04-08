import http from "./httpService";

export function getGenres() {
  const Promise = http.get("http://localhost:3900/api/genres");
  //   console.log(Promise);
  return Promise;
}
