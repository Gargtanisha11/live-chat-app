import { nearestTime } from "../utils/helperFunc";

const ChatCard = ({chat}) => {
 const { user_name, avatar_url, last_message, unread_count, timestamp } = chat;
 const sendingTime=nearestTime(timestamp);
 console.log(chat)
  return (
    <div className="flex flex-row hover:bg-zinc-300 rounded-lg mx-2 px-2 mb-2 py-2 items-center" >
      <div className="   ">
        <img className="h-10 rounded-full " src={avatar_url} alt="user avatar" />
      </div>
      <div className=" text-zinc-400 mx-2 text-left ">
        <h1 className=" font-bold ">{user_name}</h1>
        <h5 className="" >{last_message}</h5>
      </div>
      <div className=" text-sm ml-20">
        <h6 className=" text-emerald-600">{sendingTime}</h6>
       {(unread_count>0) && <h6 className=" bg-emerald-600 rounded-full h-4 w-4 pb-2">{unread_count}</h6>}
      </div>
    </div>
  );
};

export default ChatCard;