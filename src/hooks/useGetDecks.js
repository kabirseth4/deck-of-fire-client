import { useEffect, useState } from "react";
import axios from "axios";

export const useGetDecks = () => {
  const [decks, setDecks] = useState(null);
  const [isError, setIsError] = useState(false);
  const isLoading = !Array.isArray(decks);

  const getDecks = async () => {
    try {
      const { data } = await axios.get("decks");
      setDecks(data);
    } catch (error) {
      console.error(error);
      setIsError(true);
    }
  };

  useEffect(() => {
    getDecks();
  }, []);

  return { decks, isLoading, isError };
};
