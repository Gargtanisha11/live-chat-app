import { useDispatch, useSelector } from "react-redux";
import ChatCard from "./ChatCard";
import { useEffect,useState } from "react";
import { getChats } from "../hooks/chats";
import { addChat } from "../redux/chatSlice";


const ChatList=()=>{
    
    const dispatch= useDispatch();
    const isChatClick= useSelector(state=>state.configuration.isChatClicked);
    const chat = useSelector(state => state.chat.chat);
    const [isLoading ,setIsLoading ]= useState(true);

    const fetchData=async()=>{
       try {
        const response = await  getChats();
         if(response?.status === 200){
            dispatch(addChat(response?.data?.data));
         }
       } catch (error) {
       }
       finally{
        setIsLoading(false);
       }
      }
    useEffect(()=>{
      fetchData();
    },[])
    
   if(isLoading) {
     return <div>Loading chat...</div>
   }

    return <div className={!isChatClick ? "w-full md:w-[50%] lg:w-[30%] h-[85vh]  overflow-y-scroll no-scrollbar  " :"hidden md:flex flex-col w-full md:w-[50%] lg:w-[30%] h-[85vh]  overflow-y-scroll no-scrollbar "}>
         
      {
        chat.map((chat)=>(
          <ChatCard key={chat?.id} chat={chat} />
        ))
      }

        
          
    </div>
}

export default ChatList;