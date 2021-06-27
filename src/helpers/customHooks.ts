import { useState, useEffect } from "react";

type UseMediaQuery = (query: string) => boolean

export const useMediaQuery: UseMediaQuery = (mediaQuery) => {
  const [isMatched, setIsMatched] = useState(
    window.matchMedia(mediaQuery).matches
  );
  useEffect(() => {
    const mediaQueryList = window.matchMedia(mediaQuery);
    const onChange = () => {
      setIsMatched(mediaQueryList.matches);
    };
    if (typeof mediaQueryList.addEventListener !== 'undefined') {
      mediaQueryList.addEventListener('change', onChange);
      return () => mediaQueryList.removeEventListener('change', onChange);
    } else {
      mediaQueryList.addListener(onChange);
      return () => mediaQueryList.removeListener(onChange);
    }
  }, [mediaQuery]);
  return isMatched;
};