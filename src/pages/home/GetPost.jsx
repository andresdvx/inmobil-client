/* eslint-disable no-unused-vars */
import { useContext, useEffect } from "react";
import NavBar from "../../components/NavBar";
import { useParams } from "react-router-dom";
import { PostContext } from "../../context/PostContext";

export const GetPost = () => {
  const { getPost } = useContext(PostContext);
  const params = useParams();
  useEffect(() => {
    const getAPost = async () => {
      if (params.post_id) {
        const post = await getPost(params.post_id);
        console.log(post);
      }
    };
    getAPost();
  });
  return (
    <div className="bg-zinc-50 dark:bg-background2 dark:text-white">
      <NavBar />
    </div>
  );
};
