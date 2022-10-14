import axios from "axios";

// create an axios instance
export const AxiosClient = axios.create({
  baseURL: "http://localhost:3030",
  timeout: 25000,
});
export const loginClient = axios.create({
  baseURL: "http://localhost:3030",
  timeout: 25000,
});
