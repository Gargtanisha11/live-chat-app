
import { Outlet } from "react-router-dom";



import Navbar from "./Navbar";
import { useEffect } from "react";
import { userDetails } from "../hooks/auth";

const Home = () => {
   const fetchUserData=async()=>{
     await userDetails();
   }
  useEffect(()=>{
      fetchUserData();
  },[])
  return (
    <div className="  text-center h-screen bg-zinc-700 ">
      <Navbar/>
      <Outlet/>   
    </div>
  );
};

export default Home;
