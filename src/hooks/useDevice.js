import { useMediaQuery } from 'react-responsive';

export const useDevice = () => {
  const isMobileDevice = useMediaQuery({ query: '(max-width: 767px)' });
  return { isMobileDevice };
};
