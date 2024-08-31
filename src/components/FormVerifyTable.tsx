import { DeleteOutlined, ExclamationCircleFilled } from "@ant-design/icons";
import { Button, Flex, Image, Modal, Table, TableProps, Tag } from "antd";
import React from "react";
import { deleteUser, unverifyUser, verifyUser } from "../lib/modifyUser";

const FormVerifyTable = ({
  users,
  setUsers,
}: {
  users: TUsersFirestore[];
  setUsers: React.Dispatch<React.SetStateAction<TUsersFirestore[]>>;
}) => {
  const { confirm } = Modal;

  const showPromiseConfirm = (id: string) => {
    confirm({
      title: "Delete User?",
      icon: <ExclamationCircleFilled />,
      content:
        "Are you sure you want to delete this user? This action cannot be undone.",
      onOk() {
        return deleteUser(id, setUsers);
      },
      onCancel() {},
    });
  };

  const columns: TableProps<TUsersFirestore>["columns"] = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "LinkedIn",
      dataIndex: "linkedIn",
      key: "linkedIn",
      render: (_, { linkedIn }) => (
        <>
          <a href={linkedIn} target="_blank" rel="noreferrer">
            {linkedIn}
          </a>
        </>
      ),
    },
    {
      title: "Batch",
      dataIndex: "batch",
      key: "batch",
    },
    {
      title: "Contact No",
      dataIndex: "contactNo",
      key: "contactNo",
    },
    {
      title: "SubSystem",
      dataIndex: "subsystem",
      key: "subsystem",
    },
    {
      title: "Image",
      key: "imageUrl",
      dataIndex: "imageUrl",
      render: (_, { imageUrl }) => (
        <Image
          width={50}
          src={
            imageUrl ||
            "https://i.seadn.io/gae/y2QcxTcchVVdUGZITQpr6z96TXYOV0p3ueLL_1kIPl7s-hHn3-nh8hamBDj0GAUNAndJ9_Yuo2OzYG5Nic_hNicPq37npZ93T5Nk-A?auto=format&dpr=1&w=1000"
          }
          key={imageUrl}
        />
      ),
    },
    {
      title: "Achievements",
      key: "achievements",
      dataIndex: "achievements",
    },
    {
      title: "Email",
      key: "email",
      render: (_, { email }) => (
        <>
          <a href={`mailto:${email}`}>{email}</a>
        </>
      ),
    },
    {
      title: "Verification Status",
      key: "verified",
      dataIndex: "verified",
      render: (_, { verified }) => (
        <>
          {verified ? (
            <Tag color="green">Verified</Tag>
          ) : (
            <Tag color="red">Not Verified</Tag>
          )}
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Flex gap={"small"}>
          {!record.verified ? (
            <Button onClick={() => verifyUser(record.id, setUsers)}>
              Verify
            </Button>
          ) : (
            <Button onClick={() => unverifyUser(record.id, setUsers)}>
              Unverify
            </Button>
          )}
          <Button
            danger
            icon={<DeleteOutlined />}
            // type="text"
            iconPosition="end"
            onClick={() => showPromiseConfirm(record.id)}
          >
            Delete
          </Button>
        </Flex>
      ),
    },
  ];
  return (
    <Table columns={columns} dataSource={users} className="verify-table" />
  );
};

export default FormVerifyTable;
