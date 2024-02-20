import axios from "axios";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      axios.defaults.baseURL =
        import.meta.env.VITE_APP_BASE_API_URL + "/users/" + user.id + "/";
      axios.defaults.headers.common["Authorization"] = "Bearer " + user.token;
    } else {
      localStorage.removeItem("user");
      delete axios.defaults.baseUrl;
      delete axios.defaults.headers.common["Authorization"];
    }
  }, [user]);

  const contextValue = useMemo(() => ({ user, setUser }), [user]);

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
