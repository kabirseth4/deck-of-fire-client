import _axios from "axios";
import { useAuthContext } from "providers";

const baseApiUrl = import.meta.env.VITE_APP_BASE_API_URL;

export const useAxios = () => {
  const { user, setUser } = useAuthContext();
  const axios = _axios.create();

  if (user) {
    axios.defaults.baseURL = baseApiUrl + "/users/" + user.id;
    axios.defaults.headers.common["Authorization"] = "Bearer " + user.token;
    axios.interceptors.response.use(null, (error) => {
      if (error.response.status === 401) {
        setUser(null);
        localStorage.removeItem("user");
      }
      return Promise.reject(error);
    });
  } else {
    axios.defaults.baseURL = baseApiUrl;
  }

  return axios;
};
