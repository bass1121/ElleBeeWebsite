import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";
import reducers from "./reducers/index";

const store = createStore(
  reducers,
  {},
  applyMiddleware(reduxThunk) //Production

  //Development
  // compose(
  //   applyMiddleware(reduxThunk)
  //   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  // )
);

export default store;
