import { NavLink } from "react-router-dom";
import facilitiesApi from "../../redux/features/facility/facilityApi";
import { Card, Row, Col, Image, Typography,Grid } from "antd";
import SmallLoading from "../../components/ui/SmallLoading";

const { Meta } = Card;
const { Title } = Typography;
const { useBreakpoint } = Grid;
const FeaturedFacilities = () => {
  const screens = useBreakpoint();
    const {data:facilities, isLoading} = facilitiesApi.useGetAllFacilitiesQuery(null);
    if (isLoading) {
      return <SmallLoading />;
    }
    return (
      <div
        style={{
          padding: screens.md ? "60px 100px" : "40px 5px",
          backgroundColor: "#f2f7ff",
          borderBottom: "5px solid #fff",
        }}
      >
        <Title
          level={2}
          style={{
            textAlign: "center",
            marginBottom: "40px",
            color: "#003180",
          }}
        >
          Our Featured Facilities
        </Title>
        <Row gutter={[16, 16]}>
          {facilities?.data?.slice(0, 4)?.map((facility, index) => (
            <Col xs={24} sm={12} md={12} lg={6} key={index}>
              <NavLink to={`/facilities/${facility._id}`}>
                <Card
                  hoverable
                  cover={
                    <Image
                      alt={facility.name}
                      src={facility.image}
                      style={{ height: "200px", objectFit: "cover" }}
                      preview={false}
                    />
                  }
                  style={{
                    borderRadius: "10px",
                    overflow: "hidden",
                    border: `1px solid #0566FF`,
                  }}
                  bodyStyle={{ padding: "20px" }}
                >
                  <Meta
                    title={
                      <span style={{ color: "#0566FF" }}>{facility.name}</span>
                    }
                    description={facility.description.slice(0, 80)}
                    style={{ textAlign: "center" }}
                  />
                </Card>
              </NavLink>
            </Col>
          ))}
        </Row>
      </div>
    );
};

export default FeaturedFacilities;