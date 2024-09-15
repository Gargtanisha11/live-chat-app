import { useState } from "react";
import { HAMBURGER_MENU, LiveChat_LOGO, Navbar_opt, RESTE_ALL_STATE } from "../utils/Constants";
import AuthenticateButton from "./AuthenticateButton";
import { useDispatch, useSelector } from "react-redux";
import { userLoggedOut } from "../redux/authenticationDetailSlice";
import { logout } from "../hooks/auth";
import { useNavigate } from "react-router-dom";
import { useSocket } from "../contexts/SocketContext";

const Navbar = () => {
  const socket = useSocket();

  const navigate = useNavigate();
  const  userDetails = useSelector(state=>state.authenticationDetails.userDetails)
  const isAuthenticated = useSelector(state=> state.authenticationDetails.isloggedIn) ;
  const  [selectOpt,setSelectOpt] =useState(false);
  const toggleSelectOpt=()=>{
     setSelectOpt(!selectOpt);
  }

 const dispatch=useDispatch();

 
const handleClickOpt=(opt)=>{
  switch (opt) {
    case "Home":
      navigate("/")
      break;
    case "Chats":
      navigate("/myChats")
      break;
    case "Login":
      navigate("/login")
      break;
    case "Setting":
      navigate("/profile")
      break;
    default:
      navigate("/")
      break;
  }
}

 const handleLogout=async()=>{
  const response = await logout();
  
  if(response?.status ===200){
    socket.disconnect()
    toggleSelectOpt();
    dispatch({type:RESTE_ALL_STATE})
  }
 }
  return (
    <div className="h-10  md:h-24 w-screen text-white bg-zinc-400 flex flex-row place-content-between  ">
      <div className="flex flex-row items-center">
        <div className=" h-8 w-8 md:h-20 md:w-20 mx-12 ">
          <img
            src={LiveChat_LOGO}
            alt=" logo for live chat "
            className="rounded-lg"
          />
        </div>
        <div className=" font-mono font-bold text-lg md:text-xl lg:text-2xl text-blue-900">
          Live Chat Application
        </div>
      </div>

      <div className=" hidden md:flex flex-row px-5 items-center md:text-lg lg:text-xl mr-5 ">
        {
          isAuthenticated && <img className=" h-10 w-10 rounded-full mt-1 mx-2" src={userDetails?.avatar} alt="user"/>
        }
        {
          Navbar_opt.map((option)=>
          (<div className="md:mx-2 lg:mx-5 hover:text-zinc-600 " key={option} onClick={()=>handleClickOpt(option)}>{ option}</div>))
        }

        {!isAuthenticated ? (
          <AuthenticateButton name="Log In" />
        ) : (
          <AuthenticateButton name="Log Out" />
        )}
      </div>
      <div className=" md:hidden mr-5 flex flex-row   h-7 self-center text-black z-10">
        {
          isAuthenticated && <img className=" w-8 h-8 mx-2 mb-1 rounded-full " src={userDetails?.avatar} alt="user"/>
        }
        <label htmlFor="navbar opt"  onClick={toggleSelectOpt} >
          <img className=" mx-2 h-8" src={HAMBURGER_MENU} alt=" hamburger menu" />
        </label>
        {selectOpt && <select name="navbar opt " id="navbar opt" size={Navbar_opt.length+1} >
          {Navbar_opt.map((option) => (
            <option key={option} onClick={()=>{toggleSelectOpt() ; handleClickOpt(option)}}  >{option}</option>
          ))}
          {!isAuthenticated ? (
            <option onClick={()=>{toggleSelectOpt(); handleClickOpt("Login")  }} >Log In</option>
          ) : (
            <option onClick={()=>handleLogout()} >Log Out</option>
          )}
        </select>}
      </div>
    </div>
  );
};
export default Navbar;
