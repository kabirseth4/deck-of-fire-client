import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../providers/authProvider";
import { Header } from "../components/Header/Header";

export const ProtectedRoute = () => {
  const { token } = useAuth();

  if (!token) {
    return <Navigate to="/login" />;
  }
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
