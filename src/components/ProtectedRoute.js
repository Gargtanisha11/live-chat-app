import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { userDetails } from "../hooks/auth";
import { userLoggedIn } from "../redux/authenticationDetailSlice";
 

//  react component can't be asynchronous function 
const ProtectedRoute = () => {

  const [isLoading,setIsLoading] = useState(true);
  const isAuthenticated = useSelector(state=> state.authenticationDetails.isloggedIn);
  const dispatch = useDispatch();



  const fetchUserData = async () => {
   try {
    const response = await userDetails();
     if (response?.status === 200) {
       dispatch(userLoggedIn(response?.data?.data));
     }
   
   } catch (error) {
      console.log(" error while fetching the data",error)
   }
  finally{
    setIsLoading(false);
  }
};

  useEffect(()=>{
   fetchUserData(); 
  },)
  if(isLoading){
    return (<div>Loading....</div>)
  }

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
