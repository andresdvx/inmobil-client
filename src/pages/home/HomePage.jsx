import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"
import NavBar from "../../components/NavBar";
export const HomePage = () => {
  const {userData} = useContext(AuthContext);
  const {id, user, email} = userData;
  return (
    <div className="">
      {id && <p>{id}</p>}
      {user && <p>{user}</p>}
      {email && <p>{email}</p>}
      <NavBar/>
    </div>
  )
}
