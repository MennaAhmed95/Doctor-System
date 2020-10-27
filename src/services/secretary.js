import axios from "axios";

export const GetAllSecretary = async function () {
  const { data } = await axios.get("http://localhost:3000/Secretary");
  return data;
};
