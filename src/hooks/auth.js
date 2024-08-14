import axios from "axios";
import { errors } from "../statusCode/error";



const register = async (data) => {

  if (data == null) {
    return;
  }

  const form = new FormData();
  Object.keys(data).forEach((field) => {
    form.append(field, data[field]);
  });

  try {
    const response = await axios.post(
      "http://localhost:8000/api/v1/user/register",
      form
    );
    alert(" Created Account SuccessFully ! Go ahead and login ");
    return response;
  } catch (error) {
     const errMessage= errors[error?.response?.status]
     alert(errMessage);
     return errMessage;
  }
};

const login = async(data)=>{
 try {
   const response = await axios.post("http://localhost:8000/api/v1/user/loginUser",data,{withCredentials:true}); // withCredential true is imp for set the cookie
   alert(" User loggedIn successfully")
   return response;
 } catch (error) {
     const errMessage= errors[error?.response.status];
     alert(errMessage);
     return errMessage
  
 }
}

const userDetails=async()=>{
  try {
    const response =await axios.get("http://localhost:8000/api/v1/user/getUserDetails",{withCredentials:true});
    console.log(response);
  } catch (error) {
     console.log(error);
  }
}

export { register, login, userDetails };
