import { RefObject, useEffect } from 'react';

export const useResizeTextareaHeight = (ref: RefObject<HTMLTextAreaElement>, value: string) => {
  useEffect(() => {
    const handleResizeHeight = () => {
      if (ref.current) {
        ref.current.style.height = 'auto'; //height 초기화
        ref.current.style.height = ref.current.scrollHeight + 'px';
      }
    };

    handleResizeHeight();
  }, [value, ref]);
};
