import { DeleteOutlined } from "@ant-design/icons";
import { Button, Flex, Table, TableProps, Tag } from "antd";
import React from "react";
import { deleteUser, unverifyUser, verifyUser } from "../lib/modifyUser";

const FormVerifyTable = ({
  users,
  setUsers,
}: {
  users: TUsersFirestore[];
  setUsers: React.Dispatch<React.SetStateAction<TUsersFirestore[]>>;
}) => {
  const columns: TableProps<TUsersFirestore>["columns"] = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "SubSystem",
      dataIndex: "subsystem",
      key: "subsystem",
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
    // {
    //   title: "Images",
    //   key: "imageUrls",
    //   dataIndex: "imageUrls",
    //   render: (_, { imageUrls }) => (
    //     <Space size="middle">
    //       {imageUrls.map((url) => (
    //         <Image width={50} src={url} key={url} />
    //       ))}
    //     </Space>
    //   ),
    // },
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
            onClick={() => deleteUser(record.id, setUsers)}
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
