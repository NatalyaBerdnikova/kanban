import React, { memo } from "react";
import "@vkontakte/vkui/dist/vkui.css";
import { RouterProvider } from "react-router5";
import { Provider } from "react-redux";

import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import App from "./App";

const AppContainer = ({ router, store }) => (
  <RouterProvider router={router}>
    <Provider store={store}>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </Provider>
  </RouterProvider>
);

export default memo(AppContainer);
