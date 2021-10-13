import React from "react";
import Counter from "./Counter";
import "@testing-library/react/dont-cleanup-after-each";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from "../features/counter/counterSlice";
import { Provider } from "react-redux";

const N = 5;

const inititalState = {
  counter: {
    count: N
  }
};

const store = configureStore({reducer: {counter: counterReducer}, preloadedState: inititalState});

const ProviderWrapper = ({ children }) => <Provider store={store}>{children}</Provider>;

describe("Counter should display correct info", () => {
  afterAll(() => {
    cleanup();
  });
  render(<Counter/>, {wrapper: ProviderWrapper});

  it('Should display proper number of clicks', async () => {
    const initialCheck = new RegExp(`clicked ${N} times`, "i");
    const counterText = await screen.findByText(initialCheck);
    console.log(counterText);
    expect(counterText).toBeTruthy();
  });

  it("Should increment number of clicks on click", async () => {
    fireEvent.click(screen.getByRole('button', { name: /clicked/i }));
    const clickedCheck = new RegExp(`clicked ${N+1} times`, "i");
    const counterClickedText = await screen.findByText(clickedCheck);
    expect(counterClickedText).toBeTruthy();
  });
});