import {
  USER_LOGIN,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILED,
} from "./actionType";

export const userLogin = (payload) => ({
  type: USER_LOGIN,
  payload,
});

export const userLoginSuccess = (payload) => ({
  type: USER_LOGIN_SUCCESS,
  payload,
});

export const userLoginFailed = (payload) => ({
  type: USER_LOGIN_FAILED,
  payload,
});
