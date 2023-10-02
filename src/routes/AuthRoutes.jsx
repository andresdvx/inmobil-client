import { Routes, Route } from "react-router-dom";
import { SignInPage} from "../pages/auth/SignInPage";
import { SignUpPage } from "../pages/auth/SignUpPage";
const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/sign-in" element={<SignInPage />}></Route>
      <Route path="/sign-up" element={<SignUpPage/>}></Route>
    </Routes>
  );
};

export default AuthRoutes;