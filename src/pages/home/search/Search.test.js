import {render, screen, fireEvent} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import {Provider} from "react-redux";
import {configureStore} from '@reduxjs/toolkit'
import {BrowserRouter} from 'react-router-dom'

import Search from "../../home/search/Search"
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
   it("search is open", () => {
      renderRedux(<Search />);
      expect(screen.queryByTestId("search area")).toBeNull();
      fireEvent.click(screen.queryByTestId("search button"));
      expect(screen.queryByTestId("search area")).toBeInTheDocument();
      fireEvent.click(screen.queryByTestId("search button"));
      expect(screen.queryByTestId("search area")).toBeNull();
      });
   it("search text change", () => {
      renderRedux(<Search />);
      expect(screen.queryByTestId("search area input")).toBeNull();
      fireEvent.click(screen.queryByTestId("search button"));
      expect(screen.queryByTestId("search area input")).toBeInTheDocument();
      fireEvent.change(screen.queryByTestId("search area input"), {target: {value: "test"}});
      expect(screen.queryByTestId("search area input")).toHaveAttribute("value", "test");
      });
});
