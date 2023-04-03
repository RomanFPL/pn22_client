import {createSlice} from '@reduxjs/toolkit'


const initialState = {
   welcomModalIsOpen: true,
};

const modalsDataSlice = createSlice({
   name: "modalsData",
   initialState,

   reducers: {
      setWelcomModalIsOpen: (state, action) => {
         state.welcomModalIsOpen = action.payload;
         const welcomModalIsOpenLS = JSON.stringify(state.welcomModalIsOpen);
         localStorage.setItem("welcomModalIsOpenLS", welcomModalIsOpenLS);
      },
   },
   extraReducers: {
   }
});

export const { setWelcomModalIsOpen } = modalsDataSlice.actions;

export default modalsDataSlice.reducer;