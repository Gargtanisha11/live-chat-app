import ChatList from "./ChatList";
import ChatRoom from "./ChatRoom";

const ChatContainer=()=>{
    return <div className=" flex flex-row">
    <ChatList/>
    <ChatRoom/>
    </div>
}

export default ChatContainer;