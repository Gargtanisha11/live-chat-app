import { CREATE_CHAT } from "../utils/Constants";

const SearchedUserList = ({ userList, setShowList }) => {
  const handleClick = () => {
    setShowList(false);
  };

  return (
    <div className=" bg-white md:mx-4 px-4 py-2 fixed top-24 md:top-36 rounded-lg w-[100%] md:w-[23%] ">
      {userList.map((user) => (
        <div className="flex place-content-between" key={user?.userName}>
    
        <div className=" flex  my-2">
        <img className=" w-10" src={user?.avatar} alt="user"/>
          <h1>{user?.userName}</h1>
          </div>
          <button onClick={handleClick}>
            <img src={CREATE_CHAT} />
          </button>
        </div>
      ))}
    </div>
  );
};

export default SearchedUserList;
