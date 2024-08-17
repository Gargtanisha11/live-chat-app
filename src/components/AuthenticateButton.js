import { logout } from "../hooks/auth";
import { useNavigate } from "react-router-dom";

const AuthenticateButton = ({ name,  }) => {

  const navigate = useNavigate();
   const onClickFunc=async()=>{
    if(name==="Log In"){
       navigate("/login");
    }
    else if(name==="Sign Up"){
        navigate("/register")
      
    }
    else if(name==="Log Out"){
         const response = await logout();
          if(response?.status === 200){
            navigate("/login")
          }
        }
  }
  
  return (
    <div>
      <button onClick={()=>onClickFunc()} className="  bg-slate-900 font-semibold rounded-xl px-4 py-2 my-[2%] mx-5  ">{name}</button>
    </div>
  );
};

export default AuthenticateButton;
