import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/AppContainer";
import { createStore } from "redux";

import * as router from "./router/index";
import * as backend from "./actions/index";
import { reducer } from "./reducers/reducer";

// Init VK  Mini App
// bridge.send("VKWebAppInit");

const route = router.initialize();
backend.initialize();

const store = createStore(reducer);

window.store = store;

ReactDOM.render(
  <App router={route} store={store} />,
  document.getElementById("root")
);
if (process.env.NODE_ENV === "development") {
  import("./eruda").then(({ default: eruda }) => {}); //runtime download
}
