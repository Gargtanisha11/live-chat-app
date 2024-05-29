import { DUMMYDATA_CHATS } from "../utils/Constants";
import ChatCard from "./ChatCard";


const ChatRoom=()=>{
    return <div className=" md:w-[40%]  ">
        {
            DUMMYDATA_CHATS.map((chat)=>(
                <ChatCard key={chat?.chat_id} chat={chat} />)
            )
        }
        
          
    </div>
}

export default ChatRoom;