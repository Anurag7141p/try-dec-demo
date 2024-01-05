import { Outlet } from "react-router-dom";
import ErrorPage from "../components/error/error";
import SignUp from "../components/auth/signup";
import LogIn from "../pages/auth/login";
import Otp from '../pages/auth/otp'
import CreateStore from "../pages/store/createstore";
import AddDocument from "../components/store/addDocuments";
import AddProducts from "../components/product/addProduct";
import UpdateProduct from "../components/product/updateProduct";
import SelectStoretype from "../components/store/selectStoretype";
import HomeLocation from "../components/location/location";
const UserLayout = () => {
  return <Outlet />;
};

const UserRoute = {
  path: "",
  errorElement: <ErrorPage path={'/'} />,
  element: <UserLayout />,
  children: [
    {
      path: "",
      element: <LogIn />
    },
    {
      path: "signup",
      element: <SignUp />
    },
    {
      path: "otp-auth",
      element: <Otp />
    },
    {
      path: "select-type",
      element: <SelectStoretype />
    },
    {
      path: "create-store",
      element: <CreateStore />
    },
    {
      path: "add-document",
      element: <AddDocument />
    },
    {
      path: "add-product",
      element: <AddProducts />
    },
    {
      path: "Update-product",
      element: <UpdateProduct />
    },
    {
      path: "location",
      element: <HomeLocation />
    },


  ],
};

export default UserRoute;
