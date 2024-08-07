import { Link } from "react-router-dom";

 const SignUp=()=>{
    return (
     <div className=" bg-blue-950 max-h-fit py-10 xl:pt-24  px-10 xl:px-96">
        <form className=" bg-slate-500 bg-opacity-50 text-gray-400 w-[50vx]  mx-32 py-8 px-5 xl:px-20 rounded-lg ">
        <div className=" text-white text-3xl font-bold p-4"> <h1>Sign Up</h1> </div>
        <div className=" w-full py-4 px-6 md:px-8 grid grid-flow-row xl:flex justify-between"> <label for="userName" className="lg:w-[30%] h-8">User Name</label> <input type="text" id="name" className="w-[42vw] lg:w-[70%] h-8" /></div>
        <div className=" w-full py-4 px-6 md:px-8 grid grid-flow-row xl:flex justify-between"> <label for="fullName" className="lg:w-[30%] h-8">Full Name</label> <input type="text" id="fullName" className="w-[42vw] lg:w-[70%] h-8" /></div>
        <div className=" w-full py-4 px-6 md:px-8 grid grid-flow-row xl:flex justify-between"> <label for="email" className="lg:w-[30%] h-8">Email</label> <input type="email" id="email" className=" w-[42vw] lg:w-[70%] h-8" /></div> 
        <div className=" w-full py-4 px-6 md:px-8 grid grid-flow-row xl:flex justify-between"> <label for="password" className="lg:w-[30%] h-8">Password</label> <input type="password" id="password" className="w-[42vw] lg:w-[70%] h-8" /></div>
        <div className=" w-full py-4 px-6 md:px-8 grid grid-flow-row xl:flex justify-between"> <label for="confirmPassword" className="lg:w-[30%] h-8">Confirm Password</label> <input type="password" id="confirmPassword" className="w-[42vw] lg:w-[70%] h-8" /></div>
        <div className=" w-full py-4 px-6 md:px-8 grid grid-flow-row xl:flex justify-between"> <label for="avatar" className="lg:w-[30%] h-8">Avatar File</label> <input type="file" id="avatar" max={1} className="w-[42vw] lg:w-[70%] h-8" /></div>
        <div className="w-full py-4 px-16 lg:px-8  flex justify-between"> <button className=" bg-blue-900 rounded-lg  px-5 py-2">Submit</button> <button className=" bg-blue-900 rounded-lg  px-5 py-2">Reset</button></div>

        <div className=" text-black py-4 px-6"><h1>Already , Have an account? <Link to="/login">Sign In</Link>  </h1></div>
       </form>
     </div>
   
    )
 }

 export default SignUp;