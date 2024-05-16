import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "providers";
import { Header } from "../components/Header/Header";

export const ProtectedRoute = () => {
  const { user } = useAuthContext();

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
