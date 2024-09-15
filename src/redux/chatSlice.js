import { createSlice } from "@reduxjs/toolkit";
import { RESTE_ALL_STATE } from "../utils/Constants";

 const initialState={
    otherUserId:null,
    chat:{},
    openChatId:null,

}

const chatSlice = createSlice({
    name:"chats", 
    initialState,
    reducers:{
        clearAChat:(state,action)=>{
             const chat = state.chat;
             delete (chat[action.payload])
             state.chat= {...chat}
        },
        addOtherUserId:(state,action)=>{
            state.otherUserId=action.payload
        },
        changeChatId:(state,action)=>{
            state.openChatId=action.payload;
          },
        addSingleChat:(state,action)=>{
            let chat =  action.payload;
            let chatId = action.payload._id;
            let payload= {[chatId]:chat};
            state.chat= {...state.chat, ...payload };
        },
        addLastMessage:(state,action)=>{
           const chatId= action.payload.chatId;
           const lastMessage = action.payload.lastMessage
           let updatedState= state.chat;
           updatedState[chatId].lastMessage=lastMessage
           updatedState[chatId].message.push(lastMessage._id)
           state.chat ={...updatedState}
        }
    },
    extraReducers:(builder)=>{
      builder.addCase(RESTE_ALL_STATE,()=>initialState)
    }
})

export const {clearAChat,addOtherUserId,changeChatId,addSingleChat,addLastMessage} = chatSlice.actions
export default chatSlice.reducer;