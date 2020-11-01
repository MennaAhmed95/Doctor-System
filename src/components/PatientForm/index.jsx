import React, { Component } from "react";
import { DatePicker, Form, Input, Button, Select, InputNumber } from "antd";
import { validateMessages, layout, Option } from "./constants";
import { connect } from "react-redux";
import {
  addPatient,
  getPatientById,
  editPatient,
} from "../../Redux/patient/actions";
import { getAllUsers } from "../../Redux/user/actions";

class PatientForm extends Component {
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
    onePatient: {
      name: "",
      age: null,
      gender: "",
      appointment: "",
      diagnosis: "",
      drName: "",
    },
  };
  async componentDidMount() {
    console.log(this.props.match.params, "this.props.match.params");
    if (this.props.match.params.id) {
      await this.props.getPatientById(this.props.match.params.id);
      const onePatient = this.props.onePatient;
      this.setState({ onePatient });
      console.log(onePatient, "onePatient");
    } else {
      await this.props.getAllUsers();
      const patient = this.props.patient;
      const user = this.props.users;
      this.setState({ user, patient });
      console.log(patient, "from form");
    }
  }
  onFinish = async (values) => {
    const val = {
      ...values,
      appointment: values["appointment"].format("YYYY-MM-DD HH:mm:ss"),
    };
    console.log(val);
    await this.props.addPatient(val);
    this.props.history.replace("/patientTable");
  };
  onReset = () => {
    const [form] = Form.useForm();
    form.resetFields();
  };
  onChange = (value, dateString) => {
    console.log("Selected Time: ", value);
    console.log("Formatted Selected Time: ", dateString);
  };

  onOk = (value) => {
    console.log("onOk: ", value);
  };
  render() {
    const { onFinish, onOk, onChange, onReset } = this;
    return (
      <div className="site-layout-content">
        <Form
          layout="vertical"
          // form={form}
          className="mystyle"
          {...layout}
          name="nest-messages"
          onFinish={onFinish}
          validateMessages={validateMessages}
          initialValues={this.props.onePatient}
        >
          <Form.Item
            name="name"
            label="Name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="age"
            label="Age"
            rules={[
              {
                type: "number",
                min: 0,
                max: 99,
              },
            ]}
          >
            <InputNumber />
          </Form.Item>

          <Form.Item
            name="gender"
            label="Gender"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select placeholder="Select Your Gender">
              <Option value="male">male</Option>
              <Option value="female">female</Option>
            </Select>
          </Form.Item>
          <Form.Item name="appointment" label="Date and Time">
            <DatePicker
              format="YYYY-MM-DD HH:mm:ss"
              showTime
              onChange={onChange}
              onOk={onOk}
              placeholder="Appointment"
            />
          </Form.Item>
          <Form.Item name="diagnosis" label="Diagnosis">
            <Input.TextArea />
          </Form.Item>
          <Form.Item
            name="drName"
            label="Doctor Name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select placeholder="Select Doctor">
              {this.state.user.map((item) => {
                if (item.roleId.name === "Doctor") {
                  return (
                    <Option key={item.id} value={item.userName}>
                      {item.userName}
                    </Option>
                  );
                }
              })}
            </Select>
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
              Add Appointment
            </Button>
            <Button htmlType="button" onClick={onReset} className="mf">
              Reset
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

// export default PatientForm;

const mapStateToProps = (state) => {
  console.log(state.patient.patient, "one patient");
  return {
    patient: state.patient.patientsList,
    onePatient: state.patient.patient,
    users: state.user.users,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addPatient: (patient) => dispatch(addPatient(patient)),
    getAllUsers: () => dispatch(getAllUsers()),
    getPatientById: (id) => dispatch(getPatientById(id)),
    editPatient: (id, patient) => dispatch(editPatient(id, patient)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PatientForm);

//   const onFinish = (values) => {
//     // await this.props.addPatient(values);
//     console.log(values);
//   };
//   function onReset() {
//     const [form] = Form.useForm();
//     form.resetFields();
//   }
//   function onChange(value, dateString) {
//     console.log("Selected Time: ", value);
//     console.log("Formatted Selected Time: ", dateString);
//   }

//   function onOk(value) {
//     console.log("onOk: ", value);
//   }

//   return (
//     <div className="site-layout-content">
//       <Form
//         layout="vertical"
//         // form={form}
//         className="mystyle"
//         {...layout}
//         name="nest-messages"
//         onFinish={onFinish}
//         validateMessages={validateMessages}
//       >
//         <Form.Item
//           name="name"
//           label="Name"
//           rules={[
//             {
//               required: true,
//             },
//           ]}
//         >
//           <Input />
//         </Form.Item>
//         <Form.Item
//           name="age"
//           label="Age"
//           rules={[
//             {
//               type: "number",
//               min: 0,
//               max: 99,
//             },
//           ]}
//         >
//           <InputNumber />
//         </Form.Item>

//         <Form.Item
//           name="gender"
//           label="Gender"
//           rules={[
//             {
//               required: true,
//             },
//           ]}
//         >
//           <Select placeholder="Select Your Gender" allowClear>
//             <Option value="male">male</Option>
//             <Option value="female">female</Option>
//           </Select>
//         </Form.Item>
//         <Form.Item label="Date and Time">
//           <DatePicker
//             showTime
//             onChange={onChange}
//             onOk={onOk}
//             placeholder="Appointment"
//           />
//         </Form.Item>
//         <Form.Item name="diagnosis" label="Diagnosis">
//           <Input.TextArea />
//         </Form.Item>
//         <Form.Item
//           name="doctor"
//           label="Doctor Name"
//           rules={[
//             {
//               required: true,
//             },
//           ]}
//         >
//           <Select placeholder="Select Doctor" allowClear>
//             {users.map((item) => {
//               if (item.roleId.name === "Doctor") {
//                 return (
//                   <Option key={item.id} value={item.userName}>
//                     {item.userName}
//                   </Option>
//                 );
//               }
//             })}
//           </Select>
//         </Form.Item>
//         <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
//           <Button type="primary" htmlType="submit">
//             Add Appointment
//           </Button>
//           <Button htmlType="button" onClick={onReset} className="mf">
//             Reset
//           </Button>
//         </Form.Item>
//       </Form>
//     </div>
//   );
// };
