import {useEffect, useState} from 'react';

export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    setMatches(mediaQuery.matches);
    // Установка начального значения

    const handleChange = (event: any) => {
      setMatches(event.matches)
    };

    // Современный API
    mediaQuery.addEventListener('change', handleChange);
    // Для совместимости: mediaQuery.addListener(handleChange);

  }, [query]);

  return { matches };
}


