import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

import { motion } from "framer-motion";

// AntD
import { Button, Form, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";

import anant_logo from "../assets/anant-logo.png";

import "../styles/login.scss";

export default function Login() {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const { userLoggedIn, currentUser, setCurrentUser } = useAuth();

  useEffect(() => {
    if (userLoggedIn) {
      navigate("/admin/authorize");
    }
  }, [userLoggedIn, currentUser, navigate]);

  const handleSubmit = async (values) => {
    // e.preventDefault();
    // console.log("Form submitted");
    // console.log(values);
    // console.log(e.target.email.value);
    // console.log(e.target.password.value);

    const email = values.email;
    const password = values.password;

    // Call firebase login function
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      const user = res.user;
      // console.log(user);
      setCurrentUser(user);
      navigate("/admin/authorize");
    } catch (error) {
      console.log(error);
      alert("Invalid credentials");
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <motion.section
      className="login-page"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 1, ease: "easeInOut", delay: 0 }}
    >
      <aside className="login-left-aside">
        <img
          src={anant_logo}
          alt="logo"
          className="logo"
          onClick={() => {
            navigate("/");
          }}
        />
        <h1>
          <span className="primary-text-color">Anant</span>
          &nbsp;Admin Panel
        </h1>
        <p>Login using admin credentials to access the admin panel</p>
      </aside>
      <aside className="login-right-aside">
        <h1>
          Hello & <br /> <span className="primary-text-color">Welcome</span>
        </h1>
        <div className="line"></div>
        <Form
          id="login-form"
          name="login-form"
          layout="vertical"
          form={form}
          size="large"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={handleSubmit}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            layout="vertical"
            hasFeedback
            labelCol={{
              span: 24,
            }}
            wrapperCol={{
              span: 24,
            }}
            label="Email"
            name="email"
            id="email"
            // validateTrigger="onFinish"
            rules={[
              {
                required: true,
                message: "Please input your correct email!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined />}
              style={{
                fontFamily: "Roboto Mono",
              }}
            />
          </Form.Item>

          <Form.Item
            hasFeedback
            labelCol={{
              span: 24,
            }}
            wrapperCol={{
              span: 24,
            }}
            layout="vertical"
            label="Password"
            name="password"
            id="password"
            // validateTrigger="onFinish"
            rules={[
              {
                required: true,
                message: "Please input your correct password!",
              },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              style={{
                fontFamily: "Roboto Mono",
              }}
            />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              // offset: 8,
              span: 24,
            }}
          >
            <Button
              type="primary"
              htmlType="submit"
              style={{
                fontFamily: "Roboto Mono",
              }}
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </aside>
    </motion.section>
  );
}
