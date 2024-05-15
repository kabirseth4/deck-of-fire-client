import { useEffect, useState } from "react";
import { useAxios } from "./useAxios";
// import axios from "axios";

export const useGetDecks = () => {
  const axios = useAxios();
  const [decks, setDecks] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const getDecks = async () => {
    try {
      const { data } = await axios.get("decks");
      setDecks(data);
    } catch (error) {
      console.error(error);
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getDecks();
  }, []);

  return { decks, isLoading, error };
};
