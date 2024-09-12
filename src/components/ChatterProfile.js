import { useState } from "react";
import {
  ChatterProfileOpt,
  MENU_LOGO,
} from "../utils/Constants";
import {useDispatch} from "react-redux"
import { deleteChat } from "../hooks/chats";
import { clearAChat } from "../redux/chatSlice";
import { clearChatMsg } from "../redux/messageSlice";
import { closeChatRoom} from "../redux/configureSlice";

const ChatterProfile = ({userName,avatar,chatId}) => {
   const [isChattingProfileOptShows, setIsChattingProfileOptShows]= useState(false)
 const dispatch= useDispatch()

   const handleIsChattingProflieOptShows=()=>{
    setIsChattingProfileOptShows(!isChattingProfileOptShows);
    
   }
  
  const handleOpt=async(key)=>{
     console.log( key);
     switch (key) {
      case "Delete":
        const response = await deleteChat(chatId);
        if(response?.status===200) {
          dispatch(clearAChat(chatId))
          dispatch(clearChatMsg(chatId))
          dispatch(closeChatRoom())
        }
        console.log(response);
        break;
     
      default:
        break;
     }
     handleIsChattingProflieOptShows()
   }


  return (
    <div className=" bg-zinc-500 h-max text-black w-full m-0">
      {
        // user avatar
        // user name
        // three dot for other info
      }
      <div className=" flex flex-row place-content-between px-5 py-1  ">
        <div className=" flex flex-row">
          <img
            src={avatar}
            className=" h-10 w-10 rounded-full"
            alt=" user avatar"
          />
          <div className="place-content-start text-left content-center">
            <h1 className=" px-2 text-lg font-bold text-white"> {userName} </h1>
            <h1 className=" px-2 text-xs self-start"> Status</h1>
          </div>
        </div>
        <div>
          <label htmlFor={ChatterProfileOpt}>
            <img src={MENU_LOGO} className="h-10 w-5 " alt=" three dot menu " onClick={handleIsChattingProflieOptShows}/>
          </label>
          { isChattingProfileOptShows && <select id={ChatterProfileOpt}name=" chatter profile options " size={ChatterProfileOpt.length} className="z-10 absolute   left-[60%] md:left-[85%]">
              {
                ChatterProfileOpt.map((option)=>(
                  <option key={option} onClick={()=>handleOpt(option)}>{option}</option>
                ))
              }
            </select>
         
          }
        </div>
      </div>
    </div>
  );
};

export default ChatterProfile;
