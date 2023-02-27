import { configureStore } from "@reduxjs/toolkit";
import boardSlice from "../state/boardSlice";
import React from "react";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";

const renderWithProviders = (ui, intialState = {}) => {
  const store = configureStore({
    reducer: {
      board: boardSlice,
    },
    preloadedState: intialState,
  });

  const Wrapper = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
  };

  return { store, ...render(ui, { wrapper: Wrapper }) };
};

export default renderWithProviders;
