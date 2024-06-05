
import { useDispatch } from "react-redux";
import { nearestTime } from "../utils/helperFunc";
import { openChatRoom } from "../redux/configureSlice";

const ChatCard = ({chat}) => {
 const { user_name, avatar_url, last_message, unread_count, timestamp } = chat;
 const sendingTime=nearestTime(timestamp);
 const dispatch=useDispatch();
 
 console.log(chat)
  return (
    <div className="flex flex-row hover:bg-zinc-300 rounded-lg mx-2 px-2 mb-2 py-2 items-center h-18" onClick={()=>dispatch(openChatRoom())} >
      <div className="   ">
        <img className="h-10 w-10 rounded-full " src={avatar_url} alt="user avatar" />
      </div>
      <div className=" text-zinc-400 mx-2 text-left ">
        <h1 className=" font-bold ">{user_name}</h1>
        <h5 className=" overflow-hidden truncate w-36 h-8" >{last_message}</h5>
      </div>
      <div className=" text-sm ml-20 ">
        <h6 className={unread_count?" text-emerald-600":"text-zinc-400"}>{sendingTime}</h6>
       {(unread_count>0) && <h6 className=" bg-emerald-600 rounded-full h-4 w-4 pb-2">{unread_count}</h6>}
      </div>
    </div>
  );
};

export default ChatCard;