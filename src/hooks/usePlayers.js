import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const usePlayers = () => {
  const { deckId } = useParams();
  const navigate = useNavigate();
  const [players, setPlayers] = useState(null);
  const [currentTurn, setCurrentTurn] = useState(0);

  const addPlayer = () => {
    setPlayers((prevPlayers) => [...prevPlayers, ""]);
  };

  const handlePlayerChange = (e) => {
    const index = Number(e.target.name) - 1;

    setPlayers((prevPlayers) => {
      const updatedPlayers = [...prevPlayers];
      updatedPlayers[index] = e.target.value;
      return updatedPlayers;
    });
  };

  const savePlayers = () => {
    localStorage.setItem("players", JSON.stringify(players.filter((p) => p)));
  };

  const getPlayers = () => {
    return JSON.parse(localStorage.getItem("players"));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const filledFields = players.filter((p) => p);
    if (filledFields.length < 2) return;

    savePlayers();

    navigate(`/decks/${deckId}/play`);
  };

  return {
    players,
    currentTurn,
    setCurrentTurn,
    setPlayers,
    addPlayer,
    handlePlayerChange,
    getPlayers,
    handleFormSubmit,
  };
};
