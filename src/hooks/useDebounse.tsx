import React, { useState, useEffect } from 'react';

interface IUseDebounceProps {
  value: string,
  delay: number
}

export default function useDebounce({ value, delay }: IUseDebounceProps) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(
    () => {
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

      return () => {
        clearTimeout(handler);
      };
    },
    [value]
  );

  return debouncedValue;
}
