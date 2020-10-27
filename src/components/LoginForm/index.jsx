import React, { Component } from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { userLogin } from "../../Redux/user/actions";

class Login extends Component {
  state = {
    user: {
      userName: "",
      password: "",
    },
  };

  onFinish = async (values) => {
    console.log("Received values of form: ", values);
    this.setState({ user: values });
    let user = { ...this.state.user };
    await this.props.userLogin(user);
    if (this.props.user) {
      localStorage.setItem("user", JSON.stringify(this.props.user));
      localStorage.setItem("token", JSON.stringify(this.props.token));
      this.props.history.replace(`/patientTable`);
    }
  };
  render() {
    const { onFinish } = this;
    return (
      <div className="site-layout-content">
        <Form
          name="normal_login"
          className="login-form mystyle"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="userName"
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
            Or <Link to="/register">register now!</Link>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
    token: state.user.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userLogin: (user) => dispatch(userLogin(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
