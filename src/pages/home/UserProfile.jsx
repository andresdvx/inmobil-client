/* eslint-disable no-unused-vars */
import NavBar from "../../components/NavBar";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { useParams } from "react-router-dom";
import { Avatar } from "@nextui-org/react";
import dateParser from "../../helpers/dateParser";
import "../../app.css";

const UserProfile = () => {
  const params = useParams();
  const [profile, setProfile] = useState({});
  const { getProfile } = useContext(UserContext);
  useEffect(() => {
    const getAprofile = async () => {
      const response = await getProfile(params.user_id);
      setProfile(response);
    };
    getAprofile();
  }, []);
  console.log(profile);
  return (
    <div className="bg-zinc-50 dark:bg-background2 dark:text-white min-h-screen flex  sm:px-0">
      <NavBar />
      <main className="" id="main-content">
        <header className="w-full h-[340px]">
          <div className="w-full h-[60%]">
            {profile && <img src={profile.banner} alt="" className="w-full h-full object-cover"/>}
          </div>
          <div className="w-[100px] h-[100px] z-50 relative left-5 bottom-12">
          <Avatar src={profile && profile.foto} className="w-full h-full " />
          </div>
          <div className="w-full h-5 flex justify-evenly items-center">
          <span className="ml-5">@{profile && profile.user}</span>
          <span>Joined: {profile.created_at && dateParser(profile.created_at)}</span>
          </div>
          <p className="mt-5 text-center">{profile && profile.biography}</p>
        </header>
      </main>
    </div>
  );
};
export default UserProfile;
