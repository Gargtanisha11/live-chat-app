 # live chat application

 - Start with frontEnd 
   - give structure 
   - configure dependency (tailwind,react-router,react-redux,react toolkit )

- creating Responsive Home Page with login and signup button

- add  @auth0/auth0-react  and create an single app aplication on auth by okta


# to do  (20-may-2024)
- Add shimmer
- Complete Landing Page  ( Done )
- add Router ( add Protected Router 
        -> error :- when i go on url "/loogedIn" it take me to "/" because isauthenticated value is always giving false value
        -> solution :- i have to use isLoading beacause it is loading that's why  isauthenticated value is false  )