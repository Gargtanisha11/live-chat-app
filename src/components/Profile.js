import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { EDIT_LOGO } from "../utils/Constants";
import { validateImage, validateName } from "../utils/valiadationFunc";
import { updateUser } from "../hooks/auth";
import { userLoggedIn } from "../redux/authenticationDetailSlice";

const Profile = () => {
  const userDetails = useSelector(
    (state) => state.authenticationDetails.userDetails
  );
 
  const [fullName, setFullName] = useState(userDetails.fullName);
  const [userName, setUserName] = useState(userDetails.userName);
  const [avatar,setAvatar]= useState(null);
  const [editUserName,setEditUserName] = useState(false);
  const [editFullName,setEditFullName] = useState(false);
  const [editAvatar,setEditAvatar]= useState(false);

  const dispatch = useDispatch();
  
  const handleChange=(key,e)=>{
   switch (key) {
      case "fullName":
        console.log(e.target.value)
         editFullName && setFullName(e.target.value)
         console.log(fullName)
         break;
      case "userName":
        console.log(userName)
         editUserName && setUserName(e.target.value)
         break;
      default:
         console.log(" no change ")
         break;
   }
  }
  const handleSaveChange=()=>{    
      if(editUserName && !validateName(userName))  {
        alert(" Not Valid UserName. Try Again")
        return ;
      }
      if(editAvatar && !validateImage(avatar?.type)){
        alert(" Not Valid Image");
        return;
      }
     const data =new FormData();
     editFullName && data.append("fullName",fullName)
     editUserName && data.append("userName",userName);
     editAvatar && data.append("avatar",avatar)
     for (let pair of data.entries()) {
      console.log(`${pair[0]}: ${pair[1]}`);
    }
    return data
  }

  const handleSubmit=async()=>{
    // no changes 
    
    if(!(editAvatar || editFullName || editFullName)){
      alert(" No Changes happen")
      return ;
    }
    const data = handleSaveChange();
    const response = await updateUser(data);
    if( response?.status ===200){
       dispatch(userLoggedIn(response?.data?.data))
    }
    console.log(response)
  }

  return (
    <div className="w-full  ">
      <div className="flex w-[50%] h-[35%] mx-[33%] my-4 ">
        <img
          className=" rounded-full "
          src={userDetails?.avatar}
          alt="avatar"
        />
      </div>
      <div className=" flex flex-col">
        <div className=" flex flex-row mx-[27%] ">
          <label htmlFor="avatar" className="px-2 ">
            Update avatar
          </label>
          <input id="avatar" type="file" onChange={(e)=>{ console.log(e.target.files);setEditAvatar(true) ;setAvatar(e.target.files[0]) } }/>
        </div>
        <div className="mx-[10%] my-5">
        <input
          className=" h-10 rounded-lg px-2 w-[65%] mx-2"
          type="text"
          value={fullName}
          onChange={(e)=>handleChange("fullName",e)}
        /> <button onClick ={(e)=>{e.preventDefault(); setEditFullName(true)}}>
         <img src={EDIT_LOGO}/>
        </button>
        </div>
        <div className="mx-[10%] my-5">
        <input
          className=" h-10 rounded-lg px-2 w-[65%] mx-2"
          type="text"
          value={userName}
          onChange={(e)=>handleChange("userName",e)}
        /> <button onClick={(e)=>{e.preventDefault(); setEditUserName(true)}}>
         <img src={EDIT_LOGO}/>
        </button>
        </div> 
      </div>
      <div className=" mx-10">
        <button className="px-4 py-2 mx-3 my-2 bg-blue-600 text-white rounded-lg " onClick={handleSaveChange}>Save</button>
        <button className="px-2 py-2 mx-5 my-2 bg-blue-600 text-white rounded-lg " onClick={handleSubmit}>Submit</button>
      </div> 
    </div>
  );
};

export default Profile;
