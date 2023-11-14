/* eslint-disable no-unused-vars */
import axios from "./axios.js";

export const apiSignIn = async (data) => {
  const response = await axios.post("sign-in", data);
  return response;
};

export const apiSignUp = async (data) => {
  const response = await axios.post("sign-up", data);
  return response;
};

export const apiGoogleSign = async (authToken)=>{
  const response = await axios.post("google", {authToken});
  return response;
};

export const verifyToken = async (authToken)=>{
  const response = await axios.get("verify-token", authToken);
  return response;
};