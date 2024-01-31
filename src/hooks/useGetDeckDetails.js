import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const useGetDeckDetails = () => {
  const { deckId } = useParams();
  const baseApiUrl = import.meta.env.VITE_APP_BASE_API_URL;

  const [deckDetails, setDeckDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const getDeckDetails = async () => {
    const singleDeckUrl = `${baseApiUrl}/users/1/decks/${deckId}`;

    try {
      const { data: deckData } = await axios.get(singleDeckUrl, {
        headers: {
          Authorization: "1",
        },
      });
      setDeckDetails(deckData);
    } catch (error) {
      console.error(error);
      setIsError(true);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    getDeckDetails();
  }, []);

  return { deckDetails, isLoading, isError };
};
