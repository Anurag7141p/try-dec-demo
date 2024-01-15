import axios from "axios";
import { errorMessage } from "../utils/utils";

const baseBackendUrl = import.meta.env.VITE_BACKEND_URL;

const userPath = "";

const createRoleSpecificAxiosInstance = (tokenName, rolePath) => {
  const instance = axios.create({
    baseURL: `${baseBackendUrl}${rolePath}`,
    timeout: 5000,
    headers: {
      "Content-Type": "application/json",
    },
  });

  instance.interceptors.request.use((request) => {
    const token = localStorage.getItem(tokenName);
    request.headers.Authorization = `Bearer ${token}`;
    return request;
  });

  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      errorMessage(error.response.data.message);
      if (
        (error.response.status === 401 &&
          error.response.data.message === "Unauthorized") ||
        error.response.data.message ===
          "Access Denied: Your account has been temporarily blocked"
      ) {
        localStorage.removeItem(tokenName);
        window.location.assign("/login");
      } else if (error.response.status === 500) {
        console.error("Internal Server Error:", error.response.data);
      }
      return Promise.reject(error.response.data);
    }
  );

  return instance;
};

const userAxios = createRoleSpecificAxiosInstance("userToken", userPath);

export default userAxios;
