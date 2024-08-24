import { createSlice } from "@reduxjs/toolkit";

const messageSlice = createSlice({
    name:"chatMsg",
    initialState:{
        message:[]
    },
    reducers:{
        pushChatMsg:(state,action)=>{
            state.message = {...state.message , ...action.payload};
        },
    }
})

export const {pushChatMsg} = messageSlice.actions;
export default messageSlice.reducer;