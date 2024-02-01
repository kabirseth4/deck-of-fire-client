import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { DecksPage } from "./pages/DecksPage/DecksPage";
import { DeckDetailsPage } from "./pages/DeckDetailsPage/DeckDetailsPage";
import { PlayGamePage } from "./pages/PlayGamePage/PlayGamePage";
import { SetupGamePage } from "./pages/SetupGamePage/SetupGamePage";
import "./App.scss";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/decks" />} />
        <Route path="/decks" element={<DecksPage />} />
        <Route path="/decks/add" element={<Navigate to="/decks" />} />
        <Route path="/decks/:deckId" element={<DeckDetailsPage />} />
        <Route path="/decks/:deckId/play" element={<PlayGamePage />} />
        <Route path="/decks/:deckId/play/setup" element={<SetupGamePage />} />
      </Routes>
    </BrowserRouter>
  );
};
