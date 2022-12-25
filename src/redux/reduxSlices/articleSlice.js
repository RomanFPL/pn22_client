import {createSlice} from '@reduxjs/toolkit'


const initialState = {
   islike: false,
   isfavorite: false,
   countLikes: 0,
   countFavorites: 0,
   countViews: 0,
};

const articleDataSlice = createSlice({
   name: "articleData",
   initialState,

   reducers: {
      setIsLike: (state, action) => {
         state.islike = action.payload;
      },
      setIsFavorite: (state, action) => {
         state.isfavorite = action.payload;
      },
   },
   extraReducers: {
   }
});

export const { setIsFavorite, setIsLike } = articleDataSlice.actions;

export default articleDataSlice.reducer;