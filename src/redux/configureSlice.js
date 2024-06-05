import { createSlice } from "@reduxjs/toolkit";

const configureSlice=createSlice({
    name:"configuration",
    initialState:{
        isChatClicked:false,
    },
    reducers:{
        openChatRoom:(state)=>{
            state.isChatClicked=true;
        }
    }
})

export const {openChatRoom}=configureSlice.actions;
export default configureSlice.reducer;