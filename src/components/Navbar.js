import { LiveChat_LOGO } from "../utils/Constants";
import Button from "./Button";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { isAuthenticated} = useAuth0();
  return (
    <div className="  h-24 w-full text-white bg-zinc-400 flex flex-row place-content-between ">
      <div className="flex flex-row items-center">
        <div className=" h-20 w-20 mx-12  ">
          <img
            src={LiveChat_LOGO}
            alt=" logo for live chat "
            className="rounded-lg"
          />
        </div>
        <div className=" font-mono font-bold text-2xl text-blue-900"> Live Chat Application </div>
      </div>

      <div className=" flex flex-row px-5 items-center text-xl  ">
        <div className=" mx-5 ">Home</div>
        <div className=" mx-5 ">Feature</div>
        <div className=" mx-5 ">About</div>
        <div className=" mx-5 ">Contact</div>
        {!isAuthenticated ? (
          <Button name="Log In"  />
        
        ) : (
          <Button name="Log Out"  />
        )}
      </div>
    </div>
  );
};
export default Navbar;
