/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { AuthContext } from "../../context/AuthContext";
import NavBar from "../../components/NavBar";
import PostCard from "../../components/PostCard";
import InfoCard from "../../components/InfoCard";
import "../../app.css";
import { useContext, useEffect} from "react";
import Spinner from "../../components/Spinner";
import SignCard from "../../components/SignCard";
import { PostContext } from "../../context/PostContext";

const HomePage = () => {
  const { userData, authenticated } = useContext(AuthContext);
  const { loading, getPosts, posts } = useContext(PostContext);
  useEffect(() => {
    getPosts();
  }, []);
  
  return (
    <div className="bg-zinc-50 dark:bg-background2 dark:text-white min-h-screen flex">
      <NavBar />
      <main className="" id="main-content">
        <div className="flex flex-col justify-center items-end w-full lg:w-[55%]">
          {loading ? <Spinner /> : <PostCard posts={posts}/>}
        </div>
        <section className="hiiden lg:fixed absolute right-2 top-2">
          {authenticated ? <InfoCard /> : <SignCard />}
        </section>
      </main>
    </div>
  );
};
export default HomePage;
