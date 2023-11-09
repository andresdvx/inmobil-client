import { Routes, Route } from "react-router-dom";
import { HomePage} from "../pages/home/HomePage";
const HomeRoutes = () => {
  return (
    <Routes>
      <Route path="/feed" element={<HomePage />}></Route>
    </Routes>
  );
};

export default HomeRoutes;