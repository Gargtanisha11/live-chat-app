import { useAuth0 } from "@auth0/auth0-react"
import { Navigate, Outlet } from "react-router-dom"

const ProtectedRoute=()=>{
   
    const { isAuthenticated,isLoading} = useAuth0();
    console.log(isAuthenticated)
     
    if(isLoading){
        return <div> ..Loading </div>
    }
 
    if(!isAuthenticated){
       return <Navigate to="/" replace />
    }
    return <Outlet/>
}

export default ProtectedRoute;