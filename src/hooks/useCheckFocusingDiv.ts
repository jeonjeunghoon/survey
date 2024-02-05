import { useEffect, useRef, useState } from 'react';

export const useCheckFocusingDiv = (initialFocus: boolean) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocus, setIsFocus] = useState(initialFocus);

  useEffect(() => {
    const detectClick = (event: MouseEvent) => {
      if (event.target instanceof Node && divRef.current?.contains(event.target)) setIsFocus(true);
      else setIsFocus(false);
    };

    window.addEventListener('mousedown', detectClick);

    return () => window.removeEventListener('mousedown', detectClick);
  }, []);

  return { divRef, isFocus };
};
