
import { useParams } from 'react-router-dom';
import facilitiesApi from '../../../../../redux/features/facility/facilityApi';
import SmallLoading from '../../../../../components/ui/SmallLoading';
import { Row, Col, Card, Typography, Image, Grid } from "antd";


const { useBreakpoint } = Grid;
const { Title, Paragraph } = Typography;

const FacilityDetails = () => {
     const screens = useBreakpoint();
    const {id} = useParams();
     const { data: singleFacility, isLoading: isSingleLoading } =
       facilitiesApi.useSingleFacilityGetQuery(id);

        if (isSingleLoading) {
          return <SmallLoading />;
        }
    return (
      <div>
        <Row
          gutter={[32, 32]}
          style={{ padding: screens.md ? "60px 100px" : "40px 5px" }}
        >
          <Col xs={24} md={24}>
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
              <Title level={5} style={{ lineHeight: "8px", marginTop: "30px" }}>
                Description:
              </Title>
              <Paragraph style={{ fontSize: "17px" }}>
                {singleFacility?.data?.description}
              </Paragraph>
             
            </Card>
          </Col>
        </Row>
      </div>
    );
};

export default FacilityDetails;