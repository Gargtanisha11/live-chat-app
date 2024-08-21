import { configureStore } from "@reduxjs/toolkit";
import authenticationDetailSlice from "./authenticationDetailSlice.js";
import configureSlice from "./configureSlice.js";
import chatSlice from "./chatSlice.js";

 

const liveChatStore= configureStore({
    reducer:{
        authenticationDetails:authenticationDetailSlice,
        configuration:configureSlice,
        chat:chatSlice,
    }
 })

 export default liveChatStore;