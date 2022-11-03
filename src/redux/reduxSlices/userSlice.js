import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

export const getUserData = createAsyncThunk("userdata/getUserData", async(params, {dispatch}) => {
   const {} = params;
   try {
      const { data } = await axios.get(`https://62bef7450bc9b1256164277e.mockapi.io/items?`);
      return data
   } catch (e) {
      alert(e.response.data.message)
   }
})

const initialState = {
   isLogin: false,
   isReg: false,
   userData: [],
};

const userDataSlice = createSlice({
   name: "userdata",
   initialState,

   reducers: {
      // setEmail: (state, action) => {
      //    state.email = action.payload;
      // },
   },
   extraReducers: {
   [getUserData.pending]: (state) => {
      state.userData = [];
      state.status = "Loading";
   },
   [getUserData.fulfilled]: (state, action) => {
      state.userData = action.payload;
      state.status = "Success";
      // const dataForLS = JSON.stringify(state.userData);
      // localStorage.setItem("userData", dataForLS);
   },
   [getUserData.userData]: (state) => {
      state.userData = [];
      state.status = "Error";
   },
   }
});

export const {  } = userDataSlice.actions;

export default userDataSlice.reducer;