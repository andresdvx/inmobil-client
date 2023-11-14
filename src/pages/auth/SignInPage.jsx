/* eslint-disable no-unused-vars */
import { Input } from "@nextui-org/react";
import { useState, useContext, useEffect } from "react";
import { Link, useNavigate,} from "react-router-dom";
import {
  EyeFilledIcon,
  MailIcon,
  EyeSlashFilledIcon,
} from "../../assets/InputIcons";
import GoogleButton from "../../components/auth/GoogleButton";
import Ilustration from "../../components/auth/Ilustration";
import { SubmitButton } from "../../components/auth/SubmitButton";
import { AuthContext } from "../../context/AuthContext";
import { AuthZodErrors, AuthError } from "../../components/auth/AuthErrors";
import Spinner from "../../components/Spinner";
const SignInPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  const [user, setUser] = useState({ email: "", password: "" });
  const { error, zodErrors, signIn, loading, authenticated } =
    useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (authenticated) navigate("/feed")
  }, [authenticated, navigate]);

  const handdleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const hanndleSubmit = async (e) => {
    e.preventDefault();
    const res = await signIn(user);
    if (res.status == 200) {
      navigate("/feed");
    }
  };

  return (
    <div className="w-full  h-[100vh] flex justify-center items-center bg-[#e6e6ed] relative dark:bg-background2 ">
      <main className="w-[90%] h-[90%] bg-[#f0eef6] rounded-xl flex md:flex md:justify-center dark:bg-gray-800">
        <Ilustration />
        <section className="w-[100%] md:w-[70%] lg:w-[40%] rounded-xl relative dark:bg-gray-800">
          <header className="w-full mt-8">
            <h2 className="text-2xl text-center font-semibold mt-10 dark:text-white">
              Welcome to inmobil!
            </h2>
            <p className="text-center text-[#a9a9b4] mt-5">
              find the house of your dreams
            </p>
            {error !== null && error !== undefined && error.message && (
              <AuthError error={error} />
            )}
            {zodErrors &&
              zodErrors.map((zodError, i) => {
                return <AuthZodErrors key={i} zodError={zodError} />;
              })}
          </header>

          <form
            onSubmit={hanndleSubmit}
            className="w-full h-[500px] sm:h-[460px] absolute bottom-14 lg:bottom-0 flex flex-col justify-center items-center"
          >
            <div className="w-[75%] h-[75%] px-1">
              <Input
                name="email"
                label="Email"
                type="email"
                size="sm"
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
              <SubmitButton text={"Sign In"} />
              <div className="flex justify-center mt-4 ">
                <span className="text-[#aeacb8] mr-2">Are you a member?</span>
                <Link to={"/sign-up"} className="text-[#94b7ec] mr-3 ">
                  Sign Up
                </Link>
              </div>
              <p className="text-center text-[#aeacb8] mt-4">
                Or continue with
              </p>
              <GoogleButton />
              {loading && (
                <div className="w-full flex justify-center mt-2">
                  <Spinner />
                </div>
              )}
            </div>
          </form>
        </section>
      </main>
    </div>
  );
};

export default SignInPage;
