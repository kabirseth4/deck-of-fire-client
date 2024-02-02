import { useEffect, useState } from "react";
import axios from "axios";

export const useGetRules = () => {
  const baseApiUrl = import.meta.env.VITE_APP_BASE_API_URL;

  const [rules, setRules] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const getRules = async () => {
    const allUserRulesUrl = baseApiUrl + "/users/1/rules";

    try {
      const { data: rulesData } = await axios.get(allUserRulesUrl, {
        headers: {
          Authorization: "1",
        },
      });
      setRules(rulesData);
    } catch (error) {
      console.error(error);
      setIsError(true);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    getRules();
  }, []);

  return { rules, isLoading, isError };
};
