import {Card, CardHeader, CardBody, CardFooter, Divider,Image, Button} from "@nextui-org/react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Infocard = ()=> {
    const {userData} = useContext(AuthContext);

  return (
    <Card className="hidden max-w-[400px] lg:flex">
      <CardHeader className="flex gap-3">
        <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md">{userData.user}</p>
          <p className="text-small text-default-500">{userData.email}</p>
        </div>
      </CardHeader>
      <Divider/>
      <CardBody>
        <p>Make a new Post</p>
      </CardBody>
      <Divider/>
      <CardFooter>
        <Button variant="flat">New Post</Button>
      </CardFooter>
    </Card>
  );
}
 export default Infocard;