import { AuthProvider } from "./providers/authProvider";
import { Router } from "./routes";
import "./App.scss";
// import { BrowserRouter } from "react-router-dom";
// import { DecksPage } from "./pages/DecksPage/DecksPage";

export const App = () => {
  return (
    <AuthProvider>
      {/* <Routes /> */}
      {/* <BrowserRouter> */}
      {/* <Routes>
          <Route path="/decks" element={<DecksPage />} />
        </Routes> */}
      {/* </BrowserRouter> */}
      <Router />
    </AuthProvider>
  );
};
