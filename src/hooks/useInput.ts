import { useEffect, useState } from 'react';

import useDebounce from './useDebounce';

export const useInput = (initialValue: string, handleInputChange?: (value: string) => void) => {
  const [value, setValue] = useState(initialValue);
  const debouncedValue = useDebounce<string>(value, 500);
  const [isFocus, setIsFocus] = useState(false);

  const handleFocus = () => setIsFocus(true);

  const handleBlur = () => setIsFocus(false);

  useEffect(() => {
    if (handleInputChange) handleInputChange(debouncedValue);
  }, [handleInputChange, debouncedValue]);

  return { value, isFocus, setValue, handleFocus, handleBlur };
};
