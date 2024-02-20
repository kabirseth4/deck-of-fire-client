import { AuthProvider } from "./providers/authProvider";
import { Routes } from "./routes";
import "./App.scss";

export const App = () => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
};
