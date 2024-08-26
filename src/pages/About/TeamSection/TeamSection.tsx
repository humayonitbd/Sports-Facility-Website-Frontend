
import { Card, Row, Col, Typography, Avatar } from "antd";

import member1 from '../../../assets/Team-member/professional photo.png';
import member2 from '../../../assets/Team-member/Test_Image_1-removebg-preview.png';
import member3 from '../../../assets/testimonials image/08586a25-5872-4b47-97b4-5d74678b9877.jpg'
// import member2 from '../../../assets/testimonials image/c4a992b3-d10c-44b4-90dc-6bf5500d6e09.jpg'

const { Title, Paragraph } = Typography;

const TeamSection = () => {

    const teamMembers = [
      {
        name: "Humayon Forid",
        role: "Founder & CEO",
        image: member1,
        bio: "Humayon Forid has over 20 years of experience in the tech industry...",
      },
      {
        name: "Jane Smith",
        role: "Chief Technology Officer",
        image: member2,
        bio: "Jane leads our development team with a focus on innovation...",
      },
      {
        name: "John Doe",
        role: "It Manager",
        image: member3,
        bio: "John leads our It sector and all employment with a focus on innovation...",
      },
      // Add more team members here
    ];
    return (
      <div style={{ padding: "50px 5px", background: "#f2f7ff" }}>
        <Title
          level={2}
          style={{
            textAlign: "center",
            marginBottom: "50px",
            color: "#003180",
          }}
        >
          Meet the Team
        </Title>
        <Row justify="center" gutter={[16, 16]}>
          {teamMembers.map((member, index) => (
            <Col xs={24} sm={12} md={8} key={index}>
              <Card bordered={false} style={{ textAlign: "center" }}>
                <Avatar size={120} src={member.image} />
                <Title level={4} style={{ marginTop: "20px" }}>
                  {member.name}
                </Title>
                <Paragraph type="secondary" style={{ color: "#3D88FF" }}>
                  {member.role}
                </Paragraph>
                <Paragraph>{member.bio}</Paragraph>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    );
};

export default TeamSection;