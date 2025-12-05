import http from "./http.js";

export function login(data) {
  return http.post("/auth/login", data);
}

export function registerUser(data) {
  return http.post("/auth/register", data);
}
