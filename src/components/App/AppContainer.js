import React from "react";
import "@vkontakte/vkui/dist/vkui.css";
import { RouterProvider } from "react-router5";

import Context from "./context";
import { useAppState } from "./hooks";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import App from "./App";

const AppContainer = ({ router }) => {
  const state = useAppState();

  return (
    <RouterProvider router={router}>
      <Context.Provider value={state}>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </Context.Provider>
    </RouterProvider>
  );
};

export default AppContainer;
