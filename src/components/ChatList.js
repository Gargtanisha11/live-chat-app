import { useSelector } from "react-redux";
import { DUMMYDATA_CHATS } from "../utils/Constants";
import ChatCard from "./ChatCard";
import { useEffect } from "react";
import { getChats } from "../hooks/chats";


const ChatList=()=>{
    
    const isChatClick= useSelector(state=>state.configuration.isChatClicked)
    console.log(isChatClick);

    const fetchData=()=>{
       const data = getChats();
       console.log(data);
    }

    useEffect(()=>{
    //   fetchData();
    },)
    
    return <div className={!isChatClick ? "w-full md:w-[50%] lg:w-[30%] h-[85vh]  overflow-y-scroll no-scrollbar  " :"hidden md:flex flex-col w-full md:w-[50%] lg:w-[30%] h-[85vh]  overflow-y-scroll no-scrollbar "}>
        {
            DUMMYDATA_CHATS.map((chat)=>(
                <ChatCard key={chat?.chat_id} chat={chat} />)
            )
        }
        
          
    </div>
}

export default ChatList;