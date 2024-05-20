import Button from "./Button";

import Login from "./Login";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="  text-center  bg-zinc-700 min-h-screen">
      <Navbar/>
    
      <Button name="Sign Up" />
    </div>
  );
};

export default Home;
