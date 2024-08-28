import {useState} from "react"
import { useSelector,useDispatch } from "react-redux"
import { setLoading } from "../redux/configureSlice";
import { sendChatMessage } from "../hooks/chats";

const SendingBox=()=>{
   const [content ,setContent]= useState("");
   const isLoading = useSelector(state=>state.configuration.isLoading);
   const openChatId = useSelector(state=>state.chat.openChatId);
   const otherUserId= useSelector(state => state.chat.otherUserId);
   const dispatch = useDispatch ();

    
  const sendMessage = async()=>{
    dispatch(setLoading(true));
    try { 
        const response= await sendChatMessage(openChatId,otherUserId?._id,content);
        setContent("")
    } catch (error) {
        alert(error);
    }
    finally{
        dispatch(setLoading(false));

    }
  }

   if(isLoading ){
    return <div>
        Sending....
    </div>
   }
  


    return <div className=" w-full h-[10%] place-content-center">
        
        <input type="text" className=" h-10 w-[50vh] md:w-[80vh] px-2  my-1 rounded-lg bg-zinc-300" width={3} placeholder="Enter Your Messages" value={content} onChange={(e)=>setContent(e.target.value)}/>
        <button className=" bg-green-500 h-10 p-2 mx-4 my-2 rounded-lg text-white" onClick={()=>sendMessage()}>Send</button>
    </div>
}
export default SendingBox;