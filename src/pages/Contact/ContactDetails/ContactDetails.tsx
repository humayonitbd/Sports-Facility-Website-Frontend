import React from "react";
import { Layout, Card, Typography, Row, Col } from "antd";
import {
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;
const { Content } = Layout;

const ContactDetails = () => {
  return (
    <Layout
      style={{
        padding: "24px",
        backgroundColor: "#468aff",
        marginBottom: "5px",
      }}
    >
      <Content
        style={{ margin: "0 auto", padding: "20px", maxWidth: "1200px" }}
      >
        <Title
          level={2}
          style={{ textAlign: "center", marginBottom: "40px", color: "#f2f7ff" }}
        >
          Contact With Company
        </Title>
        <Row gutter={32}>
          {" "}
          {/* Increased gutter value */}
          <Col xs={24} sm={12} md={8} style={{ marginBottom: "16px" }}>
            {" "}
            {/* Adjusted bottom margin */}
            <Card
              title="Phone"
              bordered={false}
              style={{
                textAlign: "center",
                background: "#ffffff",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
              }}
              bodyStyle={{ padding: "16px" }}
            >
              <PhoneOutlined style={{ fontSize: "32px", color: "#1890ff" }} />
              <Text style={{ display: "block", marginTop: "10px" }}>
                Phone: (123) 456-7890
              </Text>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8} style={{ marginBottom: "16px" }}>
            {" "}
            {/* Adjusted bottom margin */}
            <Card
              title="Email"
              bordered={false}
              style={{
                textAlign: "center",
                background: "#ffffff",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
              }}
              bodyStyle={{ padding: "16px" }}
            >
              <MailOutlined style={{ fontSize: "32px", color: "#1890ff" }} />
              <Text style={{ display: "block", marginTop: "10px" }}>
                Email: support@example.com
              </Text>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8} style={{ marginBottom: "16px" }}>
            {" "}
            {/* Adjusted bottom margin */}
            <Card
              title="Address"
              bordered={false}
              style={{
                textAlign: "center",
                background: "#ffffff",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
              }}
              bodyStyle={{ padding: "16px" }}
            >
              <EnvironmentOutlined
                style={{ fontSize: "32px", color: "#1890ff" }}
              />
              <Text style={{ display: "block", marginTop: "10px" }}>
                Address: 123 Main Street, City, Country
              </Text>
            </Card>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default ContactDetails;
