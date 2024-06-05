import { configureStore } from "@reduxjs/toolkit";
import authenticationDetailSlice from "./authenticationDetailSlice.js";
import configureSlice from "./configureSlice.js";

 

const liveChatStore= configureStore({
    reducer:{
        authenticationDetails:authenticationDetailSlice,
        configuration:configureSlice,
    }
 })

 export default liveChatStore;