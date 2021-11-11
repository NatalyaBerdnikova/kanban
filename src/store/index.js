import { applyMiddleware, createStore } from "redux";
import { reducer } from "../reducers/reducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

export const getStore = () => {
  const middleware = (store) => (next) => (action) => {
    return next(action);
  };

  return createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk, middleware))
  );
};
