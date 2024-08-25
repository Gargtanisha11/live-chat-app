import { useState } from "react";
import {
  ChatterProfileOpt,
  MENU_LOGO,
} from "../utils/Constants";

const ChatterProfile = ({userName,avatar}) => {
   const [isChattingProfileOptShows, setIsChattingProfileOptShows]= useState(false);
   const handleIsChattingProflieOptShows=()=>{
    setIsChattingProfileOptShows(!isChattingProfileOptShows);
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
                  <option key={option} onClick={handleIsChattingProflieOptShows}>{option}</option>
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
