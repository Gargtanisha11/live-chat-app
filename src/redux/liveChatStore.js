import { configureStore } from "@reduxjs/toolkit";
import authenticationDetailSlice from "./authenticationDetailSlice.js";

 

const liveChatStore= configureStore({
    reducer:{
        authenticationDetails:authenticationDetailSlice
    }
 })

 export default liveChatStore;