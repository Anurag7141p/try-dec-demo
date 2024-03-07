import { Outlet } from "react-router-dom";
import ProfileNav from "../profile/layout/profileNav";
import ProfileSidebar from "../profile/layout/profileSidebar";
import UserShortData from "../profile/layout/topBarUserData";
// import useIsLogged from "../../middleware/isLogged";

const ProfileLayout = () => {
  // useIsLogged()
  return (
    <>
      <div className="flex flex-col justify-center">
        <ProfileNav />
        <div className="flex ">
          <ProfileSidebar />
          <div className="flex-1  bg-blue-100">
            <UserShortData />
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileLayout;
