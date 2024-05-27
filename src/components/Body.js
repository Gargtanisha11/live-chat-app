import { useAuth0 } from "@auth0/auth0-react";
import { BODY_CHAT_IMG, TEXT_FOR_APP } from "../utils/Constants";
import Button from "./Button";

const Body = () => {
  const {isAuthenticated}=useAuth0();
  return (
    <div className="flex flex-row place-content-between text-center ">
      <div className=" w-64 text-white italic md:mt-44 ml-40 ">
        <h1 className="  text-2xl "> Chatting </h1>
        <h1>{TEXT_FOR_APP}</h1>
        {
          !isAuthenticated?(
            <div className=" flex flex-row mt-2 ">
            <Button name="Sign Up"/>
            <Button name="Log In"/>
          </div>
          ):
          <h1 className=" text-xl font-bold text-cyan-300 m-2 "> You'r welcome</h1>
        }
       
      </div>
      <div className="w-96 mr-72 mt-20">
        <img src={BODY_CHAT_IMG} alt=" Img for chatting "  />
      </div>
    </div>
  );
};

export default Body;
