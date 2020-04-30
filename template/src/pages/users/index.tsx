import React from "react";
import { Table } from "vaa-react-tools";
import { Card } from "antd";

export const Home = () => {
  return (
    <>
      <Card bordered={false} bodyStyle={{ padding: 0 }}>
        <Table dataSource={dataSource} columns={columns} />
      </Card>
    </>
  );
};

const dataSource = [
  {
    key: 0,
    name: "John Doe",
    age: 23,
    birthPlace: "London",
  },
  {
    key: 0,
    name: "Some Name",
    age: 34,
    birthPlace: "Manchester",
  },
];

const columns = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
  },
  {
    title: "Birth place",
    dataIndex: "birthPlace",
  },
];
