import axios from "axios"
import { GET_CHATS } from "../utils/ApiUrl"

 
  const getChats=async()=>{
     try {
        const chats = await axios.get(GET_CHATS,{withCredentials:true});
        console.log(chats)
     } catch (error) {
        console.log(error);
     }
  }

  export {getChats}