import { useParams } from "react-router-dom";
import { Card, Typography, Space, Image } from "antd";
import upcomingImage from "../../assets/UpcomingEventImg/upcoming-image.jpg";


const events = [
  {
    id: "sadffaf2f5af5a5faf",
    name: "City Basketball Tournament",
    date: "2024-09-15",
    location: "Central Park, City Center",
    description:
      "Join us for an exciting basketball tournament with teams from around the city.",
  },
  {
    id: "dfafafaf54fa2faf5fa2f",
    name: "Annual Tennis Championship",
    date: "2024-10-05",
    location: "Elite Tennis Club",
    description:
      "Compete in our annual tennis championship and show off your skills.",
  },
  {
    id: "ff25f4f8f7af5fafafd",
    name: "Summer Swimming Gala",
    date: "2024-11-01",
    location: "Olympic Swimming Pool",
    description: "Participate in our summer swimming gala and make a splash!",
  },
];
const { Title, Paragraph } = Typography;
const UpcomingEventsDetails = () => {
    const {id} = useParams();

    const event = events.find((item:any)=> item.id === id);
    console.log("event", event);
    if (!event) {
      return <div>Event not found</div>;
    }
    return (
      <div style={{ padding: "20px", maxWidth: "1000px", margin: "0 auto" }}>
        <Card
          cover={
            <Image
              alt="upcomming-image"
              src={upcomingImage}
              style={{
                height: "400px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
          }
          style={{
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Space direction="vertical" size="middle" style={{ width: "100%" }}>
            <Title level={2}>{event.name}</Title>
            <Paragraph>
              <strong>Date:</strong> {new Date(event.date).toLocaleDateString()}
            </Paragraph>
            <Paragraph>
              <strong>Location:</strong> {event.location}
            </Paragraph>
            <Paragraph>{event.description}</Paragraph>
          </Space>
        </Card>
      </div>
    );
};

export default UpcomingEventsDetails;