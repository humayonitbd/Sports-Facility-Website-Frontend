
import React, { useState, useEffect } from "react";
import { Card, Row, Col, Timeline, Typography } from "antd";
import {
  UserOutlined,
  SearchOutlined,
  CalendarOutlined,
  CreditCardOutlined,
  CheckCircleOutlined,
  SmileOutlined,
} from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const steps = [
  {
    title: "Sign Up or Log In",
    icon: <UserOutlined />,
    description:
      "Start by creating an account or logging into your existing one.",
  },
  {
    title: "Search for Your Service",
    icon: <SearchOutlined />,
    description:
      "Use the search bar to find the service or experience you’re looking for.",
  },
  {
    title: "Choose Date and Time",
    icon: <CalendarOutlined />,
    description: "Pick a date and time that works best for you.",
  },
  {
    title: "Make Payment",
    icon: <CreditCardOutlined />,
    description: "Complete your booking by making a secure payment.",
  },
  {
    title: "Receive Confirmation",
    icon: <CheckCircleOutlined />,
    description:
      "After payment, you’ll receive a booking confirmation via email or SMS.",
  },
  {
    title: "Enjoy Your Experience",
    icon: <SmileOutlined />,
    description:
      "On the day of your booking, enjoy the service or experience you’ve selected.",
  },
];

const HowItWorks = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
// backgroundColor: "#f2f7ff";
  return (
    <div
      style={{
        padding: "50px 0",
        background: "linear-gradient(360deg, #d1e3ff 0%, #e8f1ff 100%)",
      }}
    >
      <Title
        level={2}
        style={{ textAlign: "center", marginBottom: "50px", color: "#003180" }}
      >
        How It Works
      </Title>
      <Row justify="center">
        <Col xs={24} sm={22} md={20} lg={18}>
          <Timeline mode={isMobile ? "left" : "alternate"}>
            {steps.map((step, index) => (
              <Timeline.Item
                key={index}
                dot={
                  <div style={{ fontSize: "24px", color: "#0566FF" }}>
                    {step.icon}
                  </div>
                }
              >
                <Card
                  style={{
                    backgroundColor: "#ffffff",
                    padding: "20px",
                    borderRadius: "10px",
                    boxShadow: "0 6px 12px rgba(0, 86, 255, 0.2)",
                    borderLeft: "5px solid #003180",
                  }}
                  bordered={false}
                >
                  <Title level={4} style={{ color: "#003180" }}>
                    {step.title}
                  </Title>
                  <Paragraph style={{ color: "#003180", fontSize: "16px" }}>
                    {step.description}
                  </Paragraph>
                </Card>
              </Timeline.Item>
            ))}
          </Timeline>
        </Col>
      </Row>
    </div>
  );
};

export default HowItWorks;

