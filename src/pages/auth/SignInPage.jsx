/* eslint-disable no-unused-vars */
import { Input } from "@nextui-org/react";
import { EyeFilledIcon } from "../../assets/EyeFilledIcon";
import { EyeSlashFilledIcon } from "../../assets/EyeSlashFilledIco";
import { useState } from "react";
import { Link } from "react-router-dom";

export const SignInPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className="w-full  h-[100vh] flex justify-center items-center bg-[#e6e6ed] relative">
      <main className="w-[90%] h-[90%] bg-[#f0eef6] rounded-xl flex md:flex md:justify-center">
        <article className="hidden  w-[60%] h-full z-50 rounded-xl bg-[#d69afc] lg:flex items-center">
          <img
            src="../../public/ilustracion-casa.webp"
            className="w-full object-cover"
          ></img>
        </article>
        <section className="w-[100%] md:w-[70%] lg:w-[40%] rounded-xl relative">
          <header className="w-full mt-8">
            <h2 className="text-2xl text-center font-semibold mt-10">
              Welcome to inmobil!
            </h2>
            <p className="text-center text-[#a9a9b4] mt-5">
              find the house of your dreams
            </p>
          </header>
          <form className="w-full h-[500px] sm:h-[460px] absolute bottom-14 lg:bottom-0 flex flex-col justify-center items-center">
            <div className="w-[75%] h-[75%] px-1">
              <Input
                isClearable
                type="text"
                label="User"
                size="sm"
                onClear={() => console.log("input cleared")}
                className="mb-5 mt-5"
              />
              <Input
                label="Password"
                size="sm"
                autoComplete="current-password"
                endContent={
                  <button
                    className="focus:outline-none"
                    type="button"
                    onClick={toggleVisibility}
                  >
                    {isVisible ? (
                      <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                    ) : (
                      <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                    )}
                  </button>
                }
                type={isVisible ? "text" : "password"}
                className="mb-6 mt-5"
              />
              <Link className="float-right text-[#aeacb8]">
                Forgot your password?
              </Link>
              <button
                type="submit"
                className="w-full h-11 bg-[#f56965] text-white rounded-md mt-4"
              >
                Sign In
              </button>
              <div className="flex justify-center mt-4 ">
                <span className="text-[#aeacb8] mr-2">Not a member?</span>
                <Link to={"/sign-up"} className="text-[#94b7ec] mr-3 ">
                  Register Now
                </Link>
              </div>
              <p className="text-center text-[#aeacb8] mt-4">
                Or continue with
              </p>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
};
