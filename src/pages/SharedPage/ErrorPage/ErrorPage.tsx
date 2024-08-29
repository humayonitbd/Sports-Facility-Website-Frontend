// eslint-disable-next-line no-unused-vars

import {  NavLink, useRouteError } from "react-router-dom";
import { Button, Typography, Spin, Row, Col } from "antd";


const { Title, Paragraph } = Typography;

const ErrorPage = () => {
  const error: any = useRouteError();

  return (
    <Row
      align="middle"
      justify="center"
      style={{
        height: "100vh",
        backgroundColor: "#f0f2f5",
        color: "#001529",
        textAlign: "center",
      }}
    >
      <Col span={24}>
        <div>
          {/* You can add an image here if needed */}
          {/* <img className="w-28" src={errorImage} alt="" /> */}
        </div>
        <div style={{ maxWidth: "600px", margin: "auto" }}>
          <Title level={1} style={{ fontSize: "96px", color: "#bfbfbf" }}>
            <span style={{ display: "none" }}>Error</span>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              4
              <Spin
                size="large"
                spinning
                style={{
                  width: "96px",
                  height: "96px",
                  borderWidth: "8px",
                  borderStyle: "dashed",
                  borderColor: "rgba(76, 175, 80, 0.25)",
                  margin: "0 16px",
                }}
              />
              4
            </div>
          </Title>
          <Paragraph
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              marginBottom: "16px",
            }}
          >
            Sorry, we could not find this page.
          </Paragraph>
          <Paragraph>{error?.statusText || error?.message}</Paragraph>
          <NavLink to="/">
            <Button
              type="primary"
              style={{ backgroundColor: "#0566FF", borderColor: "#0566FF", color:'white' }}
            >
              Back to home
            </Button>
          </NavLink>
        </div>
      </Col>
    </Row>
  );
};

export default ErrorPage;
