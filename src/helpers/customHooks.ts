import { useState, useEffect } from "react";
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from '../store'

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

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