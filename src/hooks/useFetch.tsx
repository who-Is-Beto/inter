import { useState } from 'react';

type UseFetchProps = {
  url: string;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
};

type CommonFetch = {
  input: Record<string, unknown>;
  fetchOptions?: RequestInit;
};

export function useFetch<T>({ method = 'GET', url }: UseFetchProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | unknown>(null);

  const fetchData = async ({
    input,
    fetchOptions,
  }: CommonFetch): Promise<void> => {
    setIsLoading(true);
    try {
      const response = await fetch(url, {
        method,
        ...DEFAULT_FETCH_OPTIONS,
        ...fetchOptions,
        body: JSON.stringify(input),
      });
      const result = await response.json();
      setData(result);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { data, error, isLoading, fetchData };
}
