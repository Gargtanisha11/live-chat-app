// import { useAuth0 } from "@auth0/auth0-react";
// import AuthenticateButton from "./AuthenticateButton";

import { Link } from "react-router-dom";

const Login = () => {


  return (
    <div className=" bg-blue-950 max-h-fit py-20 xl:py-32  px-10 xl:px-96">
       <form className=" bg-slate-500 bg-opacity-50 text-gray-400 w-[50vx]  mx-32 py-10 px-5 xl:px-20 rounded-lg ">
       <div className=" text-white text-3xl font-bold p-4"> <h1>SignIn</h1> </div>
       <div className=" w-full py-4 px-6 md:px-8 grid grid-flow-row xl:flex justify-between"> <label for="name" className="lg:w-[30%] h-8">UserName</label> <input type="text" id="name" className="w-[42vw] lg:w-[70%] h-8" /></div>
       <div className=" w-full py-4 px-6 md:px-8 grid grid-flow-row xl:flex justify-between"> <label for="email" className="lg:w-[30%] h-8">Email</label> <input type="email" id="email" className=" w-[42vw] lg:w-[70%] h-8" /></div>
       <div className=" w-full py-4 px-6 md:px-8 grid grid-flow-row xl:flex justify-between"> <label for="password" className="lg:w-[30%] h-8">Password</label> <input type="password" id="password" className="w-[42vw] lg:w-[70%] h-8" /></div>
       
       <div className="w-full py-4 px-16 lg:px-8  flex justify-between"> <button className=" bg-blue-900 rounded-lg  px-5 py-2">Submit</button> <button className=" bg-blue-900 rounded-lg  px-5 py-2">Reset</button></div>
       <div className=" text-black py-5 px-6"><h1>Don't have account ? <Link to="/register">Register</Link>  </h1></div>
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
