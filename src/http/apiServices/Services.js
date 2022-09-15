import { AxiosClient } from "../axios/axiosClient";

export const getApi = async (url) => {
  let response;
  await AxiosClient.get(url)
    .then((res) => {
      response = res;
    })
    .catch((err) => {
      response = err;
    });

  return response;
};

export const postApi = async (url, data) => {
  let response;
  await AxiosClient.post(url, data)
    .then((res) => {
      response = res;
    })
    .catch((err) => {
      response = err;
    });

  return response;
};
