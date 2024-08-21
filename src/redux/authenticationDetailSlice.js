import { createSlice } from "@reduxjs/toolkit";

const authenticationDetailSlice=createSlice({
    name:" authenticationDetail",
    initialState:{
        isloggedIn:false,
        userDetails:{},
    },
    reducers:{
        userLoggedIn :(state,action)=>{
            state.isloggedIn=true;
            state.userDetails= action.payload
        },
        userLoggedOut:(state)=>{
            state.isloggedIn=false;
            state.userDetails={}
        },
        
    }
})
 export const{ userLoggedIn,userLoggedOut}=authenticationDetailSlice.actions
export default authenticationDetailSlice.reducer;