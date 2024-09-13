 # live chat application

 - Start with frontEnd 
   - give structure 
   - configure dependency (tailwind,react-router,react-redux,react toolkit )

- creating Responsive Home Page with login and signup button

- add  @auth0/auth0-react  and create an single app aplication on auth by okta
 -create refux store for storing the logged In details

- structure

  ## error 
    1 -> error :- when i go on url "/loogedIn" it take me to "/" because isauthenticated value is always giving false value
     -> solution :- i have to use isLoading beacause it is loading that's why  isauthenticated value is false 

   1-> error when i click on option the dropdown list is not disappearing 
    -> solution because i dont set the size attribute in select tag that why only one option is showing and only that funtion is calling 


# wanna to do 
  add the thing to get the avatar file from client side so that we can send form data to backend 
  add api for login and signup and also for logout 


# for backend 
i need to create model for users model  , chat model for  connected User , message model 


 #  steps to send the data to server 
   1. create the interface 
   2. create state variable to store data 
   3. create function using useContext -> not doing 
   4. create the request handler function to handle request which take some parameter(api,setISloading(this is function which is call by other function in request handler ),call back function,alert) ->
   5. send it to api (create the api function which haveall the api's) using axios 

# 16 august -23 august 
- implement the logout button  ✅
- protected routes ( get the user details)✅
- get the chat list at the my chats (
   create the redux store for storing the chat ✅
   get the chat ans store it in redux store ✅
   backend correction ( last message is by sending by the user )✅
   map it at ui  with their link to open their particular chat ✅

)
- when user click on a chat card (
  fetch the message data ✅
  create redux store for messages ✅
  and map it with  time stamp ✅
)

# 24 august - 30 august ( completed till 2 sept )
- implement the api for send the message ✅
- implement the api for creating chat (
   make an input box to search for searching the user find username or email id ✅
   create searchUser function  at backend in user controller ✅
   it have a list of the user with create chat button ✅
   if alreadyyy have chat with thet user then open chat room with user ✅
   on click  open chat room  with that user ✅
  )
- implement websocket at backend (
    send message ✅
- and write the logic to number of api call of an api✅
)

# 3sept - 10 sept
(
  - page should not reload again ✅
  - when message send update last message and if chat is new then add chat to the chatlist slice ✅
  - functionality  for update the profile and update the password (
     "setting" have list of multiple opt with profile option✅
     in profile option have a page to change ✅
     send the data to backend ✅
  )
  - group the chat message according to there date 
  - delete messaage❌
  - delete chat ✅ (but not another side of the user❌ )
  - host the app first 
)


# error solution 
1. getting error while getto=ing the userdetails beacause not passed the withcredential  parameter in third argument 
2. getting error while logged out because i pass withcredential in place of body 
    err -  const response = await axios.post(USER_LOGOUT,{withCredentials:true});
    correct -const response = await axios.post(USER_LOGOUT,{},{withCredentials:true});
3. when message send chat list also render again 




# socket.io-client for frontend 
 create a useSocket custom hook using useContext,
 create a SocketProvider component 
 wrap app inside SocketProvider