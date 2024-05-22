import "./App.scss";
import { AuthProvider } from "providers";
import { Router } from "routes";

export const App = () => {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
};
