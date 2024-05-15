import _axios from "axios";
import { useAuthContext } from "../providers/authProvider";

export const useAxios = () => {
  const { user, setUser } = useAuthContext();
  const axios = _axios.create();

  const configureAxios = () => {
    if (user) {
      axios.defaults.baseURL =
        import.meta.env.VITE_APP_BASE_API_URL + "/users/" + user.id;
      axios.defaults.headers.common["Authorization"] = "Bearer " + user.token;
      axios.interceptors.response.use(null, (error) => {
        if (error.response.status === 401) {
          setUser(null);
          localStorage.removeItem("user");
        }
        return Promise.reject(error);
      });
    }
  };

  return { axios, configureAxios };
};
