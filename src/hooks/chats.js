import axios from "axios"
import { CREATE_CHAT, GET_CHATS, GET_MSG, SEND_MSG } from "../utils/ApiUrl"
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

  const sendChatMessage = async(chatId,receiverId,content)=>{

     console.log( "heelo" )
           try {
             const response = await axios.post(SEND_MSG+chatId+"/"+receiverId,{content:content},{withCredentials:true});
             console.log( response);
           } catch (error) {
             console.log( error);
           }  
  }

 const createChat=async(receiverId)=>{
    console.log(receiverId);
    try {
      const response= await axios.post(CREATE_CHAT+receiverId,{},{withCredentials:true});
      console.log( response);
      
      return response;
    } catch (error) {
      console.log(error );
      return error
    }
 }

  export {getChats,getChatMessages,sendChatMessage,createChat};