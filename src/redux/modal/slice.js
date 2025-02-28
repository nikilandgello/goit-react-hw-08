import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isModalOpen: false,
  selectedContact: null,
  isModalOpenContactDelete: false,
  selectedContactDelete: null,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isModalOpen = true;
      state.selectedContact = action.payload;
    },
    closeModal: state => {
      state.isModalOpen = false;
      state.selectedContact = null;
    },
    openModalContactDelete: (state, action) => {
      state.isModalOpenContactDelete = true;
      state.selectedContactDelete = action.payload;
    },
    closeModalContactDelete: state => {
      state.isModalOpenContactDelete = false;
      state.selectedContactDelete = null;
    },
  },
});

export const modalReducer = modalSlice.reducer;
export const {
  openModal,
  closeModal,
  openModalContactDelete,
  closeModalContactDelete,
} = modalSlice.actions;
