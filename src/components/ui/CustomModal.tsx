import { useState } from "react";
import { Button, Modal, Divider, Typography, Row, Col } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import bookingApi from "../../redux/features/booking/bookingApi";

const { Title, Paragraph } = Typography;

const CustomModal = ({ bookingId }: { bookingId: string }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch the single booking data
  const { data: singleBooking } =
    bookingApi.useGetUserSingleBookingsQuery(bookingId);

  // Show the modal
  const showModal = () => {
    setIsModalOpen(true);
  };

  // Handle modal cancel
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button icon={<EyeOutlined />} onClick={showModal}>
        View Details
      </Button>
      <Modal
        title="Booking Details"
        open={isModalOpen}
        onCancel={handleCancel}
        width={900}
        footer={
          <Button type="primary" onClick={handleCancel}>
            Cancel
          </Button>
        }
        // closable={false}
      >
        {singleBooking?.data ? (
          <>
            <Row gutter={16}>
              <Col xs={24} md={12}>
                <Title level={4}>Booking Information</Title>
                <Paragraph>
                  <strong>Date:</strong> {singleBooking?.data?.date}
                </Paragraph>
                <Paragraph>
                  <strong>Start Time:</strong> {singleBooking?.data?.startTime}
                </Paragraph>
                <Paragraph>
                  <strong>End Time:</strong> {singleBooking?.data?.endTime}
                </Paragraph>
                <Paragraph>
                  <strong>Booking Status:</strong> {singleBooking?.data?.isBooked}
                </Paragraph>
                <Paragraph>
                  <strong>Payment Status:</strong>{" "}
                  {singleBooking?.data?.paymentStatus}
                </Paragraph>
                <Paragraph>
                  <strong>Transaction ID:</strong>{" "}
                  {singleBooking?.data?.transactionId}
                </Paragraph>
              </Col>
              <Col xs={24} md={12}>
                <Title level={4}>User Information</Title>
                <Paragraph>
                  <strong>Name:</strong> {singleBooking?.data?.user?.name}
                </Paragraph>
                <Paragraph>
                  <strong>Email:</strong> {singleBooking?.data?.user?.email}
                </Paragraph>
                <Paragraph>
                  <strong>Phone:</strong> {singleBooking?.data?.user?.phone}
                </Paragraph>
                <Paragraph>
                  <strong>Address:</strong> {singleBooking?.data?.user?.address}
                </Paragraph>
                
              </Col>
            </Row>
            <Divider />
            <Row gutter={16}>
              <Col xs={24} md={12}>
                <Title level={4}>Facility Information</Title>
                <Paragraph>
                  <strong>Name:</strong> {singleBooking?.data?.facility?.name}
                </Paragraph>
                <Paragraph>
                  <strong>Description:</strong>{" "}
                  {singleBooking?.data?.facility?.description}
                </Paragraph>
                <Paragraph>
                  <strong>Location:</strong>{" "}
                  {singleBooking?.data?.facility?.location}
                </Paragraph>
                <Paragraph>
                  <strong>Price per Hour:</strong> $
                  {singleBooking?.data?.facility?.pricePerHour}
                </Paragraph>
              </Col>
              <Col xs={24} md={12}>
                <img
                  src={singleBooking?.data?.facility?.image}
                  alt="Facility"
                  style={{ width: "100%", height: "auto", maxHeight: 200 }}
                />
              </Col>
            </Row>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </Modal>
    </>
  );
};

export default CustomModal;
