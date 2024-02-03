import { useState } from 'react';

export const useInput = (initialValue: string, handleInputChange?: (value: string) => void) => {
  const [value, setValue] = useState(initialValue);
  const [isFocus, setIsFocus] = useState(false);

  const handleFocus = () => setIsFocus(true);

  const handleBlur = () => {
    if (handleInputChange) handleInputChange(value);
    setIsFocus(false);
  };

  return { value, isFocus, setValue, handleFocus, handleBlur };
};
