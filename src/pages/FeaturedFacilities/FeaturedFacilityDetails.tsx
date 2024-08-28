import { NavLink, useParams } from "react-router-dom";
import { Row, Col, Card, Typography, Image, Grid, Button } from "antd";
import facilitiesApi from "../../redux/features/facility/facilityApi";
import SmallLoading from "../../components/ui/SmallLoading";
import {useState} from "react";

const { Title, Paragraph } = Typography;
const { useBreakpoint } = Grid;

const FeaturedFacilityDetails = () => {
  const { id: facilityId } = useParams();
  const [facilitynewId, setFacilitynewId] = useState(facilityId);
  const screens = useBreakpoint();

  // Fetch single facility and all facilities data
  const { data: singleFacility, isLoading: isSingleLoading } =
    facilitiesApi.useSingleFacilityGetQuery(facilitynewId);
  const { data: allFacilities, isLoading: isAllFacilitiesLoading } =
    facilitiesApi.useGetAllFacilitiesQuery(null);

  if (isSingleLoading || isAllFacilitiesLoading) {
    return <SmallLoading />;
  }

  const handleFacilityViewDetails=(id:string)=>{
    setFacilitynewId(id);

  }

  const commonFacilityadvantages = [
    {
      id: 1,
      title: "1. Comprehensive Facility Portfolio",
      details:
        "Your company provides a wide range of facilities, from swimming pools to tennis courts, ensuring that clients have access to the specific sports or activities they are interested in.",
    },
    {
      id: 2,
      title: "2. High-Quality Infrastructure",
      details:
        "All facilities are equipped with modern, high-quality infrastructure, including well-maintained surfaces, advanced equipment, and appropriate safety features. ",
    },
    {
      id: 3,
      title: "3. Professional Management and Maintenance",
      details:
        "Your company employs skilled professionals to manage and maintain the facilities. This includes ensuring cleanliness, safety, and the proper functioning of equipment, which contributes to a smooth and enjoyable experience for all users.",
    },
  ];


  return (
    <Row
      gutter={[32, 32]}
      style={{ padding: screens.md ? "60px 100px" : "40px 5px" }}
    >
      {/* Left Side - Facility Details */}
      <Col xs={24} md={16}>
        <Card
          cover={
            <Image
              alt={singleFacility?.data?.name}
              src={singleFacility?.data?.image}
              style={{
                height: "400px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
          }
          style={{ borderRadius: "8px", overflow: "hidden" }}
          bodyStyle={{ padding: "24px" }}
        >
          <Title level={2}>{singleFacility?.data?.name}</Title>
          <Paragraph style={{ fontSize: "17px" }}>
            <strong>Location:</strong> {singleFacility?.data?.location}
          </Paragraph>
          <Paragraph style={{ fontSize: "17px", lineHeight: "2px" }}>
            <strong>Price Per Hour:</strong> $
            {singleFacility?.data?.pricePerHour}
          </Paragraph>
          <Title level={5} style={{ lineHeight: "8px", marginTop:'30px' }}>
            Description:
          </Title>
          <Paragraph style={{ fontSize: "17px" }}>
            {singleFacility?.data?.description}
          </Paragraph>
          <div style={{fontSize:'17px'}}>
            <div>
              {commonFacilityadvantages?.map((companyFacility) => (
                <div key={companyFacility.id}>
                  <h4>{companyFacility.title}</h4>
                  <p>{companyFacility.details}</p>
                </div>
              ))}
            </div>
            <h4></h4>
          </div>
          <NavLink to={`/booking/facility/${singleFacility?.data._id}`}>
            <Button type="primary" block style={{ marginTop: '10px', padding:"20px 0px" , fontSize:"17px" }}>
              Book Now
            </Button>
          </NavLink>
        </Card>
      </Col>

      {/* Right Side - Other Facilities */}
      <Col xs={24} md={8}>
        <Row gutter={[16, 16]}>
          {allFacilities?.data?.slice(0, 3)?.map((facility: any) => (
            <Col key={facility._id} xs={24} sm={24} md={24} lg={24}>
              <Card
                cover={
                  <img
                    alt={facility.name}
                    src={facility.image}
                    style={{ height: 200, objectFit: "cover" }}
                  />
                }
                style={{
                  width: "100%",
                  margin: "auto",
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
                <Button
                  onClick={() => handleFacilityViewDetails(facility._id)}
                  type="primary"
                  block
                  style={{ marginTop: 16 }}
                >
                  View Details
                </Button>
              </Card>
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
};

export default FeaturedFacilityDetails;
