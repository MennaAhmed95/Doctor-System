import axios from "axios";
const url = "http://localhost:3000/patient";

export const getAllPatients = async () => {
  const { data } = await axios.get(`${url}/`);
  console.log(data, "from apiiii");
  return data;
};

export const getPatientById = async (id) => {
  const { data } = await axios.get(`${url}/${id}`);
  return data;
};

export const addPatient = async () => {
  const token = JSON.parse(localStorage.getItem("token"));
  const { data } = await axios.post(
    `${url}/addPatient`,
    {},
    {
      headers: {
        authorization: token,
      },
    }
  );
  return data;
};
export const editPatient = async (id, patient) => {
  const { data } = await axios.patch(`${url}/${id}`, patient);
  return data;
};

export const deletePatient = async (id) => {
  const { data } = await axios.post(`${url}/${id}`);
  return data;
};
