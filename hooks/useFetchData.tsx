import { useState, useEffect } from "react";

type FetchDataProps<T> = {
  uri: string;
  initilaData: T | null;
};

export function useFetchData<T>({ uri, initilaData }: FetchDataProps<T>) {
  const [data, setData] = useState<T | null>(initilaData);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const refetch = async () => {
    try {
      setLoading(true);
      const res = await fetch(uri);
      const data: T = await res.json();
      setData(data);
      setError("");
    } catch (ex: unknown) {
      const error = ex instanceof Error ? ex.message : "Error fetching data";
      setData(initilaData);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refetch();
  }, [uri]);

  return { data, error, loading, refetch };
}
