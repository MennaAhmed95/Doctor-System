import {
  USER_REGISTER,
  USER_LOGIN,
  UPDATE_USER,
  Get_USER_BY_ID,
  GET_ALL_USERS,
} from "./constants";
import * as userDB from "./api";
import {
  addPatient,
  editPatient,
  deletePatient,
  getPatientById,
  getAllPatients,
} from "./../patient/api";

export const userRegister = (user) => (dispatch) => {
  const newUser = {
    ...user,
  };

  userDB.UserRegister(newUser).then((response) => {
    let user = JSON.parse(localStorage.getItem("newUser"));
    console.log(user, "newUserInLocal");

    let userLogin = {
      userName: response.data.userName,
      password: user.password,
    };
    console.log(userLogin, "userLogin");

    userDB.UserLogin(userLogin).then(async (response) => {
      console.log(response, "responseOfLogin");

      localStorage.setItem("user", JSON.stringify(response.user));
      localStorage.setItem("token", JSON.stringify(response.token));
      console.log(response.user.roleId.name, "userafterLogin in action");
      if (response.user.roleId.name === "Secretary") {
        console.log("this is Secretary");
        await addPatient().then((response) => console.log(response));
      }
      // if (response.user.roleId.name === "Doctor") {
      //   await getPatientById().then((response) => console.log(response));
      //   console.log("this is Doctor");
      // } else if(response.user.roleId.name==="Secretary") {
      //   console.log("this is Secretary");
      //   await addPatient().then((response) => console.log(response));
      //   await editPatient().then((response) => console.log(response));
      //   await deletePatient().then((response) => console.log(response))
      // }
      dispatch(userLoginRes(response.user, response.token));
    });
  });
  console.log(newUser);
};

const userLoginRes = (user, token) => {
  return {
    type: USER_LOGIN,
    user,
    token,
  };
};
export const userLogin = (currentUser) => {
  return async (dispatch) => {
    const response = await userDB.UserLogin(currentUser);
    console.log(response, "response action user");
    dispatch(userLoginRes(response.user, response.token));
  };
};

const updateUserRes = (user) => {
  return {
    type: UPDATE_USER,
    user,
  };
};
export const updateUser = (user) => {
  return async (dispatch) => {
    const updateduser = await userDB.updateUser(user);
    dispatch(updateUserRes(updateduser));
  };
};

const getUserByIdRes = (user) => {
  return {
    type: Get_USER_BY_ID,
    user,
  };
};
export const getUserById = (id) => {
  return async (dispatch) => {
    const userById = await userDB.getUserById(id);
    dispatch(getUserByIdRes(userById));
  };
};

const getAllUsersRes = (users) => {
  return {
    type: GET_ALL_USERS,
    users,
  };
};
export const getAllUsers = () => {
  return async (dispatch) => {
    const users = await userDB.getAllUsers();
    dispatch(getAllUsersRes(users));
  };
};
