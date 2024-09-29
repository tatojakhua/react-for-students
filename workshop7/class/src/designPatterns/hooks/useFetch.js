import React, { useEffect, useState } from "react";

export const useFetch = (link) => {
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    setTimeout(() => {
      fetch(link)
        .then((res) => res.json())
        .then((data) => setInfo(data))
        .catch((err) => setError(err.message))
        .finally(setLoading(false));
    }, 1000);
  }, [link]);

  return [info, loading, error];
};
