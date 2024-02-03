import { useState } from 'react';

export const useInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);
  const [isFocus, setIsFocus] = useState(false);

  const handleFocus = () => setIsFocus(true);

  const handleBlur = () => setIsFocus(false);

  return { value, isFocus, setValue, handleFocus, handleBlur };
};
