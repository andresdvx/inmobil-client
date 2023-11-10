/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useEffect } from "react";
import { apiSignIn, apiSignUp } from "../api/authRequest";
import { useState } from "react";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [zodErrors, setZodErrors] = useState([]);
  const [error, setError] = useState("");
  const [userData, setUserData] = useState([]);

  const signIn = async (data) => {
    try {
      const response = await apiSignIn(data);
      setUserData(response.data);
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
      if (error.response.status != 500) {
        setError(error.response.data);
        return;
      }
      setZodErrors(error.response.data);
    }
  };

  const signUp = async (data) => {
    try {
      const response = await apiSignUp(data);
      setUserData(response.data);
      return response;
    } catch (error) {
      console.log(error);
      setZodErrors(error.response.data);
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
    if (zodErrors.length > 0) {
      const timer = setTimeout(() => {
        setZodErrors([]);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [zodErrors]);

  useEffect(() => {
    if (error != null) {
      const timer = setTimeout(() => {
        setError("");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  return (
    <AuthContext.Provider value={{ error,zodErrors, userData, signUp, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};
