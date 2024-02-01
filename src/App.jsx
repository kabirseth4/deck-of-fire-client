import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { DecksPage } from "./pages/DecksPage/DecksPage";
import { DeckDetailsPage } from "./pages/DeckDetailsPage/DeckDetailsPage";
import { DeckPlayPage } from "./components/DeckPlayPage/DeckPlayPage";
import "./App.scss";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/decks" />} />
        <Route path="/decks" element={<DecksPage />} />
        <Route path="/decks/add" element={<Navigate to="/decks" />} />
        <Route path="/decks/:deckId" element={<DeckDetailsPage />} />
        <Route path="/decks/:deckId/play" element={<DeckPlayPage />} />
      </Routes>
    </BrowserRouter>
  );
};
