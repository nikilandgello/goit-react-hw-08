import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './contacts/slice';
import { filterReducer } from './filters/slice';
import { modalReducer } from './modal/slice';
import { additionalInfoReducer } from './additionalInfo/slice';

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filter: filterReducer,
    modal: modalReducer,
    additionalInfo: additionalInfoReducer,
  },
});
