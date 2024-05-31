import { DUMMYDATA_CHATS } from "../utils/Constants";
import ChatCard from "./ChatCard";


const ChatList=()=>{
    return <div className=" md:w-[50%] lg:w-[30%] h-[85vh]  overflow-y-scroll no-scrollbar  ">
        {
            DUMMYDATA_CHATS.map((chat)=>(
                <ChatCard key={chat?.chat_id} chat={chat} />)
            )
        }
        
          
    </div>
}

export default ChatList;