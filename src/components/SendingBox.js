import {useState} from "react"
import { useSelector, } from "react-redux"
import { sendChatMessage } from "../hooks/chats";

const SendingBox=()=>{
   const [content ,setContent]= useState("");
   const [isLoading,setIsLoading] =useState(false);
   const openChatId = useSelector(state=>state.chat.openChatId);
   const otherUserId= useSelector(state => state.chat.otherUserId);

    
  const sendMessage = async()=>{
     setIsLoading(true)
    try { 
        const response= await sendChatMessage(openChatId,otherUserId?._id,content);
        if(response?.status!==200){
            alert(response)
        }
        setContent("")
    } catch (error) {
        alert(error);
    }
    finally{
        setIsLoading(false);
    }
  }

   if(isLoading ){
    return <div>
        Sending....
    </div>
   }
  


    return <div className=" w-full h-[10%] place-content-center">
        <form>
          <input type="text" className=" h-10 w-[50vh] md:w-[80vh] px-2  my-1 rounded-lg bg-zinc-300" width={3} placeholder="Enter Your Messages" value={content} onChange={(e)=>setContent(e.target.value)}/>
          <button className=" bg-green-500 h-10 p-2 mx-4 my-2 rounded-lg text-white" onClick={()=>sendMessage()}>Send</button>
        </form>
    </div>
}
export default SendingBox;