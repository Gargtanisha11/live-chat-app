import { useState } from "react"
import { BODY_CHAT_IMG } from "../utils/Constants"
import ChatterProfile from "./ChatterProfile"
import ChattingSpace from "./ChattingSpace";
import SendingBox from "./SendingBox";
import { useStore } from "react-redux";

const ChatRoom=()=>{
  
     const isChatClick= useStore((state)=>state.configuration.isChatclicked)

    return <div className=" border border-l border-r-0 border-t-0 border-b-0  border-zinc-500 hidden md:flex md:w-[50%] lg:w-[70%] h-[84.5vh] ">
     { !isChatClick 
       ? <img className="w-52 h-52 mx-96 my-32" src={BODY_CHAT_IMG} alt=" to show chatting " />
       : <div className="w-full"> 
            <ChatterProfile/>
            <ChattingSpace/>
            <SendingBox/>
        </div>
       
          // Chatter Profile
          // Chatting Space 
          // Message Box
        }
    </div>
}

export default ChatRoom 