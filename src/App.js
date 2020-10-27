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
  };
  async componentDidMount() {
    await this.props.getAllPatients();
    const patient = this.props.patient;
    this.setState({ patient });
    console.log(patient, "from app");
  }

  render() {
    return (
      <>
        <Header />
        {/* <PatientTable patient={this.state.patient} /> */}
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/home" component={HomePage} />
          <Route path="/doctors-sec" component={DoctorSec} />
          <Route path="/specialties-sec" component={SpecialtiesSec} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route
            path="/patientTable"
            render={(props) => (
              <PatientTable patient={this.state.patient} {...props} />
            )}
          />
          <Route path="/error-page" component={ErrorPage} />
          <Redirect to="/error-page" />
        </Switch>
      </>
    );
  }
}
// export default App;

const mapStateToProps = (state) => {
  console.log(state.user, "state");
  return {
    user: state.user.user,
    patient: state.patient.patientsList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllPatients: () => dispatch(getAllPatients()),
    getPatientById: (id) => dispatch(getPatientById(id)),
    addPatient: () => dispatch(addPatient()),
    editPatient: (id, patient) => dispatch(editPatient(id, patient)),
    deletePatient: (id) => dispatch(deletePatient(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

// component={PatientTable}
{
  /* <Header />
          <LandPage />
          <PatientTable patients={this.state.patients} />
          <Login />
          <Register />
          <PatientForm />
          <DoctorSec />
          <SpecialtiesSec />
          <Footer /> */
}
