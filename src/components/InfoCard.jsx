import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  User,
  Link,
} from "@nextui-org/react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Infocard = () => {
  const { userData } = useContext(AuthContext);
  const photo = userData.photo;
  return (
    <Card className="hidden max-w-[400px] lg:flex">
      <CardHeader className="flex gap-3">
        <User
          name={userData.email}
          description={
            <Link href="https://twitter.com/jrgarciadev" size="sm" isExternal>
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
