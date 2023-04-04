import {render, screen, fireEvent} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import {Provider} from "react-redux";
import {configureStore} from '@reduxjs/toolkit'
import {BrowserRouter} from 'react-router-dom'
import userEvent from '@testing-library/user-event'

import Contacts from "../contacts/Contacts"
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

describe("test social link", () => {
   it("click to facebook", () => {
      renderRedux(<Contacts />);
      expect(screen.queryByTestId("page contacts")).toBeInTheDocument();
      userEvent.click(screen.queryByTestId("facebook link"));
      expect(screen.queryByTestId("facebook link")).toHaveAttribute("href", "https://facebook.com/igor.krotov89");
      expect(screen.queryByTestId("facebook link")).toHaveAttribute("target", "_blank");
      });
   it("click to telegram", () => {
      renderRedux(<Contacts />);
      expect(screen.queryByTestId("page contacts")).toBeInTheDocument();
      userEvent.click(screen.queryByTestId("telegram link"));
      expect(screen.queryByTestId("telegram link")).toHaveAttribute("href", "https://t.me/@kamrad911");
      expect(screen.queryByTestId("telegram link")).toHaveAttribute("target", "_blank");
      });
   it("click to linkedin", () => {
      renderRedux(<Contacts />);
      expect(screen.queryByTestId("page contacts")).toBeInTheDocument();
      userEvent.click(screen.queryByTestId("linkedin link"));
      expect(screen.queryByTestId("linkedin link")).toHaveAttribute("href", "https://www.linkedin.com/in/igor-krotov-76b02a144/");
      expect(screen.queryByTestId("linkedin link")).toHaveAttribute("target", "_blank");
      });
});
