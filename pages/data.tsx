import { Breadcrumb, Button, Divider, Result, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import Head from "next/head";
import { useRouter } from "next/router";

interface data {
  name: string;
  sector: String;
  isAgree: boolean | string;
}

const columns: ColumnsType<data> = [
  {
    title: "Name",
    dataIndex: "name"
  },
  {
    title: "Sector",
    dataIndex: "sector"
  },
  {
    title: "Agree",
    dataIndex: "isAgree"
  }
];

const Data = () => {
  const router = useRouter();
  const dataInfo = router.query;
  const data: data[] = [
    {
      name: dataInfo?.name || "",
      sector: dataInfo?.sector || "",
      isAgree: dataInfo?.isActive || ""
    }
  ];

  return (
    <div style={{ margin: "0 5%" }}>
      <Head>
        <title>Result </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Breadcrumb separator=">">
        <Breadcrumb.Item onClick={() => router.push("/")}>
          <span style={{ color: "black", cursor: "pointer" }}> Home </span>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <span style={{ color: "blue" }}>Result</span>
        </Breadcrumb.Item>
      </Breadcrumb>
      <>
        <Divider>Result</Divider>
        <Table columns={columns} dataSource={data} size="middle" />
      </>
      <Result
        status="success"
        subTitle={`Hi, ${dataInfo.name} Your sector has been added.`}
        extra={[
          <Button onClick={() => router.push("/")} type="primary" key="console">
            Back Home
          </Button>
        ]}
      />
    </div>
  );
};

export default Data;
