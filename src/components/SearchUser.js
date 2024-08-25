import { SEARCH_LOGO } from "../utils/Constants"

 const SearchUser= ()=>{

    return <div className= " flex rounded-lg mx-2 px-2 mb-2 py-2 items-center h-18 place-content-between">
         <input className=" h-10 w-[85%] rounded-full px-4" />
         <button className=" w-[15%] px-4"  > <img className="" src={SEARCH_LOGO}  alt=" search"/></button>
    </div>
 }

 export default SearchUser;