import { useEffect, useState } from "react";
import { useAxios } from "hooks";

export const useGetData = <T>(
  url: string
): { data: T | null; isLoading: boolean; error: boolean } => {
  const axios = useAxios();
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const getData = async () => {
    try {
      const response = await axios.get(url);
      response.data ? setData(response.data as T) : setError(true);
    } catch (error) {
      console.error(error);
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { data, isLoading, error };
};
