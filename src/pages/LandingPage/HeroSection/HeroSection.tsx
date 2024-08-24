import { Col, Image, Row } from "antd";
import heroImage from "../../../assets/HeroSection image/hero secton image.jpg";
import heroImage2 from "../../../assets/login images/logn image.jpg";
import CustomButton from "../../../components/ui/CustomButton";

const HeroSection = () => {
  return (
    <div style={{ height: "600px", overflow: "hidden" }}>
      <Row gutter={24} style={{ position: "relative", height: "100%" }}>
        <Col
          span={24}
          style={{ position: "relative", height: "100%", padding: 0 }}
        >
          <Image
            src={heroImage}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "brightness(70%)",
              padding: 0,
              margin: 0,
            }}
            preview={false}
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              //   backgroundColor: "rgba(0, 89, 230, 0.8)",
              backgroundColor: "rgba(0, 89, 230, 0.7)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              color: "#fff",
              textAlign: "center",
              padding: "20px",
              margin: 0,
            }}
          >
            <h2 style={{ fontSize: "36px", marginBottom: "10px" }}>
              Elevate Your Game at Our World-Class Facility
            </h2>
            <p style={{ fontSize: "18px", maxWidth: "600px" }}>
              Discover the ultimate destination for athletes of all levels. Our
              state-of-the-art facility offers cutting-edge equipment,
              professional coaching, and a supportive community. Whether you're
              training for your next competition or just staying fit, we provide
              the perfect environment to reach your goals.
            </p>
            <div style={{ marginTop: "16px" }}>
              <CustomButton backgroundColor="white" textColor="#0566FF">
                Book Now
              </CustomButton>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default HeroSection;
