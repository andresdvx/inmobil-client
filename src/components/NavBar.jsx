// import { FiPlusSquare } from "react-icons/fi";
import { Link } from "react-router-dom";
import { NewPostIcon, HomeIcon } from "../assets/NavBarIcons";
const NavBar = () => {
  return (
    <nav>
        <NewPostIcon/>
        <Link to={"/sign-in"}><HomeIcon/></Link>
        
    </nav>
  )
}

export default NavBar;