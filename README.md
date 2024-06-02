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
add fake chat when i click
check the code of free api 



# for backend 
i need to create model for users model  , chat model for  connected User , message model 