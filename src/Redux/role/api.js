import axios from "axios";

const url = "http://localhost:3000/role";

export async function GetAllRoles() {
  const { data } = await axios.get(`${url}/`);
  return data;
}

export async function GetRoleById(id) {
  const { data } = await axios.get(`${url}/${id}`);
  return data;
}
