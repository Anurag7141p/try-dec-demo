import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/user/authSlice";
import { useNavigate } from "react-router-dom";

const useIsLogged = () => {
  const { success } = useSelector((state) => state?.userAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!success) {
      navigate("/login");
    }
  }, [success]);

  useEffect(() => {
    const token = localStorage.getItem("userToken");
    if (!token) {
      dispatch(logout());
      navigate("/login");
    }
  }, []);
};

export default useIsLogged;
