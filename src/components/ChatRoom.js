

import { useEffect, } from "react";
import { BODY_CHAT_IMG, } from "../utils/Constants";
import ChatterProfile from "./ChatterProfile";
import ChattingSpace from "./ChattingSpace";
import SendingBox from "./SendingBox";
import {useSelector } from "react-redux";

const ChatRoom = () => {
  const isChatClick = useSelector((state) => state.configuration.isChatClicked);
  const allChatMsg = useSelector((state) => state.chatMsg.message);
  const openChat = useSelector((state) => state.chat.openChatId);
  const otherUserID = useSelector((state) => state.chat.otherUserId);


 useEffect(()=>{
    console.log( allChatMsg)
 },[allChatMsg])



  return (
    <div
      className={
        isChatClick
          ? " border border-l border-r-0 border-t-0 border-b-0  border-zinc-500 flex w-full md:w-[50%] lg:w-[70%] h-[84.5vh] "
          : " border border-l border-r-0 border-t-0 border-b-0  border-zinc-500 hidden md:flex md:w-[50%] lg:w-[70%] h-[84.5vh] "
      }
    >
      {
        !isChatClick ? (
          <img
            className="w-52 h-52 mx-96 my-32"
            src={BODY_CHAT_IMG}
            alt=" to show chatting "
          />
        ) : (
          <div className="w-full">
            <ChatterProfile
              userName={otherUserID?.userName}
              avatar={otherUserID?.avatar}
            />
            <ChattingSpace chatMsg={allChatMsg[openChat]} />
            <SendingBox />
          </div>
        )
      }
    </div>
  );
};

export default ChatRoom;





// const ChatRoom = () => {
//   const isChatClick = useSelector((state) => state.configuration.isChatClicked);
//   const allChatMsg = useSelector((state) => state.chatMsg.message);
//   const openChat = useSelector((state) => state.chat.openChatId);
//   const otherUserID = useSelector((state) => state.chat.otherUserId);
//   const isLoading = useSelector((state) => state.configuration.isLoading);
//   const [chatMsg,setChatMsg] = useState(allChatMsg[openChat]);

//   const socket = useSocket();
//   const dispatch= useDispatch();

//   console.log( socket)
//   // if (socket) {
//   //   socket.on(CHAT_EVENT_NUM.RECEIVE_MSG, (msg) => {
//   //     console.log("heelo from chatroom")
//   //     console.log(msg);
//   //     setChatMsg({...chatMsg,msg});
//   //   //  dispatch(pushChatMsg({[openChat]:chatMsg}))
//   //     //console.log(chatMsg)
//   //     console.log(openChat)
//   //     let flag= false;
//   //     chatMsg.map((message)=>{
//   //       if(message._id === msg[0]._id) {
//   //          flag = true;
//   //       } 
//   //     })
//   //     flag == false && dispatch(pushSingleMsg({chatId:msg[0].chat,chatMsg:msg}));
//   //   });
//   // }

//   useEffect(()=>{
//     if(socket){
      
//       const handleReceiveMsg=(msg)=>{
//         console.log(msg);
//         dispatch(pushSingleMsg({chatId:msg[0].chat,chatMsg:msg}))
//       }
      
//       socket.on("connect",()=>{
//         console.log(" user connected")
//       })
       
//         socket.on(CHAT_EVENT_NUM.RECEIVE_MSG,handleReceiveMsg)

//        return ()=>{
//           socket.off(CHAT_EVENT_NUM.RECEIVE_MSG,handleReceiveMsg)
//        }
//     }
//   },[socket,dispatch])

//   if (isLoading && isChatClick) {
//     return <div>Loading chat room </div>;
//   }

//   return (
//     <div
//       className={
//         isChatClick
//           ? " border border-l border-r-0 border-t-0 border-b-0  border-zinc-500 flex w-full md:w-[50%] lg:w-[70%] h-[84.5vh] "
//           : " border border-l border-r-0 border-t-0 border-b-0  border-zinc-500 hidden md:flex md:w-[50%] lg:w-[70%] h-[84.5vh] "
//       }
//     >
//       {
//         !isChatClick ? (
//           <img
//             className="w-52 h-52 mx-96 my-32"
//             src={BODY_CHAT_IMG}
//             alt=" to show chatting "
//           />
//         ) : (
//           <div className="w-full">
//             <ChatterProfile
//               userName={otherUserID?.userName}
//               avatar={otherUserID?.avatar}
//             />
//             <ChattingSpace chatMsg={chatMsg} />
//             <SendingBox />
//           </div>
//         )

//         // Chatter Profile
//         // Chatting Space
//         // Message Box
//       }
//     </div>
//   );
// };

// export default ChatRoom;

// import { useEffect, useContext } from "react";
// import { SocketContext } from "../contexts/SocketContext";
// import { CHAT_EVENT_NUM, BODY_CHAT_IMG } from "../utils/Constants";
// import ChatterProfile from "./ChatterProfile";
// import ChattingSpace from "./ChattingSpace";
// import SendingBox from "./SendingBox";
// import { useSelector } from "react-redux";

// const ChatRoom = () => {
//   const isChatClick = useSelector((state) => state.configuration.isChatClicked);
//   const allChatMsg = useSelector((state) => state.chatMsg.message);
//   const openChat = useSelector((state) => state.chat.openChatId);
//   const otherUserID = useSelector((state) => state.chat.otherUserId);
//   const isLoading = useSelector((state) => state.configuration.isLoading);
//   const chatMsg = allChatMsg[openChat];

//   const socket = useContext(SocketContext);
//    console.log(socket)
//   useEffect(() => {
//     if (socket && socket.connected) {
//       socket.on(CHAT_EVENT_NUM.RECEIVE_MSG, (msg) => {
//         console.log("Message received in ChatRoom:", msg);
//       });
      
//       // Cleanup listener on component unmount or when socket changes
//       return () => {
//         socket.off(CHAT_EVENT_NUM.RECEIVE_MSG);
//       };
//     } else {
//       console.log("Socket is not connected");
//     }
//   }, [socket]); // Re-run if the socket instance changes

//   if (isLoading && isChatClick) {
//     return <div>Loading chat room</div>;
//   }

//   return (
//     <div
//       className={
//         isChatClick
//           ? " border border-l border-r-0 border-t-0 border-b-0  border-zinc-500 flex w-full md:w-[50%] lg:w-[70%] h-[84.5vh] "
//           : " border border-l border-r-0 border-t-0 border-b-0  border-zinc-500 hidden md:flex md:w-[50%] lg:w-[70%] h-[84.5vh] "
//       }
//     >
//       {!isChatClick ? (
//         <img
//           className="w-52 h-52 mx-96 my-32"
//           src={BODY_CHAT_IMG}
//           alt=" to show chatting "
//         />
//       ) : (
//         <div className="w-full">
//           <ChatterProfile
//             userName={otherUserID?.userName}
//             avatar={otherUserID?.avatar}
//           />
//           <ChattingSpace chatMsg={chatMsg} />
//           <SendingBox />
//         </div>
//       )}
//     </div>
//   );
// };

// export default ChatRoom;

