import { render, screen} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import { Provider } from "react-redux";
import { configureStore } from '@reduxjs/toolkit'
import {BrowserRouter} from 'react-router-dom'

import Article from "../../components/Article"
import categoryData from "../../redux/reduxSlices/categorySlice"
import userdata from "../../redux/reduxSlices/userSlice"
import commondata from "../../redux/reduxSlices/commonSlice"




const renderRedux = (
   component,
   {initialState, store = configureStore( {reducer: {
      categoryData,
      userdata,
      commondata,
   }}, 
   initialState)} = {}
) => {
   return {
      ...render(<Provider store={store}>
                  <BrowserRouter>{component}</BrowserRouter>
               </Provider>),
      store,
   };
};



test("get article to articlePage", async () => {
   renderRedux(<Article />);
   const renderArticle = await screen.findByTestId("article")
   // expect(renderArticle).toBeInTheDocument();
   });
   