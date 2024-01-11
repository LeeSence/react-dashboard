import { LOGIN_SUCCESS } from "../action/action";

// 초기 상태값 정의
const initialState = {};

// 리듀서 정의
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        userData: action.payload,
      };
    default:
      return state;
  }
};
