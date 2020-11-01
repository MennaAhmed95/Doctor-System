import * as actionTypes from "./constants";
const initialState = {
  patientsList: [],
  patient: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_PATIENTS:
      console.log(action.patientsList, "reducerpatient");
      return {
        ...state,
        patientsList: action.patientsList,
      };
    case actionTypes.GET_PATIENT_BY_ID:
      console.log(action.patient, "patient red");
      return {
        ...state,
        patient: action.patient,
      };
    case actionTypes.ADD_PATIENT:
      let patientsList = [...state.patientsList, action.patient];
      console.log(patientsList, "patient reducer");
      return {
        ...state,
        patientsList,
      };
    case actionTypes.EDIT_PATIENT:
      return {
        ...state,
        editedPatient: action.patient,
      };
    case actionTypes.DELETE_PATIENT:
      const patientList = state.patientsList.filter(
        (item) => item.id !== action.patient.id
      );
      return {
        ...state,
        patientsList: patientList,
      };
    default:
      return state;
  }
};
