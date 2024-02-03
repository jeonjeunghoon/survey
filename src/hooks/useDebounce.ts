import { useRef } from 'react';

const useDebounce = <T>(callback: (value?: T) => void, term: number) => {
  const timer = useRef<ReturnType<typeof setTimeout>>();

  const dispatchDebounce = () => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    const newTimer = setTimeout(() => {
      callback();
    }, term);
    timer.current = newTimer;
  };

  return dispatchDebounce;
};

export default useDebounce;
