/* eslint-disable no-unused-vars */
import { Routes, Route } from "react-router-dom";
import ProtectRoutes from "../helpers/ProtectRoutes";
import SignInPage from "../pages/auth/SignInPage";
import SignUpPage from "../pages/auth/SignUpPage";
import HomePage from "../pages/home/HomePage";
import NotFound from "../pages/home/NotFound";
import GetPost from "../pages/home/GetPost";
import NewEstateForm from "../pages/home/NewEstateForm";
import UserProfile from "../pages/home/UserProfile";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/sign-in" element={<SignInPage />}></Route>
      <Route path="/sign-up" element={<SignUpPage />}></Route>
      <Route path="/feed" element={<HomePage />}></Route>
      <Route path="/post/:post_id" element={<GetPost />}></Route>
      <Route path="/profile/:user_id" element={<UserProfile />}></Route>
      <Route element={<ProtectRoutes />}>
        <Route
          path="/post/create-estate/:post_id"
          element={<NewEstateForm />}
        ></Route>
      </Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
};

export default AppRoutes;
