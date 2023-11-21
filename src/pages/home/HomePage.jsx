/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { parseISO, format } from "date-fns";
import { es } from "date-fns/locale";
import NavBar from "../../components/NavBar";
import PostCard from "../../components/PostCard";
import InfoCard from "../../components/InfoCard";
import "../../app.css";

const HomePage = () => {
  // ... (código comentado para el contexto de usuario)

  return (
    <div className="bg-zinc-50 dark:bg-background2 dark:text-white min-h-screen flex justify-evenly items-center">
      <NavBar />
      <main className="" id="main-content">
        <div className="flex flex-col justify-center w-full">
          <PostCard />
          <PostCard />
          <PostCard />
        </div>
      </main>
    </div>
  );
};

export default HomePage;
