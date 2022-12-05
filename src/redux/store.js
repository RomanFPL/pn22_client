import { configureStore } from '@reduxjs/toolkit'
import categoryData from './reduxSlices/categorySlice'
import userdata from './reduxSlices/userSlice'
import commondata from './reduxSlices/commonSlice'


export const store = configureStore({
   reducer: {
   categoryData,
   userdata,
   commondata,
   },
})