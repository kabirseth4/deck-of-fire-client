import { useEffect, useState } from "react";
import axios from "axios";

export const useGetCards = () => {
  const [cards, setCards] = useState(null);
  const [isError, setIsError] = useState(false);
  // const isLoading = !Array.isArray(cards);

  const getCards = async () => {
    try {
      const { data: cardsData } = await axios.get("/cards");
      setCards(cardsData);
    } catch (error) {
      console.error(error);
      setIsError(true);
    }
  };

  useEffect(() => {
    getCards();
  }, []);

  return { cards, isError };
};
