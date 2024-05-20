import { LiveChat_LOGO } from "../utils/Constants";
import Button from "./Button";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { isAuthenticated, loginWithRedirect, user, logout } = useAuth0();
  return (
    <div className="  h-24 w-full text-white bg-zinc-400 flex flex-row place-content-between">
      <div className=" h-20 w-20 mx-12 py-2 ">
        <img src={LiveChat_LOGO} alt=" logo for live chat " />
      </div>

      <div className=" flex flex-row px-5 items-center text-xl  ">
        <div className=" mx-5 ">Home</div>
        <div className=" mx-5 ">Feature</div>
        <div className=" mx-5 ">About</div>
        <div className=" mx-5 ">Contact</div>
        {!isAuthenticated ? <Button name="Log In" onClickFunc={loginWithRedirect} /> : <Button name="Log Out" onClickFunc={logout} />}
      </div>
    </div>
  );
};
export default Navbar;
