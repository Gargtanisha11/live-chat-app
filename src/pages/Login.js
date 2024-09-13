// import { useAuth0 } from "@auth0/auth0-react";
// import AuthenticateButton from "./AuthenticateButton";

import {  useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login, } from "../hooks/auth";
import { useDispatch } from "react-redux";
import { userLoggedIn } from "../redux/authenticationDetailSlice";

const Login = () => {
  // every field value
  // store all field value in an object with same field name as backend
  // after checks call the post api of the
  const [data, setData] = useState({
    userName: "",
    email: "",
    password: "",
  });
   const dispatch= useDispatch();
   const navigate = useNavigate();
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState("");


  const handleDataChange = async (name, e) => {
    setData({ ...data, [name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await login(data);
    if(response?.status === 200){
      console.log(response?.data?.data);
      dispatch(userLoggedIn(response?.data?.data));
      navigate("/");
    }
    handleReset(e); 
  };

  const handleReset = async(e) => {
    e.preventDefault();
    
     const newData=Object.keys(data).reduce((acc,field)=>{
      acc[field]= ""
       return acc;
     },{})
    setData(newData);
    setIsError(false);
    setError("");

    };

  return (
    <div className=" bg-blue-950 max-h-fit py-20 xl:py-32  px-10 xl:px-96">
      <form className=" bg-slate-500 bg-opacity-50 text-gray-400 w-[50vx]  md:mx-32 py-10 px-5 xl:px-20 rounded-lg ">
        <div className=" text-white text-3xl font-bold p-4">
          <h1>SignIn</h1>
        </div>
        <div className=" w-full py-4 px-6 md:px-8 grid grid-flow-row lg:flex justify-between">
          <label htmlFor="name" className="lg:w-[30%] h-8">
            UserName
          </label>
          <input
            type="text"
            id="name"
            className="w-[42vw] lg:w-[70%] h-8 px-2 text-black"
            maxLength={26}
            value={data?.userName}
            placeholder="user name"
            onChange={(e) => handleDataChange("userName", e)}
          />
        </div>
        <div className=" w-full py-4 px-6 md:px-8 grid grid-flow-row lg:flex justify-between">
          <label htmlFor="email" className="lg:w-[30%] h-8">
            Email
          </label>
          <input
            type="email"
            id="email"
            className=" w-[42vw] lg:w-[70%] h-8 px-2 text-black"
            value={data?.email}
            placeholder="email"
            onChange={(e) => handleDataChange("email", e)}
          />
        </div>
        <div className=" w-full py-4 px-6 md:px-8 grid grid-flow-row lg:flex justify-between">
          <label htmlFor="password" className="lg:w-[30%] h-8">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-[42vw] lg:w-[70%] h-8 px-2 text-black"
            maxLength={26}
            value={data?.password}
            placeholder="password"
            onChange={(e) => handleDataChange("password", e)}
          />
        </div>
        {isError && (
          <div className=" text-rose-950 w-full py-4 px-16 lg:px-8">
            {error}
          </div>
        )}
        <div className="w-full py-4 px-16 lg:px-8  flex justify-between">
          <button
            className=" bg-blue-900 rounded-lg  px-5 py-2 hover:bg-blue-700 active:bg-blue-950"
            onClick={(e) => handleSubmit(e)}
          >
            Submit
          </button>
          <button
            className=" bg-blue-900 rounded-lg  px-5 py-2  hover:bg-blue-700 active:bg-blue-950"
            onClick={(e) => handleReset(e)}
          >
            Reset
          </button>
        </div>
        <div className=" text-black py-5 px-6">
          <h1>
            Don't have account ? <Link to="/register">Register</Link>
          </h1>
        </div>
      </form>
    </div>
  );

  // const {isAuthenticated,isLoading,error,user,loginWithRedirect,logout
  // } =useAuth0();
  // if (isLoading) {
  //     return <div>Loading...</div>;
  //   }
  //   if (error) {
  //     return <div>Oops... {error.message}</div>;
  //   }
  //   if (isAuthenticated) {
  //     return (
  //       <div>
  //         Hello {user.nickname}{' '}
  //         <AuthenticateButton onClickFunc={logout} name="Log Out" />
  //         {console.log(user)}
  //       </div>
  //     );
  //   } else {
  //     return(
  //       <div>
  //         <AuthenticateButton onClickFunc={loginWithRedirect} name="Log In" />

  //       </div>
  //     )

  //   }
};

export default Login;
