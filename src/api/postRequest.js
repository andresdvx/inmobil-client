import axios from "./axios";

export const getPostsApi = async () => {
  const response = await axios.get("get-posts");
  return response;
};

export const getPostApi = async (post_id)=>{
  const response = await axios.get(`get-post/${post_id}`);
  return response;
};

export const createPostApi = async (data)=>{
  const response = await axios.post("create-post", data);
  return response;
};