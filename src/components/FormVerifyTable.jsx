import React from "react";
import { Button, Image, Space, Table, Tag } from "antd";
import { unverifyUser, verifyUser } from "../lib/verifyUser";

const FormVerifyTable = ({ users, setUsers }) => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Team",
      dataIndex: "team",
      key: "team",
    },
    {
      title: "Anant Position",
      dataIndex: "anantPosition",
      key: "anantPosition",
    },
    {
      title: "Current Postion",
      dataIndex: "currentPosition",
      key: "currentPosition",
    },
    {
      title: "Images",
      key: "imageUrls",
      dataIndex: "imageUrls",
      render: (_, { imageUrls }) => (
        <Space size="middle">
          {imageUrls.map((url) => (
            <Image width={50} src={url} key={url} />
          ))}
        </Space>
      ),
    },
    {
      title: "Achievements",
      key: "achievements",
      dataIndex: "achievements",
    },
    {
      title: "Email",
      key: "personalMail",
      render: (_, { personalMail, bitsMail }) => (
        <>
          <a href={`mailto:${personalMail}`}>{personalMail}</a>
          <br />
          <a href={`mailto:${bitsMail}`}>{bitsMail}</a>
        </>
      ),
    },
    //   {
    //     title: "Tags",
    //     key: "tags",
    //     dataIndex: "tags",
    //     render: (_, { tags }) => (
    //       <>
    //         {tags.map((tag) => {
    //           let color = tag.length > 5 ? "geekblue" : "green";
    //           if (tag === "loser") {
    //             color = "volcano";
    //           }
    //           return (
    //             <Tag color={color} key={tag}>
    //               {tag.toUpperCase()}
    //             </Tag>
    //           );
    //         })}
    //       </>
    //     ),
    //   },
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
        <>
          {!record.verified ? (
            <Button onClick={() => verifyUser(record.id, setUsers)}>
              Verify
            </Button>
          ) : (
            <Button onClick={() => unverifyUser(record.id, setUsers)}>
              Unverify
            </Button>
          )}
        </>
      ),
    },
  ];
  return (
    <Table columns={columns} dataSource={users} className="verify-table" />
  );
};
export default FormVerifyTable;
