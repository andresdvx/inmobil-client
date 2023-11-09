import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"

export const HomePage = () => {
  const {userData} = useContext(AuthContext);
  const {id, user, email} = userData;
  return (
    <div>
      {id && <p>{id}</p>}
      {user && <p>{user}</p>}
      {email && <p>{email}</p>}
    </div>
  )
}
