
import { Outlet } from "react-router-dom";



import Navbar from "./Navbar";
import { useEffect } from "react";

const Home = () => {
   
  return (
    <div className="  text-center h-screen bg-zinc-700 ">
      <Navbar/>
      <Outlet/>   
    </div>
  );
};

export default Home;
