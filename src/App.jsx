import { AuthProvider } from "./providers/authProvider";
import { Router } from "./routes";
import "./App.scss";

export const App = () => {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
};
