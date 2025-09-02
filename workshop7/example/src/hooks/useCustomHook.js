import React, { useEffect, useState } from "react";

const useCustomHook = (url) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(url)
            .then((data) => {
                if (data.ok) {
                    return data.json();
                }
                throw new Error(`Oops, ${url} error`);
            })
            .then((d) => setData(d))
            .catch((err) => setError(err.message))
            .finally(() => setIsLoading(false));
    }, [url]);

    return [data, error, isLoading];
};

export default useCustomHook;
