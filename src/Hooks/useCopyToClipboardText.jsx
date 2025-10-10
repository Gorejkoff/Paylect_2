export default function useCopyToClipboardText(data) {
   return async () => {
      try {
         await navigator.clipboard.writeText(data);
      } catch (err) {
         console.error('Ошибка копирования: ', err);
      }
   }
};

