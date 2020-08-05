import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from "../constants/airbnbConstants";

let initialState = {
  errors: [],
  isAuth: false,
};

export const authReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,

        isAuth: true,
        errors: [],
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        errors: actions.errors,
      };
    case LOGOUT:
      return {
        ...state,
        isAuth: false,
      };
    default:
      return state;
  }
};
