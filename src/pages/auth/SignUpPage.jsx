/* eslint-disable no-unused-vars */
import { Input } from "@nextui-org/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  EyeFilledIcon,
  MailIcon,
  EyeSlashFilledIcon,
} from "../../assets/InputIcons";
import Ilustration from "../../components/auth/Ilustration";
import { SubmitButton } from "../../components/auth/SubmitButton";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import GoogleButton from "../../components/auth/GoogleButton";

export const SignUpPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  const [user, setUser] = useState({ user: "", email: "", password: "" });
  const { signUp, errors, userData } = useContext(AuthContext);

  const navigate = useNavigate();

  const handdleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handdleSubmit = async (e) => {
    e.preventDefault();
    const res = await signUp(user);
    if (res.status == 201) {
      navigate("/sign-in");
    }
  };

  return (
    <div className="w-full  h-[100vh] flex justify-center items-center bg-[#e6e6ed] relative">
      <main className="w-[90%] h-[90%] bg-[#f0eef6] rounded-xl flex md:flex md:justify-center">
        <Ilustration />
        <section className="w-[100%] md:w-[70%] lg:w-[40%] rounded-xl relative">
          <header className="w-full mt-8">
            <h2 className="text-2xl text-center font-semibold mt-10">
              Welcome to inmobil!
            </h2>
            <p className="text-center text-[#a9a9b4] mt-5">
              find the house of your dreams
            </p>
            {errors &&
              errors.map((error, i) => {
                return (
                  <div
                    key={i}
                    className="w-[80%] h-12 grid place-items-center bg-[#f56965] relative z-40 mx-auto mb-2 rounded-md"
                  >
                    <p className="text-white text-center">{error}</p>
                  </div>
                );
              })}
          </header>
          <form
            onSubmit={handdleSubmit}
            className="w-full h-[500px] sm:h-[460px] absolute bottom-14 lg:bottom-0 flex flex-col justify-center items-center"
          >
            <div className="w-[75%] h-[75%] px-1">
              <Input
                name="user"
                size="sm"
                type="text"
                label="Username"
                autoComplete="off"
                className="mb-6 mt-3"
                onChange={handdleInputChange}
              />
              <Input
                name="email"
                label="Email"
                type="email"
                size="sm"
                autoComplete="off"
                onChange={handdleInputChange}
                endContent={
                  <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                }
              />
              <Input
                name="password"
                label="Password"
                size="sm"
                autoComplete="current-password"
                onChange={handdleInputChange}
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
              <SubmitButton text={"Sign Up"} />
              <div className="flex justify-center mt-4 ">
                <span className="text-[#aeacb8] mr-2">Are you a member?</span>
                <Link to={"/sign-in"} className="text-[#94b7ec] mr-3 ">
                  Login now
                </Link>
              </div>
              <p className="text-center text-[#aeacb8] mt-4">
                Or continue with
              </p>
              <GoogleButton />
            </div>
          </form>
        </section>
      </main>
    </div>
  );
};
