import axios from "axios";

export const GetAllAppointments = async function () {
  const { data } = await axios.get("http://localhost:3000/Appointments");
  return data;
};
