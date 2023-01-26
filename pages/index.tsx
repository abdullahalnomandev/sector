import { Button, Checkbox, Divider, Form, Input, Select } from "antd";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import Data from "./data";
interface data {
  name: string;
  sector: String;
  isAgree: boolean;
}

const Home: NextPage = () => {
  const [data, setData] = useState({} as data);
  const [isSubmit, setIsSubmit] = useState(false);

  const router = useRouter();
  const onFinish = (values: any) => {
    setData(values);
  };
  if (data.name) {
    router.push(
      `/data?name=${data.name}&sector=${data.sector}&isActive=${data.isAgree}`
    );
  }
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  console.log("data", data);
  if (isSubmit) {
    return (
      <div>
        <Data data={data} />
      </div>
    );
  }

  return (
    <div>
      <Head>
        <title>Home | Sector Form </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Form
        onFinish={onFinish}
        layout="vertical"
        style={{
          margin: "auto",
          padding: "5%",
          boxShadow: "-10px 19px 68px 8px #ddd",
          borderRadius: "10px",
          marginTop: "5%",
          maxWidth: 550
        }}
      >
        <Divider>
          <p style={{ fontSize: "13px" }}>
            {" "}
            Please enter your name and pick the Sectors{" "}
          </p>
        </Divider>

        <Form.Item
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please Provide your Name!"
            }
          ]}
        >
          <Input placeholder="Your name" />
        </Form.Item>
        <Form.Item
          label="Sectors"
          name="sector"
          rules={[
            {
              required: true,
              message: "Please Select a sector !"
            }
          ]}
        >
          <Select
            defaultValue="Manufacturing"
            style={{
              width: "100%"
            }}
            onChange={handleChange}
            options={[
              {
                label: "Manufacturing",
                options: [
                  {
                    key: "1-1",
                    label: "Construction materials",
                    value: "Construction materials"
                  },
                  {
                    key: "1-2",
                    label: "Electronics and Optics",
                    value: "Electronics and Optics"
                  },
                  {
                    key: "1-3",
                    label: "Food and Beverage",
                    value: "Food and Beverage"
                  },
                  {
                    key: "1-4",
                    label: " confectionery products",
                    value: " confectionery products"
                  }
                ]
              },
              {
                label: "Beverages",
                options: [
                  {
                    key: "2-1",
                    label: "fish products",
                    value: "fish products"
                  },
                  {
                    key: "2-2",
                    label: " meat products",
                    value: " meat products"
                  },
                  {
                    key: "2-3",
                    label: "dairy",
                    value: "dairy"
                  }
                ]
              },
              {
                label: "Other",
                options: [
                  {
                    key: "3-1",
                    label: " snack food",
                    value: " snack food"
                  },
                  {
                    key: "3-2",
                    label: "Children’s room",
                    value: "Children’s room"
                  },
                  {
                    key: "3-4",
                    label: "Kitchen",
                    value: "Kitchen"
                  }
                ]
              },
              {
                label: "Other  (Furniture)",
                options: [
                  {
                    key: "4-1",
                    label: " Outdoor",
                    value: " Outdoor"
                  },
                  {
                    key: "4-2",
                    label: "Project furniture",
                    value: "Project furniture"
                  },
                  {
                    key: "4-4",
                    label: "Machinery",
                    value: "Machinery"
                  }
                ]
              }
            ]}
          />
        </Form.Item>

        <Form.Item
          name="isAgree"
          valuePropName="checked"
          rules={[
            {
              required: true,
              message: "Please make agree!"
            }
          ]}
        >
          <Checkbox>Agree to terms</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
            Save
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Home;
