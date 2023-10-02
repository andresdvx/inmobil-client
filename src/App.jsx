/* eslint-disable no-unused-vars */
import { NextUIProvider } from "@nextui-org/react";
import { BrowserRouter } from "react-router-dom";
import AuthRoutes from "./routes/AuthRoutes";
import "./app.css";

const App = () => {
  return (
    <NextUIProvider>
      <BrowserRouter>
        <AuthRoutes />
      </BrowserRouter>
    </NextUIProvider>
  );
};

export default App;
