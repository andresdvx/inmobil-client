/* eslint-disable no-unused-vars */
import { NextUIProvider } from "@nextui-org/react";
import { BrowserRouter as Router } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { AuthProvider } from "./context/AuthContext";
import AppRoutes from "./routes/AppRoutes";
import "./app.css";

const App = () => {
  return (
    <NextUIProvider>
      <GoogleOAuthProvider clientId="814836190695-tpbaduo3d2ikak1d5ne3a0251qfo281n.apps.googleusercontent.com">
        <AuthProvider>
          <Router>
            <AppRoutes />
          </Router>
        </AuthProvider>
      </GoogleOAuthProvider>
    </NextUIProvider>
  );
};

export default App;
