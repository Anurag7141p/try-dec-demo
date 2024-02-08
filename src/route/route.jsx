import { Outlet } from "react-router-dom";
import ErrorPage from "../components/error/error";
import LogIn from "../pages/auth/login";
import Otp from '../pages/auth/otp'
import HomeView from "../pages/homePage/homeView";
import Register from "../pages/auth/signup";
import HandleAddProducts from "../components/product/addProductdetails/handleAddProduct";
import CreateStore from "../pages/store/createstore";
import UserProfile from "../pages/user/userProfile";
import Earnings from "../components/user/mobileview/earnings";
import Analytics2 from "../components/user/mobileview/analytics2";
import Analytics from "../components/user/mobileview/analytics";
import Subscription from "../components/user/mobileview/subscription";
import Preferences from "../components/user/mobileview/preference";
import HandleProductMobile from "../components/product/productMobile/handleproductmobile";
import UserDetails from "../components/user/userDetails";
import Security from "../components/user/security";
import Payment from "../components/user/payment";
import Useraddress from "../components/user/useraddress";
import CameraEqui from "../components/singlePage/cameraandequi";
const UserLayout = () => {

  return <Outlet />;
};

const UserRoute = {
  path: "",
  errorElement: <ErrorPage path={'/'} />,
  element: <UserLayout />,
  children: [
    {
      path: "/",
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
      path: "inventory",
      element: < UserProfile/>
    },
    {
      path: "profile",
      element: <UserDetails />
    },
    {
      path: "useraddress",
      element: <Useraddress />
    },

    {
      path: "security",
      element: <Security />
    },
    {
      path: "payment",
      element: <Payment />
    },

    {
      path: "analytics",
      element: <Analytics />
    },
    {
      path: "analytics2",
      element: <Analytics2 />
    },
    {
      path: "earnings",
      element: <Earnings />
    },
    {
      path: "subscription",
      element: <Subscription />
    },
    {
      path: "preferences",
      element: <Preferences />
    },
    {
      path: "product-mobile",
      element: <HandleProductMobile />
    },
    {
      path: "single",
      element: <CameraEqui/>
    },

  ],
};

export default UserRoute;