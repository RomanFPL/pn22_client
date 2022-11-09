import { createSlice } from '@reduxjs/toolkit'


const initialState = {
   menuBurger: 0,
   isOpenMenu: false,
   isOpenSearch: false,
   isOpenSort: false,
   isSearchOpen: false,
   dataSupport: {},
};

const commonDataSlice = createSlice({
   name: "commondata",
   initialState,

   reducers: {
      setOpenMenu: (state, action) => {
         state.isOpenMenu = action.payload;
      },
      setOpenSort: (state, action) => {
         state.isOpenSort = action.payload;
      },
      setSearchOpen: (state, action) => {
         state.isSearchOpen = action.payload;
      },
   },
   extraReducers: {
   }
});

export const { setOpenMenu, setOpenSort, setSearchOpen } = commonDataSlice.actions;

export default commonDataSlice.reducer;