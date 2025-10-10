import React from 'react';
import useCopyToClipboardText from '../../../Hooks/useCopyToClipboardText';
import { Button } from '../Style';

export default function ButtonCopy({ text = 'copy error' }) {

   const copyToClipboardText = useCopyToClipboardText(text);

   return (
      <Button
         type='button'
         aria-label='copy'
         onClick={copyToClipboardText}
      >
         <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="25" cy="25" r="25" fill="none" />
            <path d="M20.1289 21.0133V37.638H36.8964V21.0133H20.1289ZM34.5172 35.2805H22.5081V23.3709H34.5172V35.2805Z" fill="#595959" />
            <path d="M14.4164 27.5648V15.6567H26.4878V18.9697H28.8358V13.2976H12.0684V29.9239H20.0908L17.8509 27.5648H14.4164Z" fill="#595959" />
         </svg>
      </Button>
   );
};