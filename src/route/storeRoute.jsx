import { Outlet} from "react-router-dom";
// import AddProduct from "../pages/store/addProduct";
import Inventory from "../components/store/mainstore/inventory";
import ProfileLayout from "../components/layout/profileLayout";
// import Inventory from "../components/user/inventoryDemo";
import EditProduct from "../components/user/editproduct/editProduct";

const StoreLayout = () => {
  return (
    <div className="mx-auto justify-center  items-center 2xl:w-[1536px]">
      <Outlet />;
    </div>
  );
};

const StoreRoute = {
  path: "store",
  // errorElement: <ErrorPage path={"/"} />,
  element: <StoreLayout />,
  children: [
    {
      path: "",
      element: <ProfileLayout />,
      children: [
        {
          path: "",
          element: <Inventory/>,
        },
        {
          path: "edit-product/:id",
          element: <EditProduct />,
        },
      ],
    },
    // {
    //   path: "add-product",
    //   element: <AddProduct />,
    // },
  ],
};

export default StoreRoute;
