import { useEffect, useState } from "react";

export const useDataApi = (initialUrl: string, initialData: any): any => {
  const [data, setData] = useState(initialData);
  const [url, setUrl] = useState(initialUrl);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const result = await fetch(url);
        const resultJSON = await result.json();
        setData(resultJSON.message);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };

    fetchData().then((r) => r);
  }, [url]);

  return [{ data, isLoading, isError }, setUrl];
};
