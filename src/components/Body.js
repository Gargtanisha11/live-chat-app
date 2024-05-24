import { BODY_CHAT_IMG, TEXT_FOR_APP } from "../utils/Constants";
import Button from "./Button";

const Body = () => {
  return (
    <div className="flex flex-row place-content-between">
      <div className=" w-64 text-white italic mt-32 ml-40 ">
        <h1 className="  text-2xl "> Chatting </h1>
        <h1>{TEXT_FOR_APP}</h1>
        <div className=" flex flex-row mt-2 ">
          <Button name="Sign Up"/>
          <Button name="Log In"/>
        </div>
      </div>
      <div className="w-96 mr-72">
        <img src={BODY_CHAT_IMG} alt=" Img for chatting "  />
      </div>
    </div>
  );
};

export default Body;
