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
   const response = await axios.post("http://localhost:8000/api/v1/user/loginUser",data);
   alert(" User loggedIn successfully")
   //const userData = await axios.get("http://localhost:8000/api/v1/user/getUserDetails");
   // console.log(userData);
   return response;
 } catch (error) {
    console.log(error);
     const errMessage= errors[error?.response.status];
     alert(errMessage);
     return errMessage
  
 }
}

export { register, login };
