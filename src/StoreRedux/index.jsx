import { configureStore } from '@reduxjs/toolkit';
import modalsSliceReducer from './modalsSlice';


export default configureStore({
   reducer: {
      modals: modalsSliceReducer,
   }
})



