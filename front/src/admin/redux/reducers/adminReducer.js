import {
  SET_IS_LOGIN,
  SET_ERROR,
  TOGLE_IS_LOADING,
  GET_DATA,
  LOGOUT,
} from "../types";

const defaultState = {
  data: {},
  isLoading: false,
  err: "",
};

export default function adminReducer(state = defaultState, action) {
  switch (action.type) {
    case LOGOUT:
      return {
        ...state,
        data: {},
        isLogin: false,
      };
    case SET_IS_LOGIN:
      return {
        ...state,
        isLogin: true,
      };
    case TOGLE_IS_LOADING:
      return {
        ...state,
        isLoading: !state.isLoading,
      };
    case SET_ERROR:
      return {
        ...state,
        err: action.payload,
      };
    case GET_DATA:
      const { adminData } = action.payload;
      return {
        ...state,
        data: adminData,
      };
    default:
      return state;
  }
}
