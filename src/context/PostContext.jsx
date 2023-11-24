/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { getPostsApi,getPostApi, createPostApi } from "../api/postRequest";
import { tr } from "date-fns/locale";
export const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const getPosts = async () => {
    try {
      setLoading(true);
      const response = await getPostsApi();
      const { gotPosts } = response.data;
      setPosts(gotPosts);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const getPost = async(post_id)=>{
    try {
      const response = await getPostApi(post_id);
      return response.data;
    } catch (error) {
      console.log(error, "=> get a post");
    }
  };

  const createPost = async (data) => {
    try {
      setLoading(true);
      const response = await createPostApi(data);
      console.log(response);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const createEstate = async ()=>{

  };

  return (
    <PostContext.Provider value={{ createPost, createEstate, getPosts, getPost, posts, loading }}>
      {children}
    </PostContext.Provider>
  );
};
