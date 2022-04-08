import http from "./httpService";
import config from "../config.json";

export function getGenres() {
  const Promise = http.get(config.apiUrl + "/genres");
  //   console.log(Promise);
  return Promise;
}
