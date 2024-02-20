import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../providers/authProvider";
import { Header } from "../components/Header/Header";

export const ProtectedRoute = () => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
