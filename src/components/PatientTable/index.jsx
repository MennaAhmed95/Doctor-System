import React, { Component } from "react";
import { Table } from "antd";
import { useEffect } from "react";
// import { connect } from "react-redux";
// import {
//   getAllPatients,
//   getPatientById,
//   editPatient,
//   addPatient,
//   deletePatient,
// } from "../../Redux/patient/actions";

// import { GetAllPateints } from "../../services/patients";

const PatientTable = (props) => {
  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("user"));
    console.log(user, "user");
  });
  console.log(props, "opppps");
  const columns = [
    {
      title: "PId",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Diagnosis",
      dataIndex: "diagnosis",
      key: "diagnosis",
    },
    {
      title: "Appointment",
      dataIndex: "appointment",
      key: "appointment",
    },
    {
      title: "Doctor",
      dataIndex: "drName",
      key: "drName",
    },
    {
      title: "",
      dataIndex: "",
      key: "",
      render: () => {
        return (
          <div>
            <span>
              <i class="far fa-calendar-plus"></i>
            </span>
            <span>
              <i class="far fa-edit myIcon"></i>
            </span>
            <span>
              <i class="far fa-trash-alt"></i>
            </span>
          </div>
        );
      },
    },
  ];
  const dataSource = props.patient;
  console.log(dataSource, "daaaaaaaaata");
  return (
    <div style={{ margin: "1% 8%" }}>
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
};

export default PatientTable;
