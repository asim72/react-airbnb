import {
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT,
} from "../constants/airbnbConstants";
import axios from "axios";
import AuthService from "../services/AuthService";

export const register_user = (userData) => {
  try {
    const res = axios
      .post("http://localhost:1200/api/airbnb/register", {
        ...userData,
      })
      .then(
        (user) => {
          return user.data;
        },
        (err) => {
          return Promise.reject(err.response.data.errors);
        }
      );

    return res;
  } catch (error) {
    console.error(error);
  }
};

export const login_success = () => {
  return {
    type: LOGIN_SUCCESS,
  };
};

export const checkAuthState = () => {
  return (dispatch) => {
    if (AuthService.isAuthenticated()) {
      dispatch(login_success());
    }
  };
};

export const login_failure = (errors) => {
  return {
    type: LOGIN_FAILURE,
    errors,
  };
};

export const login = (userData) => {
  return (dispatch) => {
    return axios
      .post("http://localhost:1200/api/airbnb/login", {
        ...userData,
      })
      .then((login) => {
        return login.data;
      })
      .then((token) => {
        localStorage.setItem("auth_token", token);
        dispatch(login_success());
      })
      .catch((error) => {
        debugger;
        dispatch(login_failure(error.response.data.errors));
      });
  };
};

export const logout = () => {
  AuthService.remove_token();
  return {
    type: LOGOUT,
  };
};
