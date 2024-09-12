import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Login from "./pages/Login.js";
import Home from "./pages/Home.js";

import ProtectedRoute from "./components/ProtectedRoute.js";
import Body from "./components/Body.js";
import SignUp from "./pages/SignUp.js";
import ChatList from "./components/ChatList.js";
import Profile from "./components/Profile.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      { path: "/", element: <Body /> },
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: "/myChats",
            element: <ChatList />,
          },
         {
          path:"/profile",
          element:<Profile/>
         }
        ],
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <SignUp />,
  },
  {
    path: "*",
    element: <h1> 404 error ... something went wrong</h1>,
  },
]);

export default router;
