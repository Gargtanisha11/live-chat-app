import { configureStore } from "@reduxjs/toolkit";
import authenticationDetailSlice from "./authenticationDetailSlice.js";
import configureSlice from "./configureSlice.js";
import chatSlice from "./chatSlice.js";
import chatMsgSlice from "./messageSlice.js"
 

const liveChatStore= configureStore({
    reducer:{
        authenticationDetails:authenticationDetailSlice,
        configuration:configureSlice,
        chat:chatSlice,
        chatMsg:chatMsgSlice,
    }
 })

 export default liveChatStore;