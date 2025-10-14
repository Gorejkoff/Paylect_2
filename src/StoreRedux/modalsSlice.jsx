import { createSlice } from '@reduxjs/toolkit';



const modalsSlice = createSlice({
   name: 'modals',
   initialState: {
      contacts: { isOpen: false, data: null, type: 'contacts' },
      terms: { isOpen: false, data: null, type: 'terms' },
      sent: { isOpen: false, data: null, type: 'sent' },
      privacy: { isOpen: false, data: null, type: 'privacy' },
      blockchain: { isOpen: false, data: null, type: 'blockchain' },
      standard: { isOpen: false, data: null, type: 'standard' },
      QRCode: { isOpen: false, data: null, type: 'QRCode' },
      exchange: { isOpen: false, data: null, type: 'exchange' },
   },
   reducers: {
      openModal: (state, action) => {
         if (action.payload.type) {
            state[action.payload.type].isOpen = true;
         }
      },
      closeModal: (state, action) => {
         if (action.payload.type) {
            state[action.payload.type].isOpen = false;
         }
      },
   }


})


export const { openModal, closeModal } = modalsSlice.actions;
export default modalsSlice.reducer;