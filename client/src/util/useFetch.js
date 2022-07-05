import React, { useEffect, useState } from "react";

const useFetch = (url, requestOptions) => {
  const [response, setResponse] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log("useFectch");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url, requestOptions);
        const json = await res.json();
        console.log("json", json);
        setResponse(json);
        setIsLoading(false);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);

  return { response, isLoading, error };
};

export default useFetch;
