import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import jwtDecode from "jwt-decode";

// redux
import { Provider } from "react-redux";
import store from "./redux/store";
import { logoutUser } from "./redux/actions/userActions";
import { SET_AUTHENTICATED, SET_USER } from "./redux/types";

const token = localStorage.AuthToken;

if (token) {
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    logoutUser();
    store.dispatch({ type: SET_AUTHENTICATED, payload: null });
    store.dispatch({ type: SET_USER, payload: null });
  } else {
    store.dispatch({ type: SET_AUTHENTICATED, payload: decodedToken._id });

    fetch(`${process.env.API_ROUTE}/api/user`, {
      method: "POST",
      body: JSON.stringify({ _id: decodedToken._id }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(res => res.json())
      .then(data => {
        store.dispatch({ type: SET_USER, payload: data.data });
      })
      .catch(err => {
        console.log(err);
      });
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
