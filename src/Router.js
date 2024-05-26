import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Login from "./components/Login";
import Home from "./components/Home.js";
//import ProtectedRoute from"./components/ProtectedRoute.js"


 


  const router=createBrowserRouter(
    [
        {
            path:"/",
            element:<Home/>,
            children:[
                
            ]
        },
        {
            path:"/login",
            element:<Login/>
        },
        // {
        //     element:<ProtectedRoute />,
        //     children:[
        //         {
        //             path:"/loggedInPage",
        //             element:<LoggedInPage/>
        //         }]
        // },
        {
            path:"*",
            element:<h1> 404 error ... something went wrong</h1>
        }
    ]
  )


  export default router;