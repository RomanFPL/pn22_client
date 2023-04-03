import { configureStore } from '@reduxjs/toolkit'
import categoryData from './reduxSlices/categorySlice'
import userdata from './reduxSlices/userSlice'
import commondata from './reduxSlices/commonSlice'
import articleData from './reduxSlices/articleSlice'
import modalsData from './reduxSlices/modalsSlice'



export const store = configureStore({
   reducer: {
   categoryData,
   userdata,
   commondata,
   articleData,
   modalsData,
   },
})