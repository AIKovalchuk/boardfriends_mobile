import React from "react";

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

const useFetch = () => {
  const [isLoading, setLoading] = React.useState<boolean>();
  const [error, setError] = React.useState<string | null>(null);

  const fetch = React.useCallback(
    async (
      url: string,
      method: HttpMethod = "GET",
      body = null,
      header = {},
    ) => {
      setLoading(true);
      setError(null);
      try {
        const response = {}; // fetch(url)
        return response;
      } catch (error) {
        setError("Ooops");
      } finally {
        setLoading(false);
      }
    },
    [],
  );

  const clearError = () => setError(null);

  return [fetch, isLoading, error, clearError];
};

export default useFetch;
