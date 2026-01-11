import { useEffect, useState } from "react";

type UseFetchResult<T> = {
  loading: boolean;
  error: boolean;
  result: T | null;
};

export default function useFetch<T = any>(
  url: string,
  method: string = "GET",
  headers: RequestInit["headers"] = {}
): UseFetchResult<T> {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [result, setResult] = useState<T | null>(null);

  useEffect(() => {
    async function requestFetch() {
      if (!url) {
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(false);

        const response = await fetch(url, {
          method: method || "GET",
          headers: {
            "Content-Type": "application/json",
            ...(headers as Record<string, string>),
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setResult(data);
      } catch (err) {
        console.error("Fetch error:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    requestFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return {
    loading,
    error,
    result,
  };
}

