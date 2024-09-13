import { createSlice } from "@reduxjs/toolkit";

const configureSlice=createSlice({
    name:"configuration",
    initialState:{
        isChatClicked:false,
    },
    reducers:{
        openChatRoom:(state)=>{
            state.isChatClicked=true;
        },
        closeChatRoom:(state)=>{
            state.isChatClicked= false;
        }
    }
})

export const {openChatRoom,closeChatRoom}=configureSlice.actions;
export default configureSlice.reducer;