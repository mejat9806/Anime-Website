import { useState, useEffect } from 'react';

const useDebounce = ({
  search,
  page,
  delay,
}: {
  search: string;
  page: string;
  delay: number;
}) => {
  const [debouncedValue, setDebouncedValue] = useState({ page, search });

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue({ page, search });
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [{ page, search }, delay]);

  return debouncedValue;
};

export default useDebounce;
