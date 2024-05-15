import axios from "axios";
import { useAuthContext } from "../providers/authProvider";
import { useEffect } from "react";

export const useAxios = () => {
  const { user } = useAuthContext();
  const axiosInstance = axios.create();

  useEffect(() => {
    if (user) {
      axiosInstance.defaults.baseURL =
        import.meta.env.VITE_APP_BASE_API_URL + "/users/" + user.id;
      axiosInstance.defaults.headers.common["Authorization"] =
        "Bearer " + user.token;
      axiosInstance.interceptors.response.use(null, (error) => {
        if (error.response.status === 401) {
          setUser(null);
          localStorage.removeItem("user");
        }
        return Promise.reject(error);
      });
    } else {
      delete axiosInstance.defaults.baseURL;
      delete axiosInstance.defaults.headers.common["Authorization"];
      axiosInstance.interceptors.response.use(null, null);
    }
  }, []);

  return axiosInstance;
};
