/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useEffect } from "react";
import { useState } from "react";
import Cookies from "js-cookie";
import {
  apiSignIn,
  apiSignUp,
  verifyToken,
  apiGoogleSign,
} from "../api/authRequest";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [zodErrors, setZodErrors] = useState([]);
  const [error, setError] = useState("");
  const [userData, setUserData] = useState([]);
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);

  const signIn = async (data) => {
    try {
      setLoading(true);
      const response = await apiSignIn(data);

      setUserData(response.data);
      return response;
    } catch (error) {
      console.log(error);
      if (error.response.status != 500) {
        setError(error.response.data);
        return;
      }
      setZodErrors(error.response.data);
    } finally {
      setLoading(false);
    }
  };

  const signUp = async (data) => {
    try {
      const response = await apiSignUp(data);
      setLoading(true);
      setUserData(response.data);
      return response;
    } catch (error) {
      console.log(error);
      if (error.response.status != 500) {
        setError(error.response.data);
        return;
      }
      setZodErrors(error.response.data);
    } finally {
      setLoading(false);
    }
  };

  const googleSign = async (authToken) => {
    try {
      const response = await apiGoogleSign(authToken);
      setUserData(response.data);
      setLoading(true);
    } catch (error) {
      console.log(error);
    }finally{
      setLoading(false);
    }
  };

  useEffect(() => {
    if (userData) {
      if (userData.length > 0) {
        const timer = setTimeout(() => {
          setUserData([]);
        }, 2000);
        return () => clearTimeout(timer);
      }
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

  useEffect(() => {
    const validateAuth = async () => {
      const authToken = Cookies.get("authToken");
      if (!authToken) {
        setAuthenticated(false);
        setUserData(null);
        return;
      }
      try {
        const response = await verifyToken(authToken);
        if (!response) {
          setUserData(null);
          setAuthenticated(false);
          return;
        }
        setUserData(response.data);
        setAuthenticated(true);
      } catch (error) {
        setError(error.response.data);
        setAuthenticated(false);
      }
    };
    validateAuth();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        error,
        zodErrors,
        userData,
        loading,
        authenticated,
        signUp,
        signIn,
        googleSign,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
