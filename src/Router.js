import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Login from "./components/Login";
import Home from "./components/Home.js";

import ProtectedRoute from"./components/ProtectedRoute.js"
import Body from "./components/Body.js";
import ChatContainer from "./components/ChatContainer.js";


 


  const router=createBrowserRouter(
    [
        {
            path:"/",
            element:<Home/>,
            children:[
                {path:"/",
                element:<Body/>
                },
                {
                    element:<ProtectedRoute />,
                    children:[
                    {
                        path:"/myChats",
                        element:<ChatContainer/>
                    }] 
                }

            ]
        },
        {
            path:"/login",
            element:<Login/>
        },
       ,
        {
            path:"*",
            element:<h1> 404 error ... something went wrong</h1>
        }
    ]
  )


  export default router;