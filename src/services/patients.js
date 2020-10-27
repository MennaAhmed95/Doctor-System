import axios from "axios";

export const GetAllPateints = async function () {
  // const { data } = await axios.get("http://localhost:3000/patient");
  const { data } = await axios.get("http://localhost:3000/patient/");
  return data;
};
