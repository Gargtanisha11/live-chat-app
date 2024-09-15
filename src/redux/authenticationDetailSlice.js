import { createSlice } from "@reduxjs/toolkit";
import { RESTE_ALL_STATE } from "../utils/Constants";


const  initialState={
    isloggedIn:false,
    userDetails:null,
}

const authenticationDetailSlice=createSlice({
    
    name:" authenticationDetail",
    initialState,
    reducers:{
        userLoggedIn :(state,action)=>{
            state.isloggedIn=true;
            state.userDetails= action.payload
        },
    },
    extraReducers:(builder)=>{
        builder.addCase(RESTE_ALL_STATE,()=>initialState)
    }
})
 export const{ userLoggedIn,userLoggedOut}=authenticationDetailSlice.actions
export default authenticationDetailSlice.reducer;