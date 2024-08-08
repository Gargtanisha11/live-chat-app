
import { Outlet } from "react-router-dom"


const ProtectedRoute=()=>{
   
  
   // const{isAuthenticated,isLoading}=useAuth0()
  
     
   // if(isLoading){
   //    return <div>...loading </div>
   // }
 
   //  if(!isAuthenticated){
   //     return <Navigate to="/" replace />
   //  }
    return <Outlet/>
}

export default ProtectedRoute;