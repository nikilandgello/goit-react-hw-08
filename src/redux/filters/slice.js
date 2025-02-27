import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  filterBy: 'name',
};

const slice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeFilter: (state, actions) => {
      state.name = actions.payload;
    },
    changeFilterBy: (state, actions) => {
      state.filterBy = actions.payload;
    },
  },
});

export const filterReducer = slice.reducer;
export const { changeFilter, changeFilterBy } = slice.actions;
