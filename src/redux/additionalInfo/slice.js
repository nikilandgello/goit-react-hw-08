import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpenForm: false,
};

const slice = createSlice({
  name: 'additionalInfo',
  initialState,
  reducers: {
    openAdditionalInfoForm: state => {
      state.isOpenForm = !state.isOpenForm;
    },
    closeAdditionalInfoForm: state => {
      state.isOpenForm = false;
    },
  },
});

export const additionalInfoReducer = slice.reducer;
export const { openAdditionalInfoForm, closeAdditionalInfoForm } =
  slice.actions;
