import axios from "axios"
import { GET_CHATS, GET_MSG } from "../utils/ApiUrl"
import { errors } from "../statusCode/error";

 
  const getChats=async()=>{
     try {
        const chats = await axios.get(GET_CHATS,{withCredentials:true});
        return chats;
     } catch (error) {
        const errMessage = errors[error?.response?.status];
        return errMessage;
     }
  }

  const getChatMessages = async(chatId)=>{
     try {
        const response = await axios.get(GET_MSG+chatId,{withCredentials:true});
        return response;
     } catch (error) {
        const errMessage = errors[error?.response?.status];
        return errMessage;
     }
  }

  export {getChats,getChatMessages};