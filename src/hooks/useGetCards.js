import { useEffect, useState } from "react";
import axios from "axios";

export const useGetCards = () => {
  const [cards, setCards] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const getCards = async () => {
    try {
      const { data: cardsData } = await axios.get("/cards");
      setCards(cardsData);
    } catch (error) {
      console.error(error);
      setIsError(true);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    getCards();
  }, []);

  return { cards, isLoading, isError };
};
