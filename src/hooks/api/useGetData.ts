import { useEffect, useState } from "react";
import { useAxios } from "hooks";

type Response<T> =
  | { data: null; isLoading: true; error: false }
  | { data: null; isLoading: false; error: true }
  | { data: T; isLoading: false; error: false };

export const useGetData = <T>(
  url: string,
  validate: (data: any) => data is T
): Response<T> => {
  const axios = useAxios();
  const [response, setResponse] = useState<Response<T>>({
    data: null,
    isLoading: true,
    error: false,
  });

  const getData = async () => {
    try {
      const { data } = await axios.get(url);
      if (!validate(data))
        throw new Error("Data returned in incorrect format.");

      setResponse({ data, isLoading: false, error: false });
    } catch (error) {
      console.error(error);
      setResponse({ data: null, isLoading: false, error: true });
    }
  };

  useEffect(() => {
    getData();
  }, [url]);

  return response;
};
