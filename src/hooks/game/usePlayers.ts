import { useRef, createRef, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const usePlayers = () => {
  const navigate = useNavigate();
  const { deckId } = useParams();
  const [players, setPlayers] = useState<string[] | null>(null);
  const [currentTurn, setCurrentTurn] = useState(0);
  const scrollRefs = useRef<React.RefObject<HTMLParagraphElement>[]>([]);

  const addPlayer = () => {
    setPlayers((prevPlayers) =>
      prevPlayers ? [...prevPlayers, ""] : ["", ""]
    );
  };

  const handlePlayerChange: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    const index = Number(e.target.name) - 1;

    if (e.target.value.length < 16) {
      setPlayers((prevPlayers) => {
        const updatedPlayers = prevPlayers ? [...prevPlayers] : [];
        updatedPlayers[index] = e.target.value;
        return updatedPlayers;
      });
    }
  };

  const savePlayers = () => {
    if (!players) return;
    localStorage.setItem("players", JSON.stringify(players.filter((p) => p)));
  };

  const getPlayers = () => {
    const existingPlayers = localStorage.getItem("players");
    return existingPlayers ? (JSON.parse(existingPlayers) as string[]) : null;
  };

  const handleFormSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (!players) return;

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
