import { useState } from 'react';

export const useInput = () => {
  const [value, setValue] = useState('');
  const [isFocus, setIsFocus] = useState(false);

  const handleFocus = () => setIsFocus(true);

  const handleBlur = () => setIsFocus(false);

  return { value, setValue, isFocus, handleFocus, handleBlur };
};
