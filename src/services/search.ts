import {Filter} from "@/shared/types";
import {createSelector, createSlice, PayloadAction} from "@reduxjs/toolkit";

type SearchState = {

  results: string[];
  filters: Filter

}

const initialState: SearchState = {

  results: [],
  filters: {
    dateStart: null,
    dateEnd: null,
    people: 0,
  }

}


const searchSlice = createSlice({
  name: "search",
  initialState,
  selectors: {
    filters: (state) => state.filters,
    isFiltersValid: (state) => !!state.filters.people && !!state.filters.dateStart && !!state.filters.dateEnd,
    results: (state) => state.results
  },
  reducers: {
    setDateStart: (state, action: PayloadAction<string | null>) => {
      if (state.filters) {
        state.filters.dateStart = action.payload;
      }
    },
    setDateEnd: (state, action: PayloadAction<string | null>) => {
      if (state.filters) {
        state.filters.dateEnd = action.payload;
      }
    },
    setPeople: (state, action: PayloadAction<number>) => {
      if (state.filters) {
        state.filters.people = action.payload;
      }
    }
  }
})

export const {reducer: searchReducer, actions: searchActions, selectors: searchSelectors} = searchSlice;
