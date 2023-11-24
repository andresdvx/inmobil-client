import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  User,
} from "@nextui-org/react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

const Infocard = () => {
  const { userData } = useContext(AuthContext);
  const photo = userData.photo;
  return (
    <Card className="hidden max-w-[400px] lg:flex">
      <CardHeader className="flex gap-3">
        <User
          name={userData.email}
          description={
            <Link to={`/profile/${userData.user_id}`}>
              @{userData.user}
            </Link>
          }
          avatarProps={{
            src: photo,
          }}
        />
      </CardHeader>
      <Divider />
      <CardBody>
        <p>{userData.biography}</p>
      </CardBody>
      <Divider />
      <CardFooter></CardFooter>
    </Card>
  );
};
export default Infocard;
