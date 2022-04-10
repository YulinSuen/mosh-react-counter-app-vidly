import http from "./httpService";
import config from "../config.json";
import { func } from "prop-types";

const apiEndPoint = config.apiUrl + "/auth";

export function login(email, password) {
  return http.post(apiEndPoint, { email, password });
}
