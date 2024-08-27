
import { Button, Typography, Image, Grid } from "antd";
import heroImg from "../../../assets//HeroSection image/hero_image-2.png";

const { Title, Paragraph } = Typography;
const { useBreakpoint } = Grid;

const HeroSection = () => {
    const screens = useBreakpoint();
    const contentPadding = screens.md ? "0 100px" : "0 0";
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "90vh",
        padding: contentPadding ,
        backgroundColor: "rgb(229, 239, 255)",

        // overflow: "hidden",
      }}
    >
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          color: "white",
          zIndex: 2,
          maxWidth: "50%",
        }}
      >
        <Title
          level={1}
          style={{ color: "#003180", fontSize: "50px", fontWeight: "700" }}
        >
          "Our best sports facility booking platform"
        </Title>
        <Paragraph
          style={{
            color: "#003180",
            fontSize: "1.25rem",
            marginBottom: "2rem",
          }}
        >
          Book your favorite sports facilities easily and efficiently. Whether
          it’s a game night or a training session, our platform ensures a
          seamless booking experience.
        </Paragraph>
        <Button
          type="primary"
          style={{
            backgroundColor: "#0566FF",
            borderColor: "#0566FF",
            color: "white",
            borderRadius: "5px",
            padding: "20px 2rem",
            fontSize: "1rem",
            fontWeight: "600",
            transition: "background-color 0.3s ease, border-color 0.3s ease",
            width: "50%",
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
        }}
      >
        <Image
          src={heroImg}
          alt="Hero"
          preview={false}
          style={{
            width: "100%",
            height: "100%",

            // filter: "brightness(0.6)", // Darken the image slightly for better text contrast
          }}
        />
      </div>
    </div>
  );
};

export default HeroSection;
