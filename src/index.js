import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import jwtDecode from "jwt-decode";

// redux
import { Provider } from "react-redux";
import store from "./redux/store";
import { logoutUser } from "./redux/actions/userActions";
import { SET_AUTHENTICATED } from "./redux/types";

const token = localStorage.AuthToken;

if (token) {
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    logoutUser();
    store.dispatch({ type: SET_AUTHENTICATED, payload: null });
  } else {
    store.dispatch({ type: SET_AUTHENTICATED, payload: decodedToken._id });
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
