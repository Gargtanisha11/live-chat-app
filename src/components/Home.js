import Button from "./Button";

import Login from "./Login";

const Home = () => {
  return (
    <div className=" py-[7%] text-center border rounded-lg border-black mx-[20%] my-[5%] w-[50%]">
      <Login/>
      <Button name="Sign Up" />
    </div>
  );
};

export default Home;
