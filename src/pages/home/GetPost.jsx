/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import NavBar from "../../components/NavBar";
import { useParams } from "react-router-dom";
import { PostContext } from "../../context/PostContext";
import "../../app.css";
import { Card, CardHeader, Image } from "@nextui-org/react";

const GetPost = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClick = (pic, i) => {
    setSelectedImage(pic[i].url);
  };

  const { getPost } = useContext(PostContext);
  const [gotPost, setGotPost] = useState({});
  const params = useParams();
  useEffect(() => {
    const getAPost = async () => {
      if (params.post_id) {
        const post = await getPost(params.post_id);
        setGotPost(post);
      }
    };
    getAPost();
  }, []);
  const { post } = gotPost;
  console.log(post);
  return (
    <div className="bg-zinc-50 dark:bg-background2 text-neutral-700 dark:text-white min-h-screen">
      <NavBar />
      <main className="min-h-[450px] " id="main-content">
        <section
          id="photos"
          className="min-w-full gap-2 grid grid-cols-12 grid-rows-2 px-8 mt-5"
        >
          {post && Array.isArray(post.pictures) ? (
            post.pictures.map((pic, i) => {
              return (
                <Card className="col-span-12 sm:col-span-4 h-[300px]" key={i}>
                  <CardHeader className="absolute z-10 top-1 flex-col !items-start"></CardHeader>
                  <Image
                    removeWrapper
                    alt="Card background"
                    className="z-0 w-full h-full object-cover"
                    src={pic.url}
                  />
                </Card>
              );
            })
          ) : (
            <></>
          )}
        </section>
        {post && (
          <section id="description" className=" w-full dark:bg-background2 min-h-[1000px]">
            <header className="w-full h-12 ">
              <p className="w-full pt-4 pl-6 ">{post.description}</p>
              <h3 className="mt-5 px-5 text-redDefault text-2xl font-medium">Description</h3>
              <p className="mt-5 px-5 text-whiteDefult">{post.additional_desc}</p>
            </header>
          </section>
        )}
      </main>
    </div>
  );
};
export default GetPost;
