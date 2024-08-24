
import { BODY_CHAT_IMG } from "../utils/Constants"
import ChatterProfile from "./ChatterProfile"
import ChattingSpace from "./ChattingSpace";
import SendingBox from "./SendingBox";
import { useSelector,  } from "react-redux";

const ChatRoom=()=>{
  
     const isChatClick= useSelector(state=>state.configuration.isChatClicked);
     const allChatMsg = useSelector(state=>state.chatMsg.message);
     const openChat= useSelector(state=>state.chat.openChatId);
     const otherUserID = useSelector(state=>state.chat.otherUserId)
     const isLoading = useSelector(state =>state.configuration.isLoading);
     const chatMsg = allChatMsg[openChat];
     let data ;

     
  if(isLoading && isChatClick ){
      return <div>Loading chat room </div>
  }
  

if(isChatClick){
  if(  chatMsg[0]?.receiver?._id === otherUserID){
      data = chatMsg[0]?.receiver;
  }
  else {
     data = chatMsg[0]?.sender ;
  }
}
     
  

    return <div className={isChatClick ?" border border-l border-r-0 border-t-0 border-b-0  border-zinc-500 flex w-full md:w-[50%] lg:w-[70%] h-[84.5vh] ":" border border-l border-r-0 border-t-0 border-b-0  border-zinc-500 hidden md:flex md:w-[50%] lg:w-[70%] h-[84.5vh] "}>
     { !isChatClick 
       ? <img className="w-52 h-52 mx-96 my-32" src={BODY_CHAT_IMG} alt=" to show chatting " />
       : <div className="w-full"> 
            <ChatterProfile userName={data?.userName} avatar ={data?.avatar}/>
            <ChattingSpace chatMsg ={ chatMsg}/>
            <SendingBox/>
        </div>
       
          // Chatter Profile
          // Chatting Space 
          // Message Box
        }
    </div>
}

export default ChatRoom 