import {render, screen, fireEvent} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import {Provider} from "react-redux";
import {configureStore} from '@reduxjs/toolkit'
import {BrowserRouter} from 'react-router-dom'
import userEvent from '@testing-library/user-event'

import App from "../../App"
import Menu from "../../components/Menu"
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


describe("test Header", () => {
   it("menu to login", () => {
      renderRedux(<App />);
      expect(screen.queryByTestId("menu login")).toBeNull();
      fireEvent.click(screen.queryByTestId("button menu"));
      expect(screen.queryByTestId("menu login")).toBeInTheDocument();
      fireEvent.click(screen.queryByTestId("menu login"), {bubbles: false});
      expect(screen.queryByTestId("menu login")).toHaveAttribute("href", "/login");
      });
   it("menu to registration", () => {
      renderRedux(<App />);
      expect(screen.queryByTestId("menu registration")).toBeNull();
      fireEvent.click(screen.queryByTestId("button menu"));
      expect(screen.queryByTestId("menu registration")).toBeInTheDocument();
      fireEvent.click(screen.queryByTestId("menu registration"), {bubbles: false});
      expect(screen.queryByTestId("menu registration")).toHaveAttribute("href", "/registration");
      });
   it("menu to contacts", () => {
      renderRedux(<App />);
      expect(screen.queryByTestId("menu contacts")).toBeNull();
      fireEvent.click(screen.queryByTestId("button menu"));
      expect(screen.queryByTestId("menu contacts")).toBeInTheDocument();
      fireEvent.click(screen.queryByTestId("menu contacts"), {bubbles: false});
      expect(screen.queryByTestId("menu contacts")).toHaveAttribute("href", "/contacts");
      });
   it("menu to support", () => {
      renderRedux(<App />);
      expect(screen.queryByTestId("menu support")).toBeNull();
      fireEvent.click(screen.queryByTestId("button menu"));
      expect(screen.queryByTestId("menu support")).toBeInTheDocument();
      fireEvent.click(screen.queryByTestId("menu support"), {bubbles: false});
      expect(screen.queryByTestId("menu support")).toHaveAttribute("href", "/support");
      });
});
