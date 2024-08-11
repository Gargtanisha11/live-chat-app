import { Link } from "react-router-dom";
import {
  validateEmail,
  validateName,
  validatePassword,
} from "../utils/valiadationFunc.js";
import { useRef, useState } from "react";
import { register } from "../hooks/register.js";

const SignUp = () => {
  //state variable to store form data
  const [data, setData] = useState({
    userName: "",
    fullName: "",
    email: "",
    password: "",
    avatar: {},
  });

  const confirmPassword = useRef(null);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState("");
  const [formkey,setFormKey]=useState(0);


  // function which call when data change
  const handleDataChange = (name, e) => {
    setData({
      ...data,
      [name]: name === "avatar" ? e.target.files[0] : e.target.value,
    });
    console.log(data)
  };

  // chcek validation when data submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateName(data?.userName)) {
      setError(" Not Valid User Name");
      setIsError(true);
    } else if (!validateEmail(data?.email)) {
      setError(" Not Valid Email ");
      setIsError(true);
    } else if (!validatePassword(data?.password)) {
      setError(" password should start with capital letter and maxm length 7 ");
      setIsError(true);
    } else if (
      data?.password === " " ||
      data?.password !== confirmPassword.current.value
    ) {
      setError(" password and confirm password is not same ");
      setIsError(true);
    } else if (data.avatar == null) {
      setError(" not choose the file");
      setIsError(true);
    } else {
      setIsError(false);
      setError("");
      handleReset(e);
      const response = register(data);
      if (response.length != 0) {
        console.log(response);
      } else {
        setError(response);
        setIsError(true);
      }
    }
  };

  const handleReset = (e) => {
    e.preventDefault();
      setFormKey(formkey+1);
    const newData = Object.keys(data).reduce((acc, field) => {
      acc[field] = field === "avatar" ? {} : ""; // Resetting avatar to empty object, others to empty string
      return acc;
    }, {});
    confirmPassword.current.value = "";
    setData(newData);
   };

  return (
    <div className=" bg-blue-950 max-h-fit py-10 xl:pt-24   px-10 xl:px-96">
      <form className=" bg-slate-500 bg-opacity-50 text-gray-400 md:w-[50vx] md:mx-32 py-10 px-5 xl:px-20 rounded-lg " key={formkey}>
        <div className=" text-white text-3xl font-bold p-4">
          <h1>Sign Up</h1>
        </div>
        <div className=" w-full py-4 px-6 md:px-8 grid grid-flow-row lg:flex justify-between">
          <label for="userName" className="lg:w-[30%] h-8">
            User Name
          </label>
          <input
            type="text"
            id="name"
            className="w-[42vw] lg:w-[70%] h-8 px-2"
            value={data.userName}
            onChange={(e) => handleDataChange("userName", e)}
            placeholder="User Name"
          />
        </div>
        <div className=" w-full py-4 px-6 md:px-8 grid grid-flow-row lg:flex justify-between">
          <label for="fullName" className="lg:w-[30%] h-8">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            className="w-[42vw] lg:w-[70%] h-8 px-2"
            value={data.fullName}
            onChange={(e) => handleDataChange("fullName", e)}
            placeholder="Full Name"
          />
        </div>
        <div className=" w-full py-4 px-6 md:px-8 grid grid-flow-row lg:flex justify-between">
          <label for="email" className="lg:w-[30%] h-8">
            Email
          </label>
          <input
            type="email"
            id="email"
            className=" w-[42vw] lg:w-[70%] h-8 px-2"
            value={data.email}
            onChange={(e) => handleDataChange("email", e)}
            placeholder="Email"
          />
        </div>
        <div className=" w-full py-4 px-6 md:px-8 grid grid-flow-row lg:flex justify-between">
          <label for="password" className="lg:w-[30%] h-8">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-[42vw] lg:w-[70%] h-8 px-2"
            value={data.password}
            onChange={(e) => handleDataChange("password", e)}
            placeholder="Password"
          />
        </div>
        <div className=" w-full py-4 px-6 md:px-8 grid grid-flow-row lg:flex justify-between">
          <label for="confirmPassword" className="lg:w-[30%] h-8">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            className="w-[42vw] lg:w-[70%] h-8 px-2"
            ref={confirmPassword}
            placeholder="Confirm Password"
          />
        </div>
        <div className=" w-full py-4 px-6 md:px-8 grid grid-flow-row lg:flex justify-between">
          <input
            type="file"
            id="avatar"
            max={1}
            name={data?.avatar?.name}
            className="mx-0 w-[42vw] lg:w-[70%] h-8 px-2"
            onChange={(e)=>handleDataChange("avatar",e)}
            placeholder="Avatar"
          />
        </div>
        {isError && <div className=" text-red-900"> {error}</div>}
        <div className="w-full py-4 px-16 lg:px-8  flex justify-between">
          <button
            className=" bg-blue-900 rounded-lg  px-5 py-2 "
            onClick={(e) => handleSubmit(e)}
          >
            Submit
          </button>
          <button
            className=" bg-blue-900 rounded-lg  px-5 py-2"
            onClick={(e) => handleReset(e)}
          >
            Reset
          </button>
        </div>

        <div className=" text-black py-4 px-6">
          <h1>
            Already , Have an account? <Link to="/login">Sign In</Link>
          </h1>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
