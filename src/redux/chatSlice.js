import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name:"chats", 
    initialState:{
        chat:{}
    },
    reducers:{
        addChat:(state,action)=>{
            state.chat=action.payload
        },
        clearChat:(state,action)=>{
            state.chat=action.payload
        }
    }
})

export const {addChat,clearChat} = chatSlice.actions
export default chatSlice.reducer;