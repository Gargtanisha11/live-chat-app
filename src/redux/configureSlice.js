import { createSlice } from "@reduxjs/toolkit";

const configureSlice=createSlice({
    name:"configuration",
    initialState:{
        isChatClicked:false,
        isLoading:true,
    },
    reducers:{
        openChatRoom:(state)=>{
            state.isChatClicked=true;
        },
       
        setLoading:(state,action)=>{
            state.isLoading =action.payload;
        },
    }
})

export const {openChatRoom,setLoading}=configureSlice.actions;
export default configureSlice.reducer;