import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: '',
  search: '',
};

export const amFiltersSlice = createSlice({
  name: 'amFilters',
  initialState,
  reducers: {
    setStatus: (state, action) => {
      return {
        ...state,
        status: action.payload.status,
      };
    },
    setSearch: (state, action) => {
      return {
        ...state,
        search: action.payload.search,
      };
    },
  },
});

export const amFiltersActions = amFiltersSlice.actions;
export const amFiltersReducer = amFiltersSlice.reducer;
