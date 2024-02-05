import { useEffect, useRef } from 'react';

import { useDispatch } from 'react-redux';
import { updateCurrentFocusedCardId } from '../store/form/formSlice';

export const useFocusingCardRef = (id: number | null) => {
  const dispatch = useDispatch();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const detectClick = (event: MouseEvent) => {
      if (event.target instanceof Node && ref.current?.contains(event.target))
        dispatch(updateCurrentFocusedCardId({ id }));
    };

    window.addEventListener('mousedown', detectClick);

    return () => window.removeEventListener('mousedown', detectClick);
  }, []);

  return ref;
};
