import { Typography, Row, Col } from "antd";

const { Title, Paragraph } = Typography;


const MissionStatement = () => {
  return (
    <div style={{ padding: "50px 20px", backgroundColor: "#3d88ff" }}>
      <Row justify="center">
        <Col xs={24} sm={20} md={18} lg={16}>
          <Title level={2} style={{ textAlign: "center", color: "#f2f7ff" }}>
            Our Mission
          </Title>
          <Paragraph
            style={{ textAlign: "center", color: "#f2f7ff", fontSize: "18px" }}
          >
            Our mission is to empower individuals and businesses by providing an
            innovative platform that connects people with the services they
            need, fostering growth and enriching lives through meaningful
            interactions.
          </Paragraph>
        </Col>
      </Row>
    </div>
  );
};

export default MissionStatement;
