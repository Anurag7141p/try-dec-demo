import SignIn from "../../components/auth/signin";
import Layout from "../../components/layout/authlayout";
import useIsLogout from "../../middleware/isLogout";

const Login = () => {
  useIsLogout();
  return <Layout Form={SignIn} />;
};

export default Login;
