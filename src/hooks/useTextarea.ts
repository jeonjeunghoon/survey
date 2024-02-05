import { useState } from 'react';

export const useTextarea = (
  initialValue: string,
  handleTextareaChange?: (value: string) => void,
) => {
  const [value, setValue] = useState(initialValue);
  const [isFocus, setIsFocus] = useState(false);

  const handleFocus = () => setIsFocus(true);

  const handleBlur = () => {
    setIsFocus(false);
    if (handleTextareaChange) handleTextareaChange(value);
  };

  return { value, isFocus, setValue, handleFocus, handleBlur };
};
