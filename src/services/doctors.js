import axios from "axios";

export const GetAllDoctors = async function () {
  const { data } = await axios.get("http://localhost:3000/Doctors");
  return data;
};
