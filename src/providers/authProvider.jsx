// import axios from "axios";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

const AuthContext = createContext();

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      // axios.defaults.baseURL =
      //   import.meta.env.VITE_APP_BASE_API_URL + "/users/" + user.id + "/";
      // axios.defaults.headers.common["Authorization"] = "Bearer " + user.token;
      // axios.interceptors.response.use(null, (error) => {
      //   if (error.response.status === 401) {
      //     setUser(null);
      //     localStorage.removeItem("user");
      //   }
      //   return Promise.reject(error);
      // });
    } else {
      localStorage.removeItem("user");
      // delete axios.defaults.baseUrl;
      // delete axios.defaults.headers.common["Authorization"];
      // axios.interceptors.response.use(null, null);
    }
  }, []);

  const contextValue = useMemo(() => ({ user, setUser }), [user]);

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
