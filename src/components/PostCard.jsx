import { Link } from "react-router-dom";
import { User, Image } from "@nextui-org/react";

const PostCard = () => {
  return (
    <div className="max-w-md bg-white border-2 border-gray-200 shadow dark:bg-[#27272A] dark:border-gray-700 mx-auto my-auto mt-1">
      <Link>
        <User
          name="Jane Doe"
          description="Product Designer"
          className="ml-1 mt-1"
          avatarProps={{
            src: "https://i.pinimg.com/236x/08/af/23/08af239c9483134d8b2518a531a1bd52.jpg",
          }}
        />
      </Link>
      <Image
      radius="none"
      src="https://app.requestly.io/delay/1000/https://nextui-docs-v2.vercel.app/images/fruit-4.jpeg"
      alt="NextUI Image with fallback"
    />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Price: 360.000.000
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Lorem Ipsum es simplemente el texto de relleno de las imprentas y
          archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de
          las industrias desde el año 1500, cuando un impresor (N. del T.
          persona que se dedica a la imprenta) desconocido usó una galería de
          textos y los mezcló de tal manera que logró hacer un libro de textos
          especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como
          texto de relleno en documentos
        </p>
      </div>
    </div>
  );
};

export default PostCard;
