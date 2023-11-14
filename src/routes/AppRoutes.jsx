import { Routes, Route } from "react-router-dom";
import ProtectRoutes from "../helpers/ProtectRoutes";
import SignInPage from "../pages/auth/SignInPage";
import SignUpPage from "../pages/auth/SignUpPage";
import HomePage from "../pages/home/HomePage";
import NotFound from "../pages/home/NotFound";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/sign-in" element={<SignInPage />}></Route>
      <Route path="/sign-up" element={<SignUpPage />}></Route>
      <Route element={<ProtectRoutes />}>
        <Route path="/feed" element={<HomePage />}></Route>
      </Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
};

export default AppRoutes;
