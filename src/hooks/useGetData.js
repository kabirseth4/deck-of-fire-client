import { useAxios } from "./useAxios";
import { useEffect, useState } from "react";

export const useGetData = (param) => {
  const { axios, configureAxios } = useAxios();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const getData = async () => {
    try {
      const response = await axios.get(param);
      setData(response.data);
    } catch (error) {
      console.error(error);
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    configureAxios();
    getData();
  }, []);

  return { data, isLoading, error };
};
