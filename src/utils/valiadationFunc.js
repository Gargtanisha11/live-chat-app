const flag= "gm"
const validateEmail=(email)=>{
    
    const emailPattern ="[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}"
    const emailRegex= new RegExp(emailPattern,flag);
    const result =email.match(emailRegex);
    return result != null ? true : false ;
}
 const validateName=(name)=>{
    const namePattern = "^[a-zA-Z0-9._]{3,16}$"
    const nameRegex = new RegExp(namePattern,flag);
    const result = name.match(nameRegex);
    return result != null ? true : false;
}
 const validatePassword =(password)=>{
    const passwordPattern ='^[A-Z]+[a-zA-Z0-9.!@#$%&*()]{7,}'
    const passwordRegex= new RegExp(passwordPattern,flag);
    const result = password.match(passwordRegex);
    return result != null ? true : false; 
 }

 const validateImage=(type)=>{
  if(type==="image/png"|| type==="image/jpg") return true;
  else{
    return false;
  }
 }
export{ validateName,validateEmail,validatePassword, validateImage }