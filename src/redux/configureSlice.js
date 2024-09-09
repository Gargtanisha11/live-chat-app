import { createSlice } from "@reduxjs/toolkit";

const configureSlice=createSlice({
    name:"configuration",
    initialState:{
        isChatClicked:false,
        openedTab:"Home"
    },
    reducers:{
        openChatRoom:(state)=>{
            state.isChatClicked=true;
        },
    }
})

export const {openChatRoom,setTab}=configureSlice.actions;
export default configureSlice.reducer;