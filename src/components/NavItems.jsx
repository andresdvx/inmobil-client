/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import {
  HomeIcon,
  NewPostIcon,
  MenuIcon,
  SunIcon,
  MoonIcon,
} from "../assets/NavIcons";
import { Image, Avatar } from "@nextui-org/react";
import { useState } from "react";
import NewPostForm from "./NewPostForm";

const NavItems = () => {
  const [theme, setTheme] = useState();
  const x = () => {
    if (localStorage.tema == "dark") {
      document.body.classList.remove("dark");
      localStorage.tema = "";
      setTheme("");
    } else {
      localStorage.tema = "dark";
      setTheme("dark");
      document.body.classList.add("dark");
    }
  };

  return (
    <>
      <div className="hidden sm:grid w-full h-20 place-content-center">
        <Image width={50} height={50} src="inmobil.png" radius="sm" />
      </div>
      {/* items */}
      <Link
        to={"/feed"}
        className="grow h-12 flex justify-evenly items-center || lg:w-full lg:relative"
      >
        <HomeIcon />
        <p className="hidden lg:flex">Home</p>
      </Link>
      <Link className="grow h-12 flex justify-evenly items-center || lg:w-full  lg:relative">
        <div className="lg:absolute lg:left-4">
          <Avatar
            size="sm"
            isBordered
            src="https://i.pinimg.com/564x/8a/64/ff/8a64ffe27232d40c19bd7a094a0d7a38.jpg"
          />
        </div>
        <p className="hidden lg:flex">Profile</p>
      </Link>
      <div className=" grow h-12 flex justify-evenly items-center || lg:w-full lg:relative">
        <NewPostForm />
      </div>
      <Link className="grow h-12 flex justify-evenly items-center || lg:w-full lg:relative">
        <MenuIcon />
        <p className="hidden lg:flex">Options</p>
      </Link>
      <button
        onClick={x}
        className="grow  h-12 flex justify-evenly items-center || lg:relative"
      >
        {theme == "dark" ? <SunIcon /> : <MoonIcon />}
      </button>
    </>
  );
};

export default NavItems;
