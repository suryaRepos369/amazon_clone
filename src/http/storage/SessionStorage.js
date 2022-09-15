import { AES, enc, SHA1 } from "crypto-js";

const secretKey = SHA1(process.env.REACT_APP_SESSION_KEY).toString();

export const saveToSession = (label, data) => {
  data = AES.encrypt(JSON.stringify(data), secretKey).toString();
  sessionStorage.setItem(label, data);
};

export const removeFromSession = (label) => {
  sessionStorage.removeItem(label);
};

export const getFromSession = (label) => {
  let data = sessionStorage.getItem(label);
  if (data) {
    data = AES.decrypt(data, secretKey).toString(enc.Utf8);
    let processedData = data;
    try {
      processedData = JSON.parse(data); // if it is json
    } catch (e) {
      processedData = data; // if it is a string
    }
    return processedData;
  } else {
    return null;
  }
};
