import {render, screen} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import {Provider} from "react-redux";
import {configureStore} from '@reduxjs/toolkit'
import {BrowserRouter} from 'react-router-dom'

import Category from "../../home/category/Category"
import categoryData from "../../../redux/reduxSlices/categorySlice"
import userdata from "../../../redux/reduxSlices/userSlice"
import commondata from "../../../redux/reduxSlices/commonSlice"

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

describe("test category", () => {
   it("chack name category all", async () => {
      renderRedux(<Category />);
      const renderCategory = await screen.findByText(/all/i)
      expect(renderCategory).toBeInTheDocument();
      });
   it("chack name category work", async () => {
      renderRedux(<Category />);
      const renderCategory = await screen.findByText(/work/i)
      expect(renderCategory).toBeInTheDocument();
      });
   it("chack name category life", async () => {
      renderRedux(<Category />);
      const renderCategory = await screen.findByText(/life/i)
      expect(renderCategory).toBeInTheDocument();
      });
   it("chack name category relations", async () => {
      renderRedux(<Category />);
      const renderCategory = await screen.findByText(/relations/i)
      expect(renderCategory).toBeInTheDocument();
      });
});
