import {
  SET_USER,
  CLEAR_USER,
  SET_AUTHENTICATED,
  SET_ERROR,
  CLEAR_ERROR,
} from "../types";

const initialState = {
  user: null,
  authenticated: null,
  error: null,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case CLEAR_USER:
      return {
        ...state,
        user: null,
        authenticated: null,
      };
    case SET_AUTHENTICATED:
      return {
        ...state,
        authenticated: action.payload,
      };
    default:
      return state;
  }
}
