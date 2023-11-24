/* eslint-disable no-unused-vars */
import { Routes, Route } from "react-router-dom";
import ProtectRoutes from "../helpers/ProtectRoutes";
import SignInPage from "../pages/auth/SignInPage";
import SignUpPage from "../pages/auth/SignUpPage";
import HomePage from "../pages/home/HomePage";
import NotFound from "../pages/home/NotFound";
import NewPostPage from "../pages/home/NewPostPage";
import { GetPost } from "../pages/home/GetPost";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/sign-in" element={<SignInPage />}></Route>
      <Route path="/sign-up" element={<SignUpPage />}></Route>
      <Route path="/feed" element={<HomePage />}></Route>
      <Route element={<ProtectRoutes />}>
        <Route path="/post/:post_id" element={<GetPost />}></Route>
      </Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
};

export default AppRoutes;
