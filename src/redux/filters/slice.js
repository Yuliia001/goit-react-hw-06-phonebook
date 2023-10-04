import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    filterContact: {
      reducer(state, action) {
        return action.payload;
      },
    },
  },
});

export const { filterContact } = filterSlice.actions;
export const filterReducer = filterContact.reducer;
export const getFilter = state => state.filter;