import axios from "axios";
import { errors } from "../statusCode/error";
import { FIND_USER, USER_DETAILS, USER_LOGIN, USER_LOGOUT, USER_REGISTER } from "../utils/ApiUrl";



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
      USER_REGISTER,
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
   const response = await axios.post(USER_LOGIN,data,{withCredentials:true}); // withCredential true is imp for set the cookie
   alert(" User loggedIn successfully")
   return response;
 } catch (error) {
     const errMessage= errors[error?.response.status];
     alert(errMessage);
     return errMessage
  
 }
}

const logout=async()=>{
  try {
    const response = await axios.post(USER_LOGOUT,{},{withCredentials:true});
    
    alert(" user loggedout ")
    return response;
  } catch (error) {
    const errMessage = errors[error?.response?.status];
    alert (errMessage);
    return errMessage;
  } 
}

const userDetails=async()=>{
  try {
    const response =await axios.get(USER_DETAILS,{withCredentials:true});
    return response;
  } catch (error) {
     const errMessage= errors[error?.response?.status];
     return errMessage;
  }
}

const searchUser= async ( userName)=>{
  if(!userName) return null;
  try {
    const response = await axios.patch(FIND_USER,{query:userName},{withCredentials:true});
    return response;
  } catch (error) {
     return error;
  }
}

export { register, login, userDetails,logout,searchUser };
