import * as actionTypes from "./constants";

const initialState = {
  role: [],
  roleById: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_ROLES:
      return {
        ...state,
        roles: action.roles,
      };
    case actionTypes.GET_ROLE_BY_ID:
      return {
        ...state,
        roleById: action.role,
      };
    default:
      return state;
  }
};
