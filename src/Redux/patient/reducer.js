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
      return {
        ...state,
        patient: action.patient,
      };
    case actionTypes.ADD_PATIENT:
      let patientList = [...state.patientList, action.patient];
      return {
        ...state,
        patientList,
      };
    case actionTypes.EDIT_PATIENT:
      return {
        ...state,
        editedPatient: action.patient,
      };
    case actionTypes.DELETE_PATIENT:
      return {
        ...state,
        deletedPatient: action.patient,
      };
    default:
      return state;
  }
};
