/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { getPostsApi, createPostApi } from "../api/postRequest";
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

  return (
    <PostContext.Provider value={{ createPost, getPosts, posts, loading }}>
      {children}
    </PostContext.Provider>
  );
};
