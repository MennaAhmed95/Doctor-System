import React, { Component } from "react";
import { DatePicker, Form, Input, Button, Select, InputNumber } from "antd";
import { validateMessages, layout, Option } from "./constants";
import { connect } from "react-redux";
import {
  getAllPatients,
  getPatientById,
  editPatient,
  addPatient,
  deletePatient,
} from "../../Redux/patient/actions";

class PatientForm extends Component {
  state = {
    patient: {
      name: "",
      age: null,
      gender: "",
      appointment: "",
      diagnosis: "",
      drName: "",
    },
  };

  async componentDidMount() {
    const patient = await getAllPatients();
    this.setState({ patient });
    console.log(patient, "from formmmmmm");
  }

  onFinish = (values) => {
    console.log(values);
  };

  onReset = () => {
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
    const { onFinish, onReset, onChange, onOk } = this;
    const [form] = Form.useForm();
    return (
      <div className="site-layout-content">
        <Form
          form={form}
          className="mystyle"
          {...layout}
          name="nest-messages"
          onFinish={onFinish}
          validateMessages={validateMessages}
        >
          <Form.Item
            name={["user", "name"]}
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
            name={["user", "age"]}
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
            <Select placeholder="Select Your Gender" allowClear>
              <Option value="male">male</Option>
              <Option value="female">female</Option>
            </Select>
          </Form.Item>
          <Form.Item label="Date and Time">
            <DatePicker
              showTime
              onChange={onChange}
              onOk={onOk}
              placeholder="Appointment"
            />
          </Form.Item>
          <Form.Item name={["user", "diagnosis"]} label="Diagnosis">
            <Input.TextArea />
          </Form.Item>
          <Form.Item
            name="doctor"
            label="Doctor Name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select placeholder="Select Doctor" allowClear>
              <Option value="Ahmed">Ahmed</Option>
              <Option value="Mohamed">Mohamed</Option>
              <Option value="Magdy">Magdy</Option>
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
const mapStateToProps = (state) => {
  return {
    user: state.user.user,
    patient: state.patient.patient,
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

export default connect(mapStateToProps, mapDispatchToProps)(PatientForm);

// export default PatientForm;

// const PatientForm = () => {
//   const [form] = Form.useForm();
//   const onFinish = (values) => {
//     console.log(values);
//   };

//   const onReset = () => {
//     form.resetFields();
//   };
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
//         form={form}
//         className="mystyle"
//         {...layout}
//         name="nest-messages"
//         onFinish={onFinish}
//         validateMessages={validateMessages}
//       >
//         <Form.Item
//           name={["user", "name"]}
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
//           name={["user", "age"]}
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
//         <Form.Item name={["user", "diagnosis"]} label="Diagnosis">
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
//             <Option value="Ahmed">Ahmed</Option>
//             <Option value="Mohamed">Mohamed</Option>
//             <Option value="Magdy">Magdy</Option>
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

// export default PatientForm;
