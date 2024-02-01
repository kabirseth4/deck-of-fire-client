import { useState } from "react";

export const usePlayers = () => {
  const [players, setPlayers] = useState(null);

  const addPlayer = () => {
    setPlayers((prevPlayers) => [...prevPlayers, ""]);
  };

  const handlePlayerChange = (e) => {
    const index = Number(e.target.name);

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

  return {
    players,
    setPlayers,
    addPlayer,
    handlePlayerChange,
    savePlayers,
    getPlayers,
  };
};
