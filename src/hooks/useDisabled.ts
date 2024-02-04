import { useLocation } from 'react-router-dom';

export const useDisabled = () => {
  const { pathname } = useLocation();

  return pathname.includes('reply');
};
