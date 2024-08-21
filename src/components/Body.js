import { BODY_CHAT_IMG, TEXT_FOR_APP } from "../utils/Constants";
import AuthenticateButton from "./AuthenticateButton";
import { useDispatch, useSelector } from "react-redux";
import { userLoggedIn } from "../redux/authenticationDetailSlice";
import { userDetails } from "../hooks/auth";
import { useEffect } from "react";

const Body = () => {
  // const {isAuthenticated}=useAuth0();

  const isAuthenticated = useSelector(
    (state) => state.authenticationDetails.isloggedIn
  );

  
  return (
    <div className="  grid  bg-zinc-700 mx-32  md:grid-cols-2 items-center  md:place-content-between  text-center">
      <div className=" md:order-2 w-64 my-5  md:w-96 self-center ">
        <img src={BODY_CHAT_IMG} alt=" Img for chatting " />
      </div>
      <div className=" md:order-1 w-64 text-white italic md:mt-44  ">
        <h1 className="  text-2xl "> Chatting </h1>
        <h1>{TEXT_FOR_APP}</h1>
        {!isAuthenticated ? (
          <div className=" flex flex-row mt-2 ">
            <AuthenticateButton name="Sign Up" />
            <AuthenticateButton name="Log In" />
          </div>
        ) : (
          <h1 className=" text-xl font-bold text-cyan-300 m-2 ">
            You'r welcome
          </h1>
        )}
      </div>
    </div>
  );
};

export default Body;
