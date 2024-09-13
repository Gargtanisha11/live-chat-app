
export const server = process.env.REACT_APP_API_URI
export const USER_LOGIN=server+"/api/v1/user/loginUser"
export const USER_REGISTER=server+"/api/v1/user/register"
export const USER_DETAILS =server+"/api/v1/user/getUserDetails"
export const GET_CHATS = server+"/api/v1/chat/getAllChat"
export const USER_LOGOUT = server+"/api/v1/user/logoutUser"
export const GET_MSG = server+"/api/v1/message/getAllMessage/"
export const SEND_MSG= server+"/api/v1/message/sendMessage/"
export const FIND_USER = server+"/api/v1/user/findUser"
export const CREATE_CHAT =server+ "/api/v1/chat/createChat/"
export const UPDATE_USERDETAILS= server+"/api/v1/user/updateAccountDetails"
export const DELETE_CHAT = server + "/api/v1/chat/deleteChat/"
