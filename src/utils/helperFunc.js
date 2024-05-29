 export const nearestTime=(timeStamp)=>{
     const date=new Date(timeStamp);
     const currentDate=  Date.now();
     const currentDateString=new Date(currentDate);
     
     const timeString = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
     const sendingDate= date.getDate()
     if((currentDateString.getDate()-sendingDate)> 1){
        return sendingDate+" days ago"
     }
     return timeString

 }