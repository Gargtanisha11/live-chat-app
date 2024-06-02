import { useAuth0 } from "@auth0/auth0-react";
import AuthenticateButton from "./AuthenticateButton";


const Login=()=>{
    const {isAuthenticated,isLoading,error,user,loginWithRedirect,logout
    } =useAuth0();
    if (isLoading) {
        return <div>Loading...</div>;
      }
      if (error) {
        return <div>Oops... {error.message}</div>;
      }
      if (isAuthenticated) {
        return (
          <div>
            Hello {user.nickname}{' '}
            <AuthenticateButton onClickFunc={logout} name="Log Out" />
            {console.log(user)}
          </div>
        );
      } else {
        return(
          <div> 
            <AuthenticateButton onClickFunc={loginWithRedirect} name="Log In" />
            
          </div>
        ) 
       
      }    
}

export default Login;                            