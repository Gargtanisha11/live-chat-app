import { MENU_LOGO, USER_AVATAR_LOGO } from "../utils/Constants";

const ChatterProfile = () => {
  return (
    <div className=" bg-zinc-500 h-[10%] text-black w-full m-0">
      {
        // user avatar
        // user name
        // three dot for other info
      }
      <div className=" flex flex-row place-content-between px-5 py-1  ">
        <div className=" flex flex-row">
          <img
            src={USER_AVATAR_LOGO}
            className=" h-10 w-10 rounded-full"
            alt=" user avatar"
          />
          <div className="place-content-start text-left content-center">
          <h1 className=" px-2 text-lg font-bold text-white"> User name </h1>
          <h1 className=" px-2 text-xs self-start"> Status</h1>
          </div>
          
        </div>

        <img src={MENU_LOGO} className="h-10 w-5 " alt=" three dot menu " />
      </div>
    </div>
  );
};

export default ChatterProfile;
