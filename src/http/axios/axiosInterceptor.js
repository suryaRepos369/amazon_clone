import { AxiosClient } from "./axiosClient";

if (localStorage.hasOwnProperty("rrtfaca")) {
  var token = localStorage.getItem("rrtfaca");
}

AxiosClient.interceptors.request.use((request) => {
  request.headers.project_name = "AmazonClone";
  request.headers.Authorization = `Bearer${token}`;
  console.log("request******", request);
  return request;
});

AxiosClient.interceptors.response.use((response) => {
  console.log("*************Interceptor response ****************:");
  console.log("response:", response);
  console.log(Object.keys(response));
  if (response.code === "ERR_NETWORK") {
    console.log("Error in the network");
    return response;
  }
  return response;
});
