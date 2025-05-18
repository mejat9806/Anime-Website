import { useState, useEffect } from 'react';

const useDebounce = ({ search, delay }: { search: string; delay: number }) => {
  const [debouncedValue, setDebouncedValue] = useState(search);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(search);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [search, delay]);

  return debouncedValue;
};

export default useDebounce;
