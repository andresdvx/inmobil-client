import axios from "./axios.js";

export const getProfileApi = async (user_id)=>{
    const response = await axios.get(`get-profile/${user_id}`);
    return response;
};