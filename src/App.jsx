/* eslint-disable no-unused-vars */
import { NextUIProvider } from "@nextui-org/react";
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import AuthRoutes from "./routes/AuthRoutes";
import "./app.css";

const App = () => {
  return (
    <NextUIProvider>
      <GoogleOAuthProvider clientId="814836190695-tpbaduo3d2ikak1d5ne3a0251qfo281n.apps.googleusercontent.com">
        <BrowserRouter>
          <AuthRoutes />
        </BrowserRouter>
      </GoogleOAuthProvider>
    </NextUIProvider>
  );
};

export default App;
