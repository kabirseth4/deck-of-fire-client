import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { DecksPage } from "./pages/DecksPage/DecksPage";
import { AddDeckPage } from "./pages/AddDeckPage/AddDeckPage";
import { DeckDetailsPage } from "./pages/DeckDetailsPage/DeckDetailsPage";
import { PlayGamePage } from "./pages/PlayGamePage/PlayGamePage";
import { SetupGamePage } from "./pages/SetupGamePage/SetupGamePage";
import { CardsPage } from "./pages/CardsPage/CardsPage";
import "./App.scss";

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/decks" />} />
        <Route path="/decks" element={<DecksPage />} />
        <Route path="/decks/add" element={<AddDeckPage />} />
        <Route path="/decks/:deckId" element={<DeckDetailsPage />} />
        <Route path="/decks/:deckId/play" element={<PlayGamePage />} />
        <Route path="/decks/:deckId/play/setup" element={<SetupGamePage />} />
        <Route path="/cards" element={<CardsPage />} />
      </Routes>
    </BrowserRouter>
  );
};
