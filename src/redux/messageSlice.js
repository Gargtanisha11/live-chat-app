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
        pushSingleMsg:(state,action)=>{
            console.log(action.payload);
            const chatId =action.payload.chatId;

            let msg = state.message[chatId] || []
            msg.push(action.payload.chatMsg)
            const payload = {[chatId]:msg}
            state.message= {...state.message, ...payload}
        }
        
    }
})

export const {pushChatMsg,pushSingleMsg} = messageSlice.actions;
export default messageSlice.reducer;