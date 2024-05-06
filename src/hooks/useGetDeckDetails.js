import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const useGetDeckDetails = () => {
  const { deckId } = useParams();

  const [deckDetails, setDeckDetails] = useState(null);
  const [isError, setIsError] = useState(false);
  // const isLoading = !Array.isArray(deckDetails?.cards);

  const getDeckDetails = async () => {
    try {
      const { data: deckData } = await axios.get(`/decks/${deckId}`);
      setDeckDetails(deckData);
    } catch (error) {
      console.error(error);
      setIsError(true);
    }
  };

  useEffect(() => {
    getDeckDetails();
  }, []);

  return { deckDetails, isError };
};
