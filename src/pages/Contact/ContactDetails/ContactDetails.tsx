
import { Layout, Card, Typography, Row, Col, Grid } from "antd";
import {
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;
const { Content } = Layout;
const { useBreakpoint } = Grid;

const ContactDetails = () => {
  const screens = useBreakpoint();
  return (
    <Layout
      style={{
        padding: screens.md ? "50px 80px" : "30px",
        backgroundColor: "#1A73FF",
        marginBottom: "5px",
      }}
    >
      <Content
        style={{ margin: "0 auto", padding: "20px", maxWidth: "1200px" }}
      >
        <Title
          level={2}
          style={{
            textAlign: "center",
            marginBottom: "40px",
            color: "#fff",
          }}
        >
          Get in Touch with Us
        </Title>
        <Row gutter={[100, 100]} justify="center">
          <Col xs={24} sm={12} md={8}>
            <Card
              bordered={false}
              style={{
                textAlign: "center",
                background: "#ffffff",
                borderRadius: "12px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease",
              }}
              bodyStyle={{ padding: "20px" }}
              hoverable
            >
              <PhoneOutlined
                style={{
                  fontSize: "36px",
                  color: "#1A73FF",
                  marginBottom: "16px",
                }}
              />
              <Text
                style={{
                  display: "block",
                  fontSize: "18px",
                  fontWeight: "500",
                  color: "#1A73FF",
                }}
              >
                Phone: (123) 456-7890
              </Text>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card
              bordered={false}
              style={{
                textAlign: "center",
                background: "#ffffff",
                borderRadius: "12px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease",
              }}
              bodyStyle={{ padding: "20px" }}
              hoverable
            >
              <MailOutlined
                style={{
                  fontSize: "36px",
                  color: "#1A73FF",
                  marginBottom: "16px",
                }}
              />
              <Text
                style={{
                  display: "block",
                  fontSize: "18px",
                  fontWeight: "500",
                  color: "#1A73FF",
                }}
              >
                Email: support@example.com
              </Text>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card
              bordered={false}
              style={{
                textAlign: "center",
                background: "#ffffff",
                borderRadius: "12px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease",
              }}
              bodyStyle={{ padding: "20px" }}
              hoverable
            >
              <EnvironmentOutlined
                style={{
                  fontSize: "36px",
                  color: "#1A73FF",
                  marginBottom: "16px",
                }}
              />
              <Text
                style={{
                  display: "block",
                  fontSize: "18px",
                  fontWeight: "500",
                  color: "#1A73FF",
                }}
              >
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
