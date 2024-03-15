import { Outlet } from "react-router-dom";
import ErrorPage from "../components/error/error";
import LogIn from "../pages/auth/login";
import Otp from "../pages/auth/otp";
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
import CustomArrows from "../components/reusable/slickcarousel";
import Singlepage from "../pages/singlepage";
import MobChatMain from "../components/chat/mobChatMain";
import ProductList from "../components/product/mediaProduction/productList";
import CategoryDetails from "../components/product/mediaProduction/categoryDetails";
import ExtraDeatails from "../components/product/mediaProduction/extraDeatails";
import ProductPricingAndQuantity from "../components/product/mediaProduction/productPricingAndQuantity";
import StoreDetails from "../components/store/createStore/storeDetails";
import PersonalizedStore from "../components/store/createStore/personalizedStore";
import SubscriptionPlan from "../components/store/createStore/subscriptionPlan";
import AddDocument from "../components/store/createStore/addDocument";
import HandleCreateStore from "../components/store/createStore/handleCreateStore";
import Checkout from "../components/product/checkout/checkout";
import CheckoutMain from "../components/product/checkout/checkoutMain";
import CheckoutDemo from "../components/product/checkout/checkoutMainDemo";
import ProductMoreDetails from "../components/product/moredetails/productMoreDetails";
import Test from "../components/product/checkout/test";
import MobHandleAddProduct from "../components/product/mobAddStoreProduct/mobHandleAddProduct";
import MobHandleCreateStore from "../components/store/mobCreateStore/mobHandleCreateStore";
const UserLayout = () => {
  return <Outlet />;
};

const UserRoute = {
  path: "",
  errorElement: <ErrorPage path={"/"} />,
  element: <UserLayout />,
  children: [
    {
      path: "/",
      element: <HomeView />,
    },
    {
      path: "login",
      element: <LogIn />,
    },
    {
      path: "signup",
      element: <Register />,
    },
    {
      path: "otp-auth",
      element: <Otp />,
    },
    // {
    //   path: "store",
    //   element: <CreateStore />
    // },
    {
      path: "add-product",
      element: <HandleAddProducts />,
    },
    // {
    //   path: "inventory",
    //   element: < UserProfile/>
    // },
    // {
    //   path: "inventory/edit-product",
    //   element: < EditProduct/>
    // },
    {
      path: "profile",
      element: <UserDetails />,
    },
    {
      path: "useraddress",
      element: <Useraddress />,
    },

    {
      path: "security",
      element: <Security />,
    },
    {
      path: "payment",
      element: <Payment />,
    },

    {
      path: "analytics",
      element: <Analytics />,
    },
    {
      path: "analytics2",
      element: <Analytics2 />,
    },
    {
      path: "earnings",
      element: <Earnings />,
    },
    {
      path: "subscription",
      element: <Subscription />,
    },
    {
      path: "preferences",
      element: <Preferences />,
    },
    {
      path: "product-mobile",
      element: <HandleProductMobile />,
    },
    {
      path: "single",
      element: <Singlepage />,
    },
    {
      path: "slick",
      element: <CustomArrows />,
    },
    {
      path: "chat",
      element: <MobChatMain />,
    },

    //media production
    {
      path: "product-list",
      element: <ProductList />,
    },
    {
      path: "category-details",
      element: <CategoryDetails />,
    },
    {
      path: "extra-details",
      element: <ExtraDeatails />,
    },
    {
      path: "product-pricing-and-quantity",
      element: <ProductPricingAndQuantity />,
    },

    // store created
    // {
    //   path: "store-details",
    //   element: <StoreDetails />,
    // },
    // {
    //   path: "personalized-store",
    //   element: <PersonalizedStore />,
    // },
    // {
    //   path: "subscription-plan",
    //   element: <SubscriptionPlan />,
    // },
    // {
    //   path: "add-documents",
    //   element: <AddDocument />,
    // },

    // main store
    {
      path: "handle-create-store",
      element: <HandleCreateStore />,
    },

    //checkout
    {
      path: "checkout",
      element: <Checkout />,
    },
    {
      path: "checkout-main",
      element: <CheckoutMain />,
    },
    {
      path: "checkout-demo",
      element: <CheckoutDemo />,
    },

    // mobaddproduct
    {
      path: "mob-add-product",
      element: <MobHandleAddProduct />,
    },

    // product more details
    {
      path: "product-more-details",
      element: <ProductMoreDetails />,
    },

    // mob add store
    {
      path:"mob-add-store",
      element:<MobHandleCreateStore/>
    }
  ],
};

export default UserRoute;
