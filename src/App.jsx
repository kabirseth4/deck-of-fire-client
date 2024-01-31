import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { DecksPage } from "./pages/DecksPage/DecksPage";
import "./App.scss";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/decks" />} />
        <Route path="/decks" element={<DecksPage />} />
      </Routes>
    </BrowserRouter>
  );
};
