import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name:"chats", 
    initialState:{
        otherUserId:null,
        chat:{},
        openChatId:null,

    },
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
    }
})

export const {clearAChat,addOtherUserId,changeChatId,addSingleChat,addLastMessage} = chatSlice.actions
export default chatSlice.reducer;