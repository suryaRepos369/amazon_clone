import { AxiosClient } from "../axios/axiosClient";

export const getApi = async (url) => {
  await AxiosClient.get(url)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });

  //return response;
};

export const postApi = async (url, data) => {
  // let response;
  await AxiosClient.post(url, data)
    .then((res) => {
      // response = res;
      return res;
    })
    .catch((err) => {
      // response = err;
      return err;
    });

  // return response;
};
