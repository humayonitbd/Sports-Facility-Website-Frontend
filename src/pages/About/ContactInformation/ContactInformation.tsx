import { Typography, Row, Col } from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const ContactInformation = () => {
  return (
    <div
      style={{
        padding: "50px 20px",
        background: "#2c79ff",
        marginBottom: "5px",
      }}
    >
      <Row justify="center">
        <Col xs={24} sm={20} md={18} lg={16}>
          <Title level={2} style={{ textAlign: "center", color: "#f2f7ff" }}>
            Contact Us
          </Title>
          <Paragraph
            style={{ textAlign: "center", fontSize: "18px", color: "#f2f7ff" }}
          >
            Have any questions? We’d love to hear from you.
          </Paragraph>
          <Row gutter={[16, 16]} justify="center">
            <Col xs={24} sm={8}>
              <div style={{ textAlign: "center" }}>
                <EnvironmentOutlined
                  style={{ fontSize: "24px", color: "#f2f7ff" }}
                />
                <Paragraph style={{ marginTop: "10px", color: "#f2f7ff" }}>
                  123 Main Street, City, Country
                </Paragraph>
              </div>
            </Col>
            <Col xs={24} sm={8}>
              <div style={{ textAlign: "center" }}>
                <PhoneOutlined style={{ fontSize: "24px", color: "#f2f7ff" }} />
                <Paragraph style={{ marginTop: "10px", color: "#f2f7ff" }}>
                  +123 456 7890
                </Paragraph>
              </div>
            </Col>
            <Col xs={24} sm={8}>
              <div style={{ textAlign: "center" }}>
                <MailOutlined style={{ fontSize: "24px", color: "#f2f7ff" }} />
                <Paragraph style={{ marginTop: "10px", color: "#f2f7ff" }}>
                  info@yourcompany.com
                </Paragraph>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default ContactInformation;
