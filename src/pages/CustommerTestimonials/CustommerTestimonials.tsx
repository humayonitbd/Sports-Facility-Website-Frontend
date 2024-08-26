import  { useRef } from "react";
import Slider from "react-slick";
import { Card, Typography, Button, Image, Row, Col } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa";
import img1 from "../../assets/testimonials image/08586a25-5872-4b47-97b4-5d74678b9877.jpg";
import img2 from "../../assets/testimonials image/63f2c383-900f-4c0a-a834-2f8ff941c8a1.jpg";
import img3 from "../../assets/testimonials image/c4a992b3-d10c-44b4-90dc-6bf5500d6e09.jpg";

// Sample data
const testimonials = [
  {
    id: 1,
    name: "John Doe",
    feedback: "Great facilities! Had an amazing time playing basketball.",
    rating: 5,
    img: img1,
  },
  {
    id: 2,
    name: "Jane Smith",
    feedback: "The booking process was seamless and the courts were top-notch.",
    rating: 4,
    img: img2,
  },
  {
    id: 3,
    name: "Michael Brown",
    feedback: "Fantastic experience. Will definitely book again.",
    rating: 5,
    img: img3,
  },
  {
    id: 4,
    name: "Michael Brown",
    feedback: "Fantastic experience. Will definitely book again.",
    rating: 5,
    img: img1,
  },
  {
    id: 5,
    name: "Michael Brown",
    feedback: "Fantastic experience. Will definitely book again.",
    rating: 5,
    img: img3,
  },
  // Add more testimonials as needed
];

const { Title, Paragraph } = Typography;

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 1200, // Extra large screens
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 992, // Medium screens (md)
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768, // Small screens (sm)
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 576, // Extra small screens (xs)
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const CustomerTestimonials = () => {
  const sliderRef = useRef<Slider>(null);

  const nextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const prevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= rating; i++) {
      stars.push(
        i <= rating ? (
          <FaStar key={i} style={{ color: "#012363" }} />
        ) : (
          <FaStar key={i} />
        )
      );
    }
    return stars;
  };

  return (
    <div
      className="testimonials-container"
      style={{
        width: "100%",
        margin: "0 auto",
        padding: "60px 0",
        position: "relative",
        backgroundColor: "#3d88ff",
      }}
    >
      <Title
        level={2}
        style={{ textAlign: "center", color: "#f5f9ff", marginBottom: "16px" }}
      >
        Our Customer Testimonials
      </Title>
      <Row justify="center">
        <Col xs={24} sm={20} md={18}>
          <Paragraph
            style={{
              fontSize: "16px",
              textAlign: "center",
              marginBottom: "40px",
              color: "#f2f7ff",
              padding: "0 20px",
            }}
          >
            We take pride in the experiences we provide for our customers.
            Below, you can read some of the heartfelt feedback we've received.
            These testimonials reflect the joy, satisfaction, and memories
            created at our facilities. We're committed to continuing to offer
            the best service possible and ensuring that every visit is a great
            experience.
          </Paragraph>
        </Col>
      </Row>
      <Slider {...settings} ref={sliderRef}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id}>
            <Card
              bordered={false}
              style={{
                backgroundColor: "#f5f9ff",
                borderRadius: "5px",
                padding: "20px",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                margin: "0 10px",
              }}
            >
              <Typography.Paragraph
                style={{
                  fontSize: "17px",
                  textAlign: "center",
                  color: "#001748",
                }}
              >
                {testimonial.feedback}
              </Typography.Paragraph>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div style={{ marginRight: "10px" }}>
                  <Image
                    alt={testimonial.name}
                    src={testimonial.img}
                    style={{
                      height: "50px",
                      width: "50px",
                      borderRadius: "100%",
                    }}
                    preview={false}
                  />
                </div>
                <div>
                  <Typography.Text strong style={{ textAlign: "start" }}>
                    {testimonial.name}
                  </Typography.Text>
                  <div>{renderStars(testimonial.rating)}</div>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </Slider>
      <div
        className="custom-arrow-container"
        style={{
          position: "absolute",
          top: "60%",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          transform: "translateY(-50%)",
        }}
      >
        <Button
          onClick={prevSlide}
          style={{
            background: "#5295ff",
            color: "#fff",
            border: "none",
            borderRadius: "50%",
            padding: "10px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
          }}
        >
          <LeftOutlined />
        </Button>
        <Button
          onClick={nextSlide}
          style={{
            background: "#5295ff",
            color: "#fff",
            border: "none",
            borderRadius: "50%",
            padding: "10px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
          }}
        >
          <RightOutlined />
        </Button>
      </div>
    </div>
  );
};

export default CustomerTestimonials;

