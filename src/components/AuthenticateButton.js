import { useAuth0 } from "@auth0/auth0-react";

const AuthenticateButton = ({ name,  }) => {
  const {  loginWithRedirect, logout } = useAuth0();
   const onClickFunc=()=>{
    if(name==="Log In"){
      const loginData=loginWithRedirect();
      console.log("logIn " ,loginData)
      console.log(" just writting to check the return value of login ReDirect ")
    }
    else if(name==="Sign Up"){
       loginWithRedirect({authorizationParams:{screen_hint:'signup'}});
      
    }
    else if(name==="Log Out"){
      logout();
     }
  }
  
  return (
    <div>
      <button onClick={()=>onClickFunc()} className="  bg-slate-900 font-semibold rounded-xl px-4 py-2 my-[2%] mx-5  ">{name}</button>
    </div>
  );
};

export default AuthenticateButton;
