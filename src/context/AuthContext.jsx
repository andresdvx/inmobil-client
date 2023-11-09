/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useEffect } from "react";
import { apiSignIn, apiSignUp } from "../api/authRequest";
import { useState } from "react";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [errors, setErrors] = useState([]);
  const [userData, setUserData] = useState([]);

  const signIn = async (data) => {
    try {
      const response = await apiSignIn(data);
      setUserData(response.data);
      return response;
    } catch (error) {
      console.log(error);
      if (!error.response.data) {
        const { data } = error.response;
        setErrors(data);
      }
      setErrors(error.response.data);
    }
  };

  const signUp = async (data) => {
    try {
      const response = await apiSignUp(data);
      setUserData(response.data);
      return response;
    } catch (error) {
      console.log(error);
      if (!error.response.data) {
        setErrors(error.response.data);
      }
      setErrors(error.response.data);
    }
  };

  useEffect(() => {
    if (userData.length > 0) {
      const timer = setTimeout(() => {
        setUserData([]);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [userData]);

  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 2000);
      return () => clearTimeout(timer);
    }
    const timer = setTimeout(() => {
      setErrors([]);
    }, 2000);
    return () => clearTimeout(timer);
  }, [errors]);

  return (
    <AuthContext.Provider value={{ errors, userData, signUp, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};
