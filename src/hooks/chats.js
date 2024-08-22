import axios from "axios"
import { GET_CHATS, GET_MSG } from "../utils/ApiUrl"
import { errors } from "../statusCode/error";

 
  const getChats=async()=>{
     try {
        const chats = await axios.get(GET_CHATS,{withCredentials:true});
        console.log(chats)
        return chats;
     } catch (error) {
        console.log(error);
        const errMessage = errors[error?.response?.status];
        return errMessage;
     }
  }

  const getChatMessages = async(chatId)=>{
   console.log( chatId)
     try {
        const response = await axios.get(GET_MSG+chatId,{withCredentials:true});
        console.log( response);
        return response;
     } catch (error) {
        const errMessage = errors[error?.response?.status];
        return errMessage;
     }
  }

  export {getChats,getChatMessages};