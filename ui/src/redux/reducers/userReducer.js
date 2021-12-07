import { GET_USER, GET_USER_SUCCESS, GET_USER_FAIL } from "../types";

const initialState = {
  loading: false,
  // isAuthenticated: false,
  user: {},
  error: null,
  message: "",
};

export const userReducer = (
  state = initialState,
  { type, message, payload }
) => {
  //   console.log(action);
  switch (type) {
    case GET_USER:
      return {
        loading: true,
        error: "",
      };

    case GET_USER_SUCCESS:
      return {
        loading: false,
        message: message,
        error: "",
      };
    case GET_USER_FAIL:
      return {
        loading: false,
        error: payload,
        message: message,
      };

    default:
      return state;
  }
};
