import { GoogleLogin } from "@react-oauth/google";

export const GoogleButton = () => {
  return (
    <div className="mx-auto flex justify-center mt-2">
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log(credentialResponse.credential);
        }}
        onError={() => {
          console.log("Login Failed");
        }}
        useOneTap
      />
    </div>
  );
};

export default GoogleButton;
