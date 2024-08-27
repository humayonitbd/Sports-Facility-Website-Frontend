import { Card, Typography, Button, Row, Col, Grid } from "antd";
import { CalendarOutlined } from "@ant-design/icons";
import { GrLocation } from "react-icons/gr";

// Sample data for upcoming events
const events = [
  {
    id: 1,
    name: "City Basketball Tournament",
    date: "2024-09-15",
    location: "Central Park, City Center",
    description:
      "Join us for an exciting basketball tournament with teams from around the city.",
  },
  {
    id: 2,
    name: "Annual Tennis Championship",
    date: "2024-10-05",
    location: "Elite Tennis Club",
    description:
      "Compete in our annual tennis championship and show off your skills.",
  },
  {
    id: 3,
    name: "Summer Swimming Gala",
    date: "2024-11-01",
    location: "Olympic Swimming Pool",
    description: "Participate in our summer swimming gala and make a splash!",
  },
];

const { Title, Paragraph } = Typography;
const { useBreakpoint } = Grid;

const UpcomingEvents = () => {
  const screens = useBreakpoint();
  return (
    <div
      className="upcoming-events-container"
      style={{
        padding: screens.md ? "60px 100px" : "40px",
        backgroundColor: "#f2f7ff",
        marginBottom: "5px",
      }}
    >
      <Title
        level={2}
        style={{ textAlign: "center", marginBottom: "16px", color: "#003180" }}
      >
        Upcoming Events
      </Title>
      <Row justify="center">
        <Col xs={24} sm={20} md={18}>
          <Paragraph
            style={{
              fontSize: "16px",
              textAlign: "center",
              marginBottom: "40px",
              color: "#003180",
              padding: "0 20px",
            }}
          >
            Discover the latest sports events happening in our state-of-the-art
            facilities. From thrilling basketball tournaments to exciting
            swimming galas, our venues host a wide range of activities that
            cater to all skill levels. Join us to showcase your talents, enjoy
            the spirit of competition, and make unforgettable memories.
          </Paragraph>
        </Col>
      </Row>
      <Row gutter={[16, 16]} justify="center">
        {events.map((event) => (
          <Col key={event.id} xs={24} sm={12} md={8}>
            <Card
              bordered={false}
              style={{
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                padding: "20px",
                backgroundColor: "#ffffff",
                height: "100%",
              }}
            >
              <Title level={4}>{event.name}</Title>
              <Paragraph>
                <CalendarOutlined /> {event.date}
              </Paragraph>
              <Paragraph>
                <GrLocation style={{ fontSize: "17px", marginRight: "8px" }} />
                {event.location}
              </Paragraph>
              <Paragraph style={{ fontSize: "16px" }}>
                {event.description}
              </Paragraph>
              <Button type="primary">View Details</Button>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default UpcomingEvents;
