/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { User } from "@nextui-org/react";
import { useContext, useEffect } from "react";
import { PostContext } from "../context/PostContext";
import dateParser from "../helpers/DateParser";
const PostCard = () => {
  const { getPosts, posts } = useContext(PostContext);
  useEffect(() => {
    getPosts();
  }, []);
  return posts.map((post) => {
    return (
      <div
        key={post.post_id}
        className="max-w-md bg-white  shadow dark:bg-[#27272A] dark:border-gray-700 mx-auto lg:mx-0 my-auto mt-1"
        style={{ minWidth: "420px" }}
      >
        <header>
          <Link>
            <User
              name={post.user}
              description={post.email}
              className="ml-1 mt-1"
              avatarProps={{
                src: "https://i.pinimg.com/236x/08/af/23/08af239c9483134d8b2518a531a1bd52.jpg",
              }}
            />
          </Link>
        </header>
        <section>
          <img src={post.pictures[0].url} className="w-full"></img>
          <div className="flex justify-between">
            <p className="ml-2">$ {post.price}</p>
            <p className="mr-2">{post.location}</p>
          </div>
        </section>
        <footer className="w-[95%] mx-auto mt-3">
          <p>{post.description}</p>
          <p>{dateParser(post.post_date)}</p>
        </footer>
      </div>
    );
  });
};

export default PostCard;
