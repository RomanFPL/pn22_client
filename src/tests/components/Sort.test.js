import {render, screen, fireEvent} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import {Provider} from "react-redux";
import {configureStore} from '@reduxjs/toolkit'
import {BrowserRouter} from 'react-router-dom'

import Sort from "../../components/Sort"
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

describe("test sort", () => {
   it("sort is open", async () => {
      renderRedux(<Sort />);
      expect(screen.queryByTestId("sort list")).toBeNull();
      fireEvent.click(screen.queryByTestId("button sort"));
      expect(screen.queryByTestId("sort list")).toBeInTheDocument();
      fireEvent.click(screen.queryByTestId("button sort"));
      expect(screen.queryByTestId("sort list")).toBeNull();
      });
});
