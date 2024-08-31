import {
  Button,
  Form,
  FormProps,
  Input,
  message,
  Modal,
  Upload,
  UploadFile,
} from "antd";
import { FirebaseError } from "firebase/app";
import { collection, doc, setDoc } from "firebase/firestore";
import React from "react";
import { db, storage } from "../firebase/firebase";

import { UploadOutlined } from "@ant-design/icons";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

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
  const [messageApi, contextHolder] = message.useMessage();

  const [loading, setLoading] = React.useState(false);
  const [fileList, setFileList] = React.useState<UploadFile[]>([]);

  const addUser: FormProps<TUsersForm>["onFinish"] = async (values) => {
    const { name, linkedIn, contactNo, batch, email, subsystem, achievement } =
      values;
    console.log("Received values of form: ", values);

    const formUsersCollection = collection(db, "formUsers");
    const newUserRef = doc(formUsersCollection);

    // Loading state
    setLoading(true);

    try {
      let uploadedImageUrl = null;
      if (fileList.length !== 0) {
        // Upload image to storage
        const storageRef = ref(storage, `pictures/${newUserRef.id}`);
        const file = fileList[0];

        // @ts-ignore
        const snapshot = await uploadBytes(storageRef, file);
        console.log("Uploaded a blob or file!", snapshot);

        uploadedImageUrl = await getDownloadURL(storageRef);
      }

      await setDoc(newUserRef, {
        id: newUserRef.id,
        name,
        linkedIn,
        contactNo,
        batch,
        email: email ?? null,
        subsystem: subsystem ?? null,
        achievement: achievement ?? null,
        imageUrl: uploadedImageUrl ?? null,
        verified: false,
      });
      messageApi.success("Registration successful!");
      setLoading(false);
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error adding document: ", error);
      setLoading(false);
      if (error instanceof FirebaseError)
        messageApi.error("Error adding document: " + error.message);
    }
  };

  function handleOk() {
    form.submit();
  }

  const normFile = (e: any) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }

    //   setFileList(e?.fileList);
    return e?.fileList;
  };

  console.log(fileList);

  return (
    <>
      {contextHolder}
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
            label="LinkedIn"
            name="linkedIn"
            rules={[
              { required: true, message: "Please enter your LinkedIn!" },
              { type: "url", message: "Please enter a valid LinkedIn URL!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item<TUsersForm>
            label="Contact Number"
            name="contactNo"
            validateFirst
            rules={[
              { required: true, message: "Please enter your contact number!" },
              // { type: "number", message: "Please enter a valid contact number!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item<TUsersForm>
            label="Batch"
            name="batch"
            rules={[
              {
                required: true,
                message: "Please enter your graduating batch!",
              },
              // { type: "number", message: "Please enter a valid batch number!" },
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
            rules={[
              { required: false, message: "Please input your password!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item<TUsersForm>
            label="Achievement"
            name="achievement"
            rules={[
              { required: false, message: "Please input your password!" },
            ]}
          >
            <Input.TextArea />
          </Form.Item>

          <Form.Item
            name="upload"
            label="Upload a photo"
            valuePropName="fileList"
            getValueFromEvent={normFile}
            extra="Please upload a photo of yourself"
          >
            <Upload
              type="drag"
              name="pfp"
              onRemove={() => setFileList([])}
              beforeUpload={(file) => {
                setFileList([file]);
                return false;
              }}
              listType="picture"
              fileList={fileList}
              maxCount={1}
            >
              <Button icon={<UploadOutlined />}>Click to upload</Button>
            </Upload>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
