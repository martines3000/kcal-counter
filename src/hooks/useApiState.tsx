import { useState } from 'react';

interface IApiState {
  loading: boolean;
  error?: string;
  setLoading: (value: boolean) => void;
  setError: (error: string) => void;
}

export function useApiState(): IApiState {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>('');

  return { loading, error, setLoading, setError };
}
