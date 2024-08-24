import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name:"chats", 
    initialState:{
        otherUserId:null,
        chat:{},
        openChatId:null,

    },
    reducers:{
        addChat:(state,action)=>{
            state.chat=action.payload
        },
        clearChat:(state,action)=>{
            state.chat=action.payload
        },
        addOtherUserId:(state,action)=>{
            state.otherUserId=action.payload
        },
        changeChatId:(state,action)=>{
            state.openChatId=action.payload;
          },
        
    }
})

export const {addChat,clearChat,addOtherUserId,changeChatId} = chatSlice.actions
export default chatSlice.reducer;