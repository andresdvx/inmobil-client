/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import { createContext } from "react";
import { getProfileApi } from "../api/userRequest";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    
  const getProfile = async (user_id) => {
    try {
      const response = await getProfileApi(user_id);
      return response.data.profile[0];
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <UserContext.Provider value={{getProfile}}>{children}</UserContext.Provider>
  );
};
