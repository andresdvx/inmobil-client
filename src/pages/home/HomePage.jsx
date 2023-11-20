/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { parseISO, format } from "date-fns";
import { es } from "date-fns/locale";
import NavBar from "../../components/NavBar";
const HomePage = () => {
  const { userData } = useContext(AuthContext);
  let user_id;
  let user;
  let email;
  let createdAt;
  
  if (userData) {
    user_id = userData.user_id;
    user = userData.user;
    email = userData.email;
    createdAt = userData.createdAt;
  }

  let date = "";
  let dateFormated = "";

  if (createdAt) {
    date = parseISO(createdAt);
    dateFormated = format(date, "dd  MMMM yyyy", { locale: es });
  }

 
  return (
    <div className="bg-zinc-50 dark:bg-background2 dark:text-white w-screen h-screen">
      <NavBar/>
      {user_id && <p>{user_id}</p>}
      {user && <p>{user}</p>}
      {email && <p>{email}</p>}
      {createdAt && <p>{dateFormated}</p>}
      {/* <Infocard /> */}
      
    </div>
  );
};

export default HomePage;
