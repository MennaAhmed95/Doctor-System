import React, { Component } from "react";
import { Table } from "antd";
import { useEffect, useState } from "react";
import { Button, Input } from "antd";
import { useDispatch } from "react-redux";
import { deletePatient, getPatientById } from "./../../Redux/patient/actions";
import { editPatient } from "../../Redux/patient/api";
const { Search } = Input;

const PatientTable = (props) => {
  const { patient } = props;
  const dispatch = useDispatch();
  const [users, setUsers] = useState({ roleId: { name: "" } });
  const [patientt, setPatient] = useState({});
  const {
    roleId: { name = "" },
  } = users;
  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("user"));
    {
      user && setUsers(user);
    }
  }, []);
  useEffect(() => {
    setPatient(patientt);
  }, [patientt]);
  const onSearch = (value) => console.log(value);
  const handleDelete = (id) => {
    dispatch(deletePatient(id));
    console.log("deleted", id);
  };
  const handleEdit = (id) => {
    dispatch(getPatientById(id));
    props.history.push(`/patientForm/${id}`);
    console.log("edited", id);
  };
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
      render: (action, record) => {
        return (
          <>
            {name === "Secretary" && (
              <div>
                <button
                  onClick={() => handleEdit(record.id)}
                  className="mySpan"
                >
                  <i className="far fa-edit "></i>
                </button>
                <button
                  onClick={() => handleDelete(record.id)}
                  className="mySpan"
                >
                  <i className="far fa-trash-alt"></i>
                </button>
              </div>
            )}
          </>
        );
      },
    },
  ];

  const dataSource = patient;
  console.log(dataSource, "daaaaaaaaata");
  return (
    <>
      {name === "Secretary" ? (
        <Button type="primary" className="tableItem" href="patientForm">
          Add Appointment
          {console.log(name)}
        </Button>
      ) : (
        <div className="tableItem">
          {console.log(name)}

          <Search
            placeholder="Search"
            onSearch={onSearch}
            enterButton={<i class="fas fa-search"></i>}
          />
        </div>
      )}
      <div style={{ margin: "1% 8%" }}>
        <Table
          dataSource={dataSource}
          columns={columns}
          pagination={{ defaultPageSize: ["7"] }}
        />
      </div>
    </>
  );
};

export default PatientTable;
