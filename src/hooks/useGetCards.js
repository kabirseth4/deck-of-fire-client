import { useEffect, useState } from "react";
import axios from "axios";

export const useGetCards = () => {
  const baseApiUrl = import.meta.env.VITE_APP_BASE_API_URL;

  const [cards, setCards] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const getCards = async () => {
    const allUserCardsUrl = baseApiUrl + "/users/1/cards";

    try {
      const { data: cardsData } = await axios.get(allUserCardsUrl, {
        headers: {
          Authorization: "1",
        },
      });
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
