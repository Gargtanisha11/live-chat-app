
import { useDispatch, useSelector } from "react-redux";
import { nearestTime } from "../utils/helperFunc";
import { openChatRoom } from "../redux/configureSlice";

const ChatCard = ({chat}) => {
 //const { user_name, avatar_url, last_message, unread_count, timestamp } = chat;
 const dispatch=useDispatch();
 
 const currentUserName = useSelector(state=> state.authenticationDetails.userDetails).userName
 
 const lastMessage = chat?.lastMessage[0]?.content;
 const timeStamp = chat?.lastMessage[0]?.updatedAt
 const unread_count =1;
 const sendingTime=nearestTime(timeStamp);
 const {participants}=chat;
 let userName;
 let avatarUrl;
 
 
  if( participants[0].userName != currentUserName){
    userName = participants[0].userName;
     avatarUrl = participants[0].avatar;
 }
 else{
   userName = participants[1].userName;
   avatarUrl = participants[1].avatar;
 }

  return (
    <div className="flex flex-row hover:bg-zinc-300 rounded-lg mx-2 px-2 mb-2 py-2 items-center h-18 place-content-between" onClick={()=>dispatch(openChatRoom())} >
      <div className=" flex flex-row   ">
        <img className="h-10 w-10 rounded-full " src={avatarUrl} alt="user avatar" />
        <div className=" text-zinc-400 mx-2 text-left ">
          <h1 className=" font-bold ">{userName}</h1>
          <h5 className=" overflow-hidden truncate w-36 h-8" >{lastMessage}</h5>
      </div>
      </div>
     
      <div className=" text-sm ml-20 ">
        <h6 className={unread_count?" text-emerald-600":"text-zinc-400"}>{sendingTime}</h6>
       {(unread_count>0) && <h6 className=" bg-emerald-600 rounded-full h-4 w-4 pb-2">{unread_count}</h6>}
      </div>
    </div>
  );
};

export default ChatCard;