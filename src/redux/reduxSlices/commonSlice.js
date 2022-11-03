import { createSlice } from '@reduxjs/toolkit'


const initialState = {
   menuBurger: 0,
   isOpenMenu: false,
   isOpenSearch: false,
   dataSupport: {},
};

const commonDataSlice = createSlice({
   name: "commondata",
   initialState,

   reducers: {
      setOpenMenu: (state, action) => {
         state.isOpenMenu = action.payload;
      },
   },
   extraReducers: {
   }
});

export const { setOpenMenu } = commonDataSlice.actions;

export default commonDataSlice.reducer;