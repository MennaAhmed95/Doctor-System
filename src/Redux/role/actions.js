import { GetAllRoles, GetRoleById } from "./api";
import { GET_ALL_ROLES, GET_ROLE_BY_ID } from "./constants";

export const getAllRolesRes = (roles) => {
  return {
    type: GET_ALL_ROLES,
    roles,
  };
};
export const getAllRoles = () => {
  return async (dispatch) => {
    const roles = await GetAllRoles();
    dispatch(getAllRolesRes(roles));
  };
};
export const getRoleByIdRes = (role) => {
  return {
    type: GET_ROLE_BY_ID,
    role,
  };
};
export const getRoleById = (id) => {
  return async (dispatch) => {
    const role = await GetRoleById(id);
    dispatch(getRoleByIdRes(role));
  };
};
