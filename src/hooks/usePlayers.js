import { useNavigate, useParams } from "react-router-dom";
import { useRef, createRef, useState, useEffect } from "react";

export const usePlayers = () => {
  const navigate = useNavigate();
  const { deckId } = useParams();
  const [players, setPlayers] = useState(null);
  const [currentTurn, setCurrentTurn] = useState(0);
  const scrollRefs = useRef([]);

  const addPlayer = () => {
    setPlayers((prevPlayers) => [...prevPlayers, ""]);
  };

  const handlePlayerChange = (e) => {
    const index = Number(e.target.name) - 1;

    if (e.target.value.length < 16) {
      setPlayers((prevPlayers) => {
        const updatedPlayers = [...prevPlayers];
        updatedPlayers[index] = e.target.value;
        return updatedPlayers;
      });
    }
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

  useEffect(() => {
    if (players) {
      scrollRefs.current = players.map(() => createRef());
    }
  }, [players]);

  return {
    players,
    currentTurn,
    scrollRefs,
    setCurrentTurn,
    setPlayers,
    addPlayer,
    handlePlayerChange,
    getPlayers,
    handleFormSubmit,
  };
};
