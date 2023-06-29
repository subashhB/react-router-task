import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Something went wrong with the network response.");
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error);
      }
    };
    fetchProduct();
  },[url]);

  return { data, error };
};

export default useFetch;
