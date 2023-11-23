/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { AuthContext } from "../../context/AuthContext";
import NavBar from "../../components/NavBar";
import PostCard from "../../components/PostCard";
import InfoCard from "../../components/InfoCard";
import "../../app.css";
import { useContext } from "react";
import SignCard from "../../components/SignCard";

const HomePage = () => {
  const { userData } = useContext(AuthContext);
  return (
    <div className="bg-zinc-50 dark:bg-background2 dark:text-white min-h-screen flex">
      <NavBar />
      <main className="" id="main-content">
        <div className="flex flex-col justify-center items-end w-full lg:w-[55%]">
          <PostCard />
        </div>
        <section className="hiiden lg:fixed absolute right-2 top-2">{userData == null ? <SignCard/> : <InfoCard /> }</section>
      </main>
    </div>
  );
};

export default HomePage;
