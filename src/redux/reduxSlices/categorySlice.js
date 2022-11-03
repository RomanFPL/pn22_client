import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

export const getArticles = createAsyncThunk("articles/getArticlesStatus", async(params, {dispatch}) => {
   const {} = params;
   try {
      const { data } = await axios.get(`https://62bef7450bc9b1256164277e.mockapi.io/items?`);
      return data
   } catch (e) {
      alert(e.response.data.message)
   }
})

const initialState = {
   articles: [],
   category: 0,
   sort: 0,
   searchQuery: "",
   like: false,
   favorite: false,
   view: 0,
};

const dataCategorySlice = createSlice({
   name: "category",
   initialState,

   reducers: {
      // setEmail: (state, action) => {
      //    state.email = action.payload;
      // },
   },
   extraReducers: {
   [getArticles.pending]: (state) => {
      state.articles = [];
      state.status = "Loading";
   },
   [getArticles.fulfilled]: (state, action) => {
      state.articles = action.payload;
      state.status = "Success";
      // const dataForLS = JSON.stringify(state.articles);
      // localStorage.setItem("articles", dataForLS);
   },
   [getArticles.articles]: (state) => {
      state.articles = [];
      state.status = "Error";
   },
   }
});

export const {  } = dataCategorySlice.actions;

export default dataCategorySlice.reducer;