import { createSlice } from "@reduxjs/toolkit";

const authenticationDetailSlice=createSlice({
    name:" authenticationDetail",
    initialState:{
        isloggedIn:false,
        userDetails:null,
    },
    reducers:{
        userLoggedIn :(state,action)=>{
            state.isloggedIn=true;
            state.userDetails= action.payload
        },
        userLoggedOut:(state)=>{
            state.isloggedIn=false;
            state.userDetails=null
        },
        
    }
})
 export const{ userLoggedIn,userLoggedOut}=authenticationDetailSlice.actions
export default authenticationDetailSlice.reducer;