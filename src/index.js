import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/AppContainer";

import * as router from "./router/index";
import * as backend from "./actions/index";

// Init VK  Mini App
// bridge.send("VKWebAppInit");

const route = router.initialize();
backend.initialize();

ReactDOM.render(<App router={route} />, document.getElementById("root"));
if (process.env.NODE_ENV === "development") {
  import("./eruda").then(({ default: eruda }) => {}); //runtime download
}
