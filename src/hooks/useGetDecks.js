import { useEffect, useState } from "react";
import axios from "axios";

export const useGetDecks = () => {
  const [decks, setDecks] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const getDecks = async () => {
    try {
      const { data: decksData } = await axios.get("decks");
      setDecks(decksData);
    } catch (error) {
      console.error(error);
      setIsError(true);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    getDecks();
  }, []);

  return { decks, isLoading, isError };
};
