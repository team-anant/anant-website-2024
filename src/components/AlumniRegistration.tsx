import { Button, Form, FormProps, Input, Modal } from "antd";
import { collection, doc, setDoc } from "firebase/firestore";
import React from "react";
import { db } from "../firebase/firebase";
import { FirebaseError } from "firebase/app";

export default function AlumniRegistration({
  isModalOpen,
  setIsModalOpen,
  handleCancel,
}: {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleCancel: () => void;
}) {
  const [form] = Form.useForm<TUsersForm>();
  const [loading, setLoading] = React.useState(false);

  const addUser: FormProps<TUsersForm>["onFinish"] = async (values) => {
    const { name, contactNo, batch, email, subsystem, achievement, imageUrl } =
      values;
    console.log("Received values of form: ", values);

    const formUsersCollection = collection(db, "formUsers");
    const newUserRef = doc(formUsersCollection);

    // Loading state
    setLoading(true);

    try {
      await setDoc(newUserRef, {
        id: newUserRef.id,
        name,
        contactNo,
        batch,
        email: email ?? null,
        subsystem: subsystem ?? null,
        achievement: achievement ?? null,
        imageUrl: imageUrl ?? null,
        verified: false,
      });
      alert("User added successfully");
      setLoading(false);
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error adding document: ", error);
      setLoading(false);
      if (error instanceof FirebaseError)
        alert("Error adding document: " + error.message);
    }
  };

  async function handleOk() {
    await form.submit();
  }

  return (
    <Modal
      title="Alumni Registration"
      open={isModalOpen}
      onClose={handleCancel}
      onCancel={handleCancel}
      footer={[
        <Button key="back" onClick={handleCancel}>
          Return
        </Button>,
        <Button
          key="submit"
          type="primary"
          loading={loading}
          onClick={handleOk}
        >
          Submit
        </Button>,
      ]}
    >
      <Form
        name="Alumni Registration"
        form={form}
        layout="vertical"
        labelCol={{ span: 16 }}
        wrapperCol={{ span: 24 }}
        initialValues={{ remember: true }}
        onFinish={addUser}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
        style={{ marginTop: "20px" }}
      >
        <Form.Item<TUsersForm>
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please enter your name!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<TUsersForm>
          label="Contact Number"
          name="contactNo"
          validateFirst
          rules={[
            { required: true, message: "Please enter your contact number!" },
            { type: "number", message: "Please enter a valid contact number!" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item<TUsersForm>
          label="Batch"
          name="batch"
          rules={[
            { required: true, message: "Please enter your graduating batch!" },
            { type: "number", message: "Please enter a valid batch number!" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item<TUsersForm>
          label="Email"
          name="email"
          rules={[
            { required: false, message: "Please input your email!" },
            { type: "email", message: "Please enter a valid email!" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item<TUsersForm>
          label="Subsystem"
          name="subsystem"
          rules={[{ required: false, message: "Please input your password!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<TUsersForm>
          label="Achievement"
          name="achievement"
          rules={[{ required: false, message: "Please input your password!" }]}
        >
          <Input.TextArea />
        </Form.Item>

        <Form.Item<TUsersForm>
          label="Image URL"
          name="imageUrl"
          rules={[{ required: false, message: "Please input your password!" }]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
}
