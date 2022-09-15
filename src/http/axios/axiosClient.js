import axios from "axios";

// create an axios instance
export const AxiosClient = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 25000,
});
