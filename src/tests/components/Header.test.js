import {render, screen, fireEvent} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import {Provider} from "react-redux";
import {configureStore} from '@reduxjs/toolkit'
import {BrowserRouter} from 'react-router-dom'


import Header from "../../components/Header"
import App from "../../App"
import FormLogin from "../../components/FormLogin"
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

const data = localStorage.getItem("authStatus");
const statusAuth = data ? JSON.parse(data) : false;

describe("test Header", () => {
   it("menu is open", () => {
      renderRedux(<Header />);
      expect(screen.queryByTestId("menu list")).toBeNull();
      fireEvent.click(screen.queryByTestId("button menu"));
      expect(screen.queryByTestId("menu list")).toBeInTheDocument();
      fireEvent.click(screen.queryByTestId("button menu"));
      expect(screen.queryByTestId("menu list")).toBeNull();
      });
   it("home to login", () => {
      renderRedux(<App />);
      expect(screen.queryByTestId("auth login")).toBeInTheDocument();
      if (statusAuth) {
         fireEvent.click(screen.queryByTestId("auth login"));
         expect(screen.queryByTestId("page login")).toBeInTheDocument();}
      });
   it("home to login", () => {
      renderRedux(<App />);
      expect(screen.queryByTestId("auth login")).toBeInTheDocument();
      if (!statusAuth) {
         fireEvent.click(screen.queryByTestId("auth login"));
         expect(screen.queryByTestId("page registration")).toBeInTheDocument();}
      });
});
