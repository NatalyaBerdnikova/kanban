import React from "react";
import ReactDOM from "react-dom";
import App from "./app/components/App/AppContainer";

import * as router from "./router/index";
import * as backend from "./api/index";
import { getStore } from "./app/store";

// Init VK  Mini App
// bridge.send("VKWebAppInit");

if (process.env.NODE_ENV === "development") {
  const whyDidYouRender = require("@welldone-software/why-did-you-render");
  whyDidYouRender(React, {
    trackAllPureComponents: true,
    trackExtraHooks: [[require("react-redux/lib"), "useSelector"]],
  });
}

const route = router.initialize();
backend.initialize();

const store = getStore();

window.store = store;

ReactDOM.render(
  <App router={route} store={store} />,
  document.getElementById("root")
);
if (process.env.NODE_ENV === "development") {
  import("./eruda").then(({ default: eruda }) => {}); //runtime download
}
