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
      // setEmail: (state, action) => {
      //    state.email = action.payload;
      // },
   },
   extraReducers: {
   }
});

export const {  } = commonDataSlice.actions;

export default commonDataSlice.reducer;