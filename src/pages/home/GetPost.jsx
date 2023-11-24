/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import NavBar from "../../components/NavBar";
import { useParams, Link } from "react-router-dom";
import { PostContext } from "../../context/PostContext";
import "../../app.css";
import { Card, CardHeader, Image, User } from "@nextui-org/react";
import dateParser from "../../helpers/dateParser";

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
          <section
            id="description"
            className=" w-full dark:bg-background2 min-h-[1000px]"
          >
            <header className="w-full min-h-[200px]">
              <Link to={`/profile/${post.user_id}`}>
                <User
                  name={post.user}
                  description={post.email}
                  className="ml-5 mt-6 mb-3"
                  avatarProps={{
                    src: "",
                  }}
                />
              </Link>

              <p className="w-full pt-4 pl-6 ">{post.description}</p>
              <p className="w-full pt-4 pl-6">$ {post.price}</p>
              <h3 className="mt-5 px-5 text-redDefault text-2xl font-medium">
                Description
              </h3>
              <p className="mt-5 px-5 text-whiteDefult">
                {post.additional_desc}
              </p>
            </header>
            <div className="w-full min-h-[300px] flex justify-center items-center mt-3">
              <div className="w-[80%] h-full bg-zinc-100 shadow-white p-2 rounded-md">
                <p className="mb-2">Location: {post.location}</p>
                <p className="mb-2">Stratum: {post.stratum}</p>
                <p className="mb-2">Type: {post.type}</p>
                <p className="mb-2">Area: {post.area} mt2</p>
                <p className="mb-2">Built Area: {post.built_area} mt2</p>
                <p className="mb-2">
                  Buitl At: {post.area && dateParser(post.built_at)}
                </p>
                <p className="mb-2">Rooms: {post.n_rooms}</p>
                <p className="mb-2">Bathrooms: {post.n_bathrooms}</p>
                <p className="mb-2">Zone Type: {post.zone_type}</p>
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
};
export default GetPost;
