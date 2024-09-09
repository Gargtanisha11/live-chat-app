import { useDispatch, useSelector } from "react-redux";
import { nearestTime } from "../utils/helperFunc";
import { openChatRoom,  } from "../redux/configureSlice";
import { changeChatId,addOtherUserId } from "../redux/chatSlice";
import { getChatMessages } from "../hooks/chats";
import { pushChatMsg } from "../redux/messageSlice";

const ChatCard = ({ chat }) => {
  //const { user_name, avatar_url, last_message, unread_count, timestamp } = chat;
  console.log(chat)
  const dispatch = useDispatch();
  const currentUserName = useSelector(
    (state) => state.authenticationDetails.userDetails
  ).userName;


  const lastMessage = chat?.lastMessage?.content;
  const timeStamp = chat?.lastMessage?.updatedAt;
  const unread_count = 1;
  const sendingTime = nearestTime(timeStamp);
  const { participants } = chat; 
  let otherUserData= {};

  if (participants[0].userName !== currentUserName) {
    otherUserData=participants[0];
  } else {
    otherUserData=participants[1];
  }
 


  const handleClickChatCard = async () => {
    try {
   if (chat.message.length !== 0) {         
         const response = await getChatMessages(chat._id);
         if (response.status === 200) {
           dispatch(pushChatMsg({ [chat?._id]: response?.data?.data }));
         }  
   }
   else{
    dispatch(pushChatMsg({ [chat?._id]: [] }));
   }
       dispatch(changeChatId(chat?._id));
       dispatch(addOtherUserId(otherUserData))
       dispatch(openChatRoom());


    } catch (error) {
      alert(error);
    }
    
  };

  return (
    <div
      className="flex flex-row hover:bg-zinc-300 rounded-lg mx-2 px-2 mb-2 py-2 items-center h-18 place-content-between"
      onClick={() => handleClickChatCard()}
    >
      <div className=" flex flex-row   ">
        <img
          className="h-10 w-10 rounded-full "
          src={otherUserData?.avatar}
          alt="user avatar"
        />
        <div className=" text-zinc-400 mx-2 text-left ">
          <h1 className=" font-bold ">{otherUserData?.userName}</h1>
          <h5 className=" overflow-hidden truncate w-36 h-8">{lastMessage}</h5>
        </div>
      </div>

      <div className=" text-sm ml-20 ">
        <h6 className={unread_count ? " text-emerald-600" : "text-zinc-400"}>
          {sendingTime}
        </h6>
        {unread_count > 0 && (
          <h6 className=" bg-emerald-600 rounded-full h-4 w-4 pb-2">
            {unread_count}
          </h6>
        )}
      </div>
    </div>
  );
};

export default ChatCard;
