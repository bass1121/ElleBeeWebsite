import { SET_USER } from "../types";

const initialState = {
  user: null,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
