import { Outlet } from "react-router-dom";
import ErrorPage from "../components/error/error";
import LogIn from "../pages/auth/login";
import Otp from '../pages/auth/otp'
import LocationSearch from "../components/location/locationsearch";
import HomeView from "../pages/homePage/homeView";
import SeeAll from "../components/seeAllPage/seeAll1";
import SeeAll2 from "../components/seeAllPage/seeAll2";
import Register from "../pages/auth/signup";
import HandleAddProducts from "../components/product/addProductdetails/handleAddProduct";
import CreateStore from "../pages/store/createstore";
import UserProfile from "../pages/user/userProfile";
import Userprofile from "../components/user/userprofile";
const UserLayout = () => {

  return <Outlet />;
};

const UserRoute = {
  path: "",
  errorElement: <ErrorPage path={'/'} />,
  element: <UserLayout />,
  children: [
    {
      path: "home",
      element: <HomeView />
    },
    {
      path: "login",
      element: <LogIn />
    },
    {
      path: "signup",
      element: <Register />
    },
    {
      path: "otp-auth",
      element: <Otp />
    },
    {
      path: "store",
      element: <CreateStore />
    },
    
    {
      path: "add-product",
      element: <HandleAddProducts />
    },
    
    {
      path: "location-search",
      element: <LocationSearch />
    },
    {
      path: "inventory",
      element: < UserProfile/>
    },
    {
      path: "profile",
      element: <Userprofile />
    },
    {
      path: "all-rentals",
      element: <SeeAll />
    },
    {
      path: "cameraeqip",
      element: <SeeAll2 />
    },

  ],
};

export default UserRoute;
