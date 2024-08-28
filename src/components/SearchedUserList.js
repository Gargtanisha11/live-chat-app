import { useDispatch, useSelector } from "react-redux";
import { createChat, getChatMessages } from "../hooks/chats";
import { CREATE_CHAT } from "../utils/Constants";
import { openChatRoom, setLoading } from "../redux/configureSlice";
import { addOtherUserId, changeChatId } from "../redux/chatSlice";
import { pushChatMsg } from "../redux/messageSlice";

const SearchedUserList = ({ userList, setShowList }) => {
  const chatMsg = useSelector((state) => state.chatMsg.message);
  const isLoading = useSelector((state) => state.configuration.isLoading);
  const dispatch = useDispatch();

  const handleClick = async (receiverId) => {
    console.log(receiverId);
    setShowList(false);

    try {
      dispatch(setLoading(true));
      const response = await createChat(receiverId);
      if (response.status === 200) {
        const chatId = response?.data?.data[0]?._id;
        if (response?.data?.data[0]?.message.length === 0) {
          dispatch(pushChatMsg({ [chatId]: [] }));
        } else if (!chatMsg.chatId) {
          const msg = await getChatMessages(chatId);
          msg?.status === 200 &&
            dispatch(pushChatMsg({ [chatId]: msg?.data?.data }));
        }
        dispatch(changeChatId(response?.data?.data[0]?._id));
        dispatch(addOtherUserId(response?.data?.data[0]?.participants[1]));
        dispatch(openChatRoom(true));
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <div className=" bg-white md:mx-4 px-4 py-2 fixed top-24 md:top-36 rounded-lg w-[100%] md:w-[23%] ">
      {userList.map((user) => (
        <div className="flex place-content-between" key={user?.userName}>
          <div className=" flex  my-2">
            <img className=" w-10 px-1" src={user?.avatar} alt="user" />
            <h1>{user?.userName}</h1>
          </div>
          <button onClick={() => handleClick(user._id)}>
            <img src={CREATE_CHAT} />
          </button>
        </div>
      ))}
    </div>
  );
};

export default SearchedUserList;
