import { Button, Card } from "@nextui-org/react";
import { Link } from "react-router-dom";

const SignCard = () => {
  return (
    <Card className="hidden min-w-[300px] h-[110px] lg:flex dark:bg-[#27272A]">
      <p className="text-center mt-5">Create an account to publish</p>
      <Button size="md" variant="flat" className="bg-redDefault w-[35%] mt-3 mx-auto">
        <Link to={"/sign-up"}>Sign Up</Link>
      </Button>
    </Card>
  );
};
export default SignCard;
