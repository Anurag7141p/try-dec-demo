import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const useIsLogout = () => {
  const { success } = useSelector((state) => state?.userAuth);
  const navigate = useNavigate();
  useEffect(() => {
    if (success) {
      navigate("/");
    }
  }, [success]);
};

export default useIsLogout;
