import * as actionTypes from "./constants";

const initialState = {
  users: [],
  user: {},
  token: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER_LOGIN:
      return {
        ...state,
        user: action.user,
        token: action.token,
      };
    case actionTypes.USER_REGISTER:
      return {
        ...state,
        user: action.user,
      };
    case actionTypes.UPDATE_USER:
      return {
        ...state,
        user: action.user,
      };
    case actionTypes.Get_USER_BY_ID:
      return {
        ...state,
        user: action.user,
      };
    case actionTypes.GET_ALL_USERS:
      return {
        ...state,
        users: action.users,
      };
    default:
      return state;
  }
};
