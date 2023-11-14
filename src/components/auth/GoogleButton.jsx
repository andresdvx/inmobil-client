/* eslint-disable no-unused-vars */
import { GoogleLogin } from "@react-oauth/google";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

export const GoogleButton = () => {
  const { googleSign } = useContext(AuthContext);

  return (
    <div className="mx-auto flex justify-center mt-2">
      <GoogleLogin
        onSuccess={async (credentialResponse) => {
          console.log(credentialResponse.credential);
          const authToken = credentialResponse.credential;
          await googleSign(authToken);
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
    </div>
  );
};

export default GoogleButton;
