import axios from "axios";

// create an axios instance
export const AxiosClient = axios.create({
  baseURL: "http://localhost:3030",
  timeout: 10000,
});
