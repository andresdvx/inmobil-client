import axios from "./axios.js";

export const apiSignIn = async (data) => {
  const response = await axios.post("sign-in", data);
  return response;
};

export const apiSignUp = async (data) => {
  const response = await axios.post("sign-up", data);
  return response;
};
