import {
  SET_ERROR,
  SET_USER,
  CLEAR_ERROR,
  CLEAR_USER,
  SET_AUTHENTICATED,
} from "../types";

export const clearError = () => dispatch => {
  dispatch({ type: CLEAR_ERROR });
};

export const updateUser = newUserData => dispatch => {
  dispatch({ type: SET_USER, payload: newUserData });
};

export const logoutUser = () => dispatch => {
  dispatch({ type: CLEAR_USER });

  localStorage.removeItem("AuthToken");
};

export const loginUser = credentials => dispatch => {
  fetch(`${process.env.REACT_APP_API_ROUTE}/api/users`, {
    method: "POST",
    body: JSON.stringify(credentials),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(async res => {
      if (!res.ok) {
        // check if error exists
        const result = await res.json(); // gain access to error message

        throw new Error(result.message);
      }

      return res.json();
    })
    .then(data => {
      dispatch({ type: SET_USER, payload: data.user });
      dispatch({ type: SET_AUTHENTICATED, payload: data.user._id });

      setAuthHeader(data.token);
    })
    .catch(error => {
      dispatch({ type: SET_ERROR, payload: error.message });
    });
};

export const signupUser = credentials => dispatch => {
  if (credentials.password !== credentials.confirmPassword) {
    dispatch({ type: SET_ERROR, payload: "Passwords must match" });
    return;
  }

  fetch(`${process.env.REACT_APP_API_ROUTE}/api/users`, {
    method: "POST",
    body: JSON.stringify(credentials),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(async res => {
      if (!res.ok) {
        // check if error exists
        const result = await res.json(); // gain access to error message

        throw new Error(result.message);
      }

      return res.json();
    })
    .then(data => {
      dispatch({ type: SET_USER, payload: data.savedUser });
      dispatch({ type: SET_AUTHENTICATED, payload: data.savedUser._id });

      setAuthHeader(data.token);
    })
    .catch(error => {
      dispatch({ type: SET_ERROR, payload: error.message });
    });
};

const setAuthHeader = token => {
  const AuthToken = `Bearer ${token}`;
  localStorage.setItem("AuthToken", AuthToken);
};
