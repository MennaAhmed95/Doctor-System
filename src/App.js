import React, { Component } from "react";
import "./style/style.css";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./components/HomePage/index";
import ErrorPage from "./components/ErrorPage/index";
import Header from "./components/Header/index";
import DoctorSec from "./components/DoctorSec/index";
import SpecialtiesSec from "./components/SpecialtiesSec/index";
import Login from "./components/LoginForm/index";
import Register from "./components/RegisterForm/index";
import PatientTable from "./components/PatientTable/index";
import { connect } from "react-redux";
import PatientForm from "./components/PatientForm/index";
import { getAllUsers } from "./Redux/user/actions";
import {
  getAllPatients,
  getPatientById,
  editPatient,
  addPatient,
  deletePatient,
} from "./Redux/patient/actions";

class App extends Component {
  state = {
    patient: [
      {
        name: "",
        age: null,
        gender: "",
        appointment: "",
        diagnosis: "",
        drName: "",
      },
    ],
    user: [{ userName: "", email: "", roleId: { id: "", name: "" } }],
  };
  async componentDidMount() {
    await this.props.getAllPatients();
    await this.props.getAllUsers();
    const user = this.props.users;
    this.setState({ user });
    console.log(user, "from app+");
  }

  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/home" component={HomePage} />
          <Route path="/doctors-sec" component={DoctorSec} />
          <Route path="/specialties-sec" component={SpecialtiesSec} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/patientForm" component={PatientForm} />
          <Route
            path="/patientForm/:id"
            component={PatientForm}
            // render={(props) => <PatientForm {...props} />}
          />
          <Route
            path="/patientTable"
            render={(props) => (
              <PatientTable patient={this.props.patient} {...props} />
            )}
          />
          <Route path="/error-page" component={ErrorPage} />
          <Redirect to="/error-page" />
        </Switch>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state, "state");
  console.log(state.patient.patientsList, "p");
  console.log(state.user.users, "u");

  return {
    user: state.user.user,
    users: state.user.users,
    patient: state.patient.patientsList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllPatients: () => dispatch(getAllPatients()),
    getPatientById: (id) => dispatch(getPatientById(id)),
    addPatient: (patient) => dispatch(addPatient(patient)),
    editPatient: (id, patient) => dispatch(editPatient(id, patient)),
    deletePatient: (id) => dispatch(deletePatient(id)),
    getAllUsers: () => dispatch(getAllUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
