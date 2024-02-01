import { useEffect, useRef, useState } from 'react';

export const useFormCardFocus = (initialFocus: boolean) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isFocus, setIsFocus] = useState(initialFocus);

  useEffect(() => {
    const detectClick = (event: MouseEvent) => {
      if (event.target instanceof Node && ref.current?.contains(event.target)) setIsFocus(true);
      else setIsFocus(false);
    };

    window.addEventListener('mousedown', detectClick);

    return () => window.removeEventListener('mousedown', detectClick);
  }, []);

  return { ref, isFocus };
};
