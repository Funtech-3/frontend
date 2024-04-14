import { createSlice } from '@reduxjs/toolkit';

type FiltersStateType = {
  city: string[];
  date_after: string;
  date_before: string;
  is_favorited: boolean;
  is_registrated: boolean;
  limit: number;
  offset: number;
  search: string;
  show_old: boolean;
  tags: string[];
};

const initialState: FiltersStateType = {
  city: [],
  date_after: '',
  date_before: '',
  is_favorited: false,
  is_registrated: false,
  limit: 3,
  offset: 0,
  search: '',
  show_old: false,
  tags: [],
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    reset: () => initialState,
    setCity: (state, action) => {
      state.city = action.payload;
    },
    setTags: (state, action) => {
      state.tags = action.payload;
    },
    setDateAfter: (state, action) => {
      state.date_after = action.payload;
    },
    setDateBefore: (state, action) => {
      state.date_before = action.payload;
    },
    setIsFavorited: (state, action) => {
      state.is_favorited = action.payload;
    },
    setIsRegistrated: (state, action) => {
      state.is_registrated = action.payload;
    },
    setLimit: (state, action) => {
      state.limit = action.payload;
    },
    setOffset: (state, action) => {
      state.offset = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setShowOld: (state, action) => {
      state.show_old = action.payload;
    },
  },
});

export const filtersActions = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
