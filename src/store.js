import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import { routerMiddleware } from "react-router-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";

export default function(history) {
  const historyMiddleware = routerMiddleware(history);
  const middleware = composeWithDevTools(applyMiddleware(promise(), thunk, historyMiddleware));
  return createStore(rootReducer, middleware);
}
