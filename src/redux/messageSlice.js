import { createSlice } from "@reduxjs/toolkit";
import { RESTE_ALL_STATE } from "../utils/Constants";

const messageSlice = createSlice({
    name:"chatMsg",
    initialState:{
        message:[]
    },
    reducers:{
        clearChatMsg:(state,action)=>{
           const chatMsg = state.message;
           delete chatMsg[action.payload]
           state.message={...chatMsg}
        },
        pushChatMsg:(state,action)=>{
            state.message = {...state.message , ...action.payload};
        },
        pushSingleMsg:(state,action)=>{
            const chatId =action.payload.chatId;
            let msg = state.message[chatId] || []
            msg.push(action.payload.chatMsg)
            const payload = {[chatId]:msg}
            state.message= {...state.message, ...payload}
        }
        
    },
    extraReducers:(builder)=>{
        builder.addCase(RESTE_ALL_STATE,()=>initialState)
    }
})

export const {pushChatMsg,pushSingleMsg,clearChatMsg} = messageSlice.actions;
export default messageSlice.reducer;