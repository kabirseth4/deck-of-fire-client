import { useEffect, useState } from "react";
import axios from "axios";

export const useGetDecks = () => {
  const baseApiUrl = import.meta.env.VITE_APP_BASE_API_URL;

  const [decks, setDecks] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const getDecks = async () => {
    const allUserDecksUrl = baseApiUrl + "/users/1/decks";

    try {
      const { data: decksData } = await axios.get(allUserDecksUrl, {
        headers: {
          Authorization: "1",
        },
      });
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
