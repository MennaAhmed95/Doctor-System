import * as patientDB from "./api";
import {
  GET_ALL_PATIENTS,
  GET_PATIENT_BY_ID,
  DELETE_PATIENT,
  EDIT_PATIENT,
  ADD_PATIENT,
} from "./constants";

export const getAllPatientsRes = (patientsList) => {
  console.log(patientsList, "action response ");
  return {
    type: GET_ALL_PATIENTS,
    patientsList,
  };
};
export const getAllPatients = () => {
  return async (dispatch) => {
    const patients = await patientDB.getAllPatients();
    console.log(patients, "actionnnnn ");
    dispatch(getAllPatientsRes(patients));
  };
};

export const getPatientByIdRes = (patient) => {
  return {
    type: GET_PATIENT_BY_ID,
    patient,
  };
};
export const getPatientById = (id) => {
  console.log("id action", id);
  return async (dispatch) => {
    const patient = await patientDB.getPatientById(id);
    dispatch(getPatientByIdRes(patient));
  };
};

export const addPatientRes = (patient) => {
  return {
    type: ADD_PATIENT,
    patient,
  };
};
export const addPatient = (patientdata) => {
  console.log(patientdata, "patientt in action");
  return async (dispatch) => {
    const patient = await patientDB.addPatient(patientdata);
    dispatch(addPatientRes(patient));
  };
};

export const editPatientRes = (patient) => {
  return {
    type: EDIT_PATIENT,
    patient,
  };
};
export const editPatient = (id, patient) => {
  return async (dispatch) => {
    const editedPatient = await patientDB.editPatient(id, patient);
    dispatch(editPatientRes(editedPatient));
  };
};

export const deletePatientRes = (patient) => {
  return {
    type: DELETE_PATIENT,
    patient,
  };
};
export const deletePatient = (id) => {
  return async (dispatch) => {
    const patient = await patientDB.deletePatient(id);
    dispatch(deletePatientRes(patient));
  };
};
