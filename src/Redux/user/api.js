import axios from "axios";

const url = "http://localhost:3000/user/";

export async function UserLogin(user) {
  const response = await axios
    .post(`${url}login`, user)
    .catch((err) => console.log(err.response.data));
  console.log(response, "api response");
  if (response) {
    console.log(response.data, "response in api login");
    return response.data;
  }
}

export function UserRegister(user) {
  // const response = await axios.post(`${url}register`, user).catch((err) => console.log(err.response.data));
  // if (response) {
  //     console.log(response.data, "response in api register")
  //     return response.data;
  // }

  return axios.post(`${url}register`, user);
}

export async function updateUser(updatedUser) {
  console.log(updatedUser);

  const token = JSON.parse(localStorage.getItem("token"));
  const response = await axios
    .patch(`${url}`, updatedUser, {
      headers: {
        authorization: token,
      },
    })
    .catch((err) => console.log(err.response.data));
  if (response) {
    console.log(response.data, "inApi");

    return response.data;
  }
}

export async function getUserById(id) {
  const response = await axios
    .get(`${url}/${id}`)
    .catch((err) => console.log(err.response.data));
  if (response) {
    console.log(response.data, "userById");
    return response.data;
  }
}

export const getAllUsers = async () => {
  const response = await axios
    .get(`${url}`)
    .catch((err) => console.log(err.response.data));
  if (response) {
    console.log(response.data, "userById");
    return response.data;
  }
};
