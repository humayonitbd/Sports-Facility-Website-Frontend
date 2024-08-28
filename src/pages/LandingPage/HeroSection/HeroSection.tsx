import { Button, Typography, Image, Grid } from "antd";
import heroImg from "../../../assets//HeroSection image/hero_image-2.png";
import { NavLink } from "react-router-dom";

const { Title, Paragraph } = Typography;
const { useBreakpoint } = Grid;

const HeroSection = () => {
  const screens = useBreakpoint();
  const contentPadding = screens.md ? "0 100px" : "0 20px";
  const isMobile = !screens.md;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        alignItems: "center",
        justifyContent: "space-between",
        height: "90vh",
        padding: contentPadding,
        backgroundColor: "rgb(229, 239, 255)",
        textAlign: isMobile ? "center" : "left",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          color: "#003180",
          zIndex: 2,
          maxWidth: isMobile ? "100%" : "50%",
          textAlign: isMobile ? "center" : "left",
        }}
      >
        <Title
          level={1}
          style={{
            color: "#003180",
            fontSize: isMobile ? "36px" : "50px",
            fontWeight: "700",
            margin: "0",
          }}
        >
          "Our best sports facility booking platform"
        </Title>
        <Paragraph
          style={{
            color: "#003180",
            fontSize: isMobile ? "1rem" : "1.25rem",
            marginBottom: "2rem",
            marginTop: isMobile ? "1rem" : "2rem",
          }}
        >
          Book your favorite sports facilities easily and efficiently. Whether
          it’s a game night or a training session, our platform ensures a
          seamless booking experience.
        </Paragraph>
        <NavLink to="/facilities">
          <Button
            type="primary"
            style={{
              backgroundColor: "#0566FF",
              borderColor: "#0566FF",
              color: "white",
              borderRadius: "5px",
              padding: isMobile ? "10px 1rem" : "20px 2rem",
              fontSize: isMobile ? "0.875rem" : "1rem",
              fontWeight: "600",
              transition: "background-color 0.3s ease, border-color 0.3s ease",
              width: isMobile ? "100%" : "50%",
              margin: isMobile ? "0 auto " : "0 0",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#004db3"; // Darker shade on hover
              e.currentTarget.style.borderColor = "#004db3";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#0566FF"; // Original color
              e.currentTarget.style.borderColor = "#0566FF";
            }}
          >
            Book Now
          </Button>
        </NavLink>
      </div>
      <div
        style={{
          flex: 1,
          position: "relative",
          height: "100%",
          overflow: "hidden",
          zIndex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: isMobile ? "20px" : "0",
          paddingBottom: isMobile ? "100px" : "0",
        }}
      >
        <Image
          src={heroImg}
          alt="Hero"
          preview={false}
          style={{
            width: "100%",
            height: isMobile ? 'auto': "650px",
            maxHeight: "100%",
            objectFit: "cover",
          }}
        />
      </div>
    </div>
  );
};

export default HeroSection;
