import { useSelector } from "react-redux";
import { DUMMYDATA_CHATS } from "../utils/Constants";
import ChatCard from "./ChatCard";


const ChatList=()=>{
    
    const isChatClick= useSelector(state=>state.configuration.isChatClicked)
    console.log(isChatClick);
    
    return <div className={!isChatClick ? "w-full md:w-[50%] lg:w-[30%] h-[85vh]  overflow-y-scroll no-scrollbar  " :"hidden md:flex flex-col w-full md:w-[50%] lg:w-[30%] h-[85vh]  overflow-y-scroll no-scrollbar "}>
        {
            DUMMYDATA_CHATS.map((chat)=>(
                <ChatCard key={chat?.chat_id} chat={chat} />)
            )
        }
        
          
    </div>
}

export default ChatList;