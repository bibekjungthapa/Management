import React, { useEffect } from 'react';
import { Table } from 'antd';
import { useGlobalState } from '../provider/GlobalStateContext';

function DataTable() {
 const {data,setData,name,setName}=useGlobalState()

  useEffect(() => {
    fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
      .then((res) => res.json())
      .then((result) => setData(result.data));
  }, []);

  const columns = [
    { title: "Nation", dataIndex: "Nation", key: "Nation" },
    { title: "Year", dataIndex: "Year", key: "Year" },
    { title: "Population", dataIndex: "Population", key: "Population" },
  ];

setName('HELLO')
  return (
    <>
    <h1>{name}</h1>
      <h2>US Population Data</h2>
      <Table
        dataSource={data.map((item, index) => ({ ...item, key: index }))}
        columns={columns}
        pagination={{ pageSize: 10 }}
        bordered
      />
    </>
  );
}

export default DataTable;