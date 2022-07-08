import React, { useEffect, useState } from "react";

const useFetch = (url, requestOptions) => {
  const [response, setResponse] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url, requestOptions);
        const json = await res.json();

        setResponse(json);
        setIsLoading(false);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, [url]);

  return { response, isLoading, error };
};

export default useFetch;
