import { useSelector } from "react-redux";
import { nearestTime } from "../utils/helperFunc";
import { useEffect, useRef } from "react";
 
const ChattingSpace=({chatMsg})=>{
  console.log(chatMsg)
  const currentUserName = useSelector(
    (state) => state.authenticationDetails.userDetails
  )._id;
   const currentScrollBottom = useRef();
  const scrollToBottom =()=>{
    currentScrollBottom.current.scrollTop= currentScrollBottom.current.scrollHeight;
  }

 useEffect(()=>{
       scrollToBottom()
 },[chatMsg])
  
    return <div className=" h-[90%] md:h-[80%]  bg-zinc-600 grid pt-2 overflow-y-scroll" ref={currentScrollBottom} >
      {
        chatMsg.map((msg)=>(
            msg?.sender?._id !== currentUserName  ? (<div key={msg?._id} className=" grid text-left  h-fit w-max rounded-xl rounded-tl-none bg-zinc-800 px-4 pt-4 m-2 text-zinc-200 ">
            <h1> {msg?.content}</h1> 
            <h1 className=" text-xs text-zinc-400 justify-self-end mt-2 pb-1  w-max h-5"> {nearestTime(msg?.updatedAt)}</h1>
             </div>
            ):(
              <div key={msg?._id} className=" grid text-left h-fit w-max rounded-xl rounded-tr-none bg-zinc-800 px-3 pt-4 my-2  mr-2 justify-self-end text-zinc-200">
              <h1> {msg.content}</h1>
              <h1 className=" justify-self-end text-xs text-zinc-400  mt-2 pb-1 pr-1">{nearestTime(msg?.updatedAt)}</h1> 
              </div>
            
            )
        ))
      }




















     {/* { <div className="h-fit w-fit rounded-xl rounded-tl-none bg-zinc-800 px-2 pt-4 m-2 text-zinc-200 ">
        <h1> Hi! how are you</h1> 
        <h1 className=" text-xs text-zinc-400 pl-[70%] mt-2 pb-1 pr-1"> 3:00am</h1>
         </div>
      <div className="h-fit w-fit rounded-xl rounded-tr-none bg-zinc-800 px-2 pt-4 my-2 ml-[70%] md:ml-[85%] justify-self-end text-zinc-200">
        <h1> Hi! how are you </h1>
        <h1 className=" text-xs text-zinc-400 pl-[70%] mt-2 pb-1 pr-1">3:00am</h1> 
        </div>
        <div className="h-fit w-fit rounded-xl rounded-tl-none bg-zinc-800 px-2 pt-4 m-2 text-zinc-200 ">
        <h1> Hi! how are you</h1> 
        <h1 className=" text-xs text-zinc-400 pl-[70%] mt-2 pb-1 pr-1"> 3:00am</h1>
         </div>
      <div className="h-fit w-fit rounded-xl rounded-tr-none bg-zinc-800 px-2 pt-4 my-2 ml-[70%] md:ml-[85%] justify-self-end text-zinc-200">
        <h1> Hi! how are you </h1>
        <h1 className=" text-xs text-zinc-400 pl-[70%] mt-2 pb-1 pr-1">3:00am</h1> 
        </div>  <div className="h-fit w-fit rounded-xl rounded-tl-none bg-zinc-800 px-2 pt-4 m-2 text-zinc-200 ">
        <h1> Hi! how are you</h1> 
        <h1 className=" text-xs text-zinc-400 pl-[70%] mt-2 pb-1 pr-1"> 3:00am</h1>
         </div>
      <div className="h-fit w-fit rounded-xl rounded-tr-none bg-zinc-800 px-2 pt-4 my-2 ml-[70%] md:ml-[85%] justify-self-end text-zinc-200">
        <h1> Hi! how are you </h1>
        <h1 className=" text-xs text-zinc-400 pl-[70%] mt-2 pb-1 pr-1">3:00am</h1> 
        </div>} */}
    </div>
}
 
export default  ChattingSpace