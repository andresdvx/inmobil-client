import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { parseISO, format } from "date-fns";
import { es } from "date-fns/locale";
import Infocard from "../../components/InfoCard";
const HomePage = () => {
  const { userData } = useContext(AuthContext);
  const { user_id, user, email, createdAt } = userData;

  let date = "";
  let dateFormated = "";

  if (createdAt) {
    date = parseISO(createdAt);
    dateFormated = format(date, "dd  MMMM yyyy", { locale: es });
  }

  const x = () => {
    if (localStorage.tema == "dark") {
      document.body.classList.remove("dark");
      localStorage.tema = "";
    } else {
      localStorage.tema = "dark";
      document.body.classList.add("dark");
    }
  };

  return (
    <div className="bg-zinc-50 dark:bg-background2 dark:text-white w-screen h-screen">
      {user_id && <p>{user_id}</p>}
      {user && <p>{user}</p>}
      {email && <p>{email}</p>}
      {createdAt && <p>{dateFormated}</p>}
      <Infocard />
      <button onClick={x}> dark mode</button>
    </div>
  );
};

export default HomePage;
