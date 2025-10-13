import { useState, useEffect } from 'react';

function useMediaQuery(query) {
   const [matches, setMatches] = useState(false);

   useEffect(() => {
      const media = window.matchMedia(query);

      // Обновляем состояние при изменении
      const listener = () => setMatches(media.matches);

      // Устанавливаем начальное значение
      setMatches(media.matches);

      // Слушаем изменения
      media.addEventListener('change', listener);

      // Очистка
      return () => media.removeEventListener('change', listener);
   }, [query]);

   return matches;
}

export default useMediaQuery;