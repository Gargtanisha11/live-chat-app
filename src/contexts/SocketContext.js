import { createContext, useContext, useEffect,useState  } from "react";
import { useDispatch, useSelector } from "react-redux";
import { io } from "socket.io-client";
import { CHAT_EVENT_NUM } from "../utils/Constants";
import { pushSingleMsg } from "../redux/messageSlice";
import { addLastMessage } from "../redux/chatSlice";

const getSocket = (userId) => {
  return io("http://localhost:8000", {
    withCredentials: true,
    query: { userId: userId },
    reconnection: true,
    reconnectionAttempts: 10,  // Limit reconnection attempts to 10
    reconnectionDelay: 2000,   // Wait 2 seconds before retrying
    timeout: 20000,
  });
};

 const SocketContext = createContext();
 export const useSocket = () => useContext(SocketContext);

const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState();
  const userDetails = useSelector(
    (state) => state.authenticationDetails.userDetails
  );
   
const dispatch= useDispatch()

  //console.log(userDetails)
  useEffect(() => {
    if (userDetails && !socket) {
      const newSocket = getSocket(userDetails._id);
      setSocket(newSocket);
      newSocket.on("connect", () => {
        console.log(newSocket);
      });

     newSocket.on(CHAT_EVENT_NUM.RECEIVE_MSG,(msg)=>{
        dispatch(pushSingleMsg({chatId:msg[0].chat,chatMsg:msg[0]}))
        dispatch(addLastMessage({chatId:msg[0].chat,lastMessage:msg[0]}))
     })

      return () => {
        newSocket.disconnect();
        console.log(" disconnecting the connection");
        setSocket(null);
      };
    }
  }, [userDetails]);
  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  );
};

export { SocketProvider };

// import { createContext, useContext, useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { io } from "socket.io-client";
// import { CHAT_EVENT_NUM } from "../utils/Constants";

// const getSocket = (userId) => {
//   return io("http://localhost:8000", {
//     withCredentials: true,
//     query: { userId: userId },
//   });
// };

// export const SocketContext = createContext();

// const SocketProvider = ({ children }) => {
//   const [socket, setSocket] = useState(null);
//   const userDetails = useSelector(
//     (state) => state.authenticationDetails.userDetails
//   );

//   useEffect(() => {
//     if (userDetails && !socket) {
//       const newSocket = getSocket(userDetails._id);
//       setSocket(newSocket);

//       // Event listeners
//       newSocket.on("connect", () => {
//         console.log("Socket connected", newSocket);
//       });

//       newSocket.on(CHAT_EVENT_NUM.RECEIVE_MSG, (msg) => {
//         console.log("Message received:", msg);
//       });

//       return () => {
//         newSocket.disconnect();
//         console.log("Disconnecting the socket");
//         setSocket(null);
//       };
//     }
//   }, [userDetails]); // Only re-run if userDetails changes

//   return (
//     <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
//   );
// };

// export { SocketProvider };
