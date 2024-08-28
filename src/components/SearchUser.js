import { searchUser } from "../hooks/auth";
import { SEARCH_LOGO } from "../utils/Constants";
import { useState } from "react";
import SearchedUserList from "./SearchedUserList";

const SearchUser = () => {
  const [query, setQuery] = useState("");
  const [showList, setShowList] = useState(false);
  const [userList, setUserList] = useState();

  const handleSearch = async () => {
    const response = await searchUser(query);
    if (response?.status === 200) {
      setUserList(response?.data?.data);
      setShowList(true);
    } else {
      alert(" NO USER FOUND");
    }
    setQuery("");
  };

  return <div className="flex flex-col ">
    <div className=" flex rounded-lg mx-2 px-2 mb-2 py-2 items-center h-18 place-content-between ">
      <input
        className=" h-10 w-[85%] rounded-full px-4"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className=" w-[15%] px-4 hover:bg-white py-1 mx-1" onClick={handleSearch} >
        <img
          className=""
          src={SEARCH_LOGO}
          alt=" search"
        />
      </button>
      
    </div>
    {showList && (
        <SearchedUserList userList={userList} setShowList={setShowList} />
      )} 
  </div>;
};

export default SearchUser;
