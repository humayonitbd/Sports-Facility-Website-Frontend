import { NavLink } from "react-router-dom";
import { Card, Button } from "antd";
const FacilityCard = ({facility}:any) => {
    return (
      <Card
        hoverable
        cover={
          <img
            alt={facility.name}
            src={facility.image}
            style={{ height: 200, objectFit: "cover" }}
          />
        }
        style={{
          width: 300,
          margin: "auto",
          marginTop: 16,
          borderRadius: "8px",
          overflow: "hidden",
        }}
      >
        <Card.Meta
          title={facility.name}
          description={
            <>
              <div>Price per hour: ${facility.pricePerHour}</div>
              <div>Location: {facility.location}</div>
            </>
          }
        />
        <NavLink to={`/facilities/${facility._id}`}>
          <Button type="primary" block style={{ marginTop: 16 }}>
            View Details
          </Button>
        </NavLink>
      </Card>
    );
};

export default FacilityCard;