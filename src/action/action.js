import { LOGIN_SUCCESS } from "./types";

//액션 생성자 정의
export const loginSuccess = (userData) => {
  return {
    type: LOGIN_SUCCESS,
    payload: userData,
  };
};
