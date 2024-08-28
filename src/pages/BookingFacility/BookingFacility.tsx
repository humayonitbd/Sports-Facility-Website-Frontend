import { useNavigate, useParams } from "react-router-dom";
import {
  Row,
  Col,
  Card,
  Typography,
  Image,
  TimePicker,
  Button,
  Space,
  Form,Grid
} from "antd";
import type { FormProps } from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";
import facilitiesApi from "../../redux/features/facility/facilityApi";
import CustomForm from "../../components/Form/CustomForm";
import CustomDatePicker from "../../components/Form/CustomDatePicker";
import { FieldValues } from "react-hook-form";
import moment from "moment";
import dayjs from "dayjs";
import availableTimeSlotsApi from "../../redux/features/availableTimeSlots/availableTimeSlotsApi";
import { useState } from "react";
import bookingApi from "../../redux/features/booking/bookingApi";
import { useAppSelector } from "../../redux/hooks";
import Swal from "sweetalert2";
import SmallLoading from "../../components/ui/SmallLoading";

const { Title, Text, Paragraph } = Typography;
const { useBreakpoint } = Grid;
const BookingFacility = () => {
    const screens = useBreakpoint();
  const { id: facilityId } = useParams();
  const user = useAppSelector((state) => state.auth.user);
  console.log("user login data", user);
  const navigate = useNavigate();
  const { data: singleFacility, isLoading } =
    facilitiesApi.useSingleFacilityGetQuery(facilityId);
  const [addBooking] = bookingApi.useAddBookingMutation();
  // console.log(singleFacility)
  const [currectDate, setCurrectDate] = useState("");
  const newDate = new Date();
  const formateNewDate = moment(newDate).format("YYYY-MM-DD");
  // console.log("formatNewDate", formateNewDate);

  const { data: availableSlots } =
    availableTimeSlotsApi.useGetAllAvailableTimeSlotsQuery([
      { name: "date", value: currectDate },
      { name: "facility", value: facilityId },
    ]);
  // console.log("availableSlots2", availableSlots2);
  const onSubmit = async (data: FieldValues) => {
    const date = moment(data.date).format("YYYY-MM-DD");
    setCurrectDate(date);
  };

  // console.log("availableTimeSlots", availableTimeSlots);
  const onFinish: FormProps<any>["onFinish"] = async (values) => {
    if (!user?.email) {
      Swal.fire({
        icon: "success",
        title: `You don't login user!!`,
        showConfirmButton: false,
        timer: 1000,
      });

      navigate("/login");
      return;
    }

    // console.log("you are login user!!");
    const startTime = values.startTime
      ? dayjs(values.startTime).format("HH:mm")
      : null;
    const endTime = values.endTime
      ? dayjs(values.endTime).format("HH:mm")
      : null;

    const bookingData = {
      startTime,
      endTime,
      facility: facilityId,
      date: currectDate ? currectDate : formateNewDate,
    };
    const res = await addBooking(bookingData).unwrap();
    if (res.success) {
      console.log(res);

      window.location.href = res.data.payment_url;
    } else {
      console.error("Order creation failed:", res.message);
    }
    console.log("bookingData", bookingData);
  };

  if (isLoading) {
    return <SmallLoading />;
  }

  return (
    <Row
      gutter={[32, 32]}
      style={{ padding: screens.md ? "60px 100px" : "40px 5px" }}
    >
      {/* Left Side - Facility Details */}
      <Col xs={24} md={14}>
        <Card
          hoverable
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
          <Paragraph style={{ fontSize: "17px" }}>
            <strong>Price Per Hour:</strong> $
            {singleFacility?.data?.pricePerHour}
          </Paragraph>
        </Card>
      </Col>

      {/* Right Side - Check Availability and Proceed to Pay */}
      <Col xs={24} md={10}>
        <Card
          style={{ borderRadius: "8px", overflow: "hidden", padding: "24px" }}
        >
          <Title level={4} style={{ marginBottom: "16px", color: "#0566FF" }}>
            Check Availability
          </Title>
          <div>
            <CustomForm onSubmit={onSubmit}>
              <Row style={{ display: "flex" }}>
                <Col span={20}>
                  <CustomDatePicker name="date" label="" />
                </Col>
                <Col span={4}>
                  <Button
                    style={{ padding: "18px 14px", marginLeft: "5px" }}
                    type="primary"
                    htmlType="submit"
                  >
                    Check
                  </Button>
                </Col>
              </Row>
            </CustomForm>
          </div>

          <div style={{ width: "100%", marginBottom: "20px" }}>
            <Title level={5} style={{ marginBottom: "10px", color: "#0566FF" }}>
              Available Slots
            </Title>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap", // Added to handle responsiveness
                gap: "10px",
              }}
            >
              {availableSlots?.data?.map((item, index) => (
                <div
                  key={index}
                  style={{
                    border: "1px solid #d9d9d9",
                    borderRadius: "8px",
                    padding: "10px 30px",
                    backgroundColor: "#f7f7f7",
                    // cursor: "pointer",
                    transition: "background-color 0.3s ease",
                    flex: "0 0 auto",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = "#e6f7ff")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "#f7f7f7")
                  }
                >
                  <Space>
                    <ClockCircleOutlined style={{ color: "#0566FF" }} />
                    <Text style={{ fontSize: "16px", fontWeight: "500" }}>
                      {item.startTime} - {item.endTime}
                    </Text>
                  </Space>
                </div>
              ))}
            </div>
          </div>

          <Form
            name="basic"
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Space
              size="large"
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Form.Item
                name="startTime"
                label={
                  <label style={{ color: "#0566FF", marginBottom: 0 }}>
                    Start Time
                  </label>
                }
                style={{ width: "100%" }}
              >
                <TimePicker
                  style={{
                    width: "100%",
                    transition: "background-color 0.3s ease",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    cursor: "pointer",
                    padding: "10px 30px",
                    border: "1px solid #0566FF",
                    marginTop: "0px",
                  }}
                  format="HH:mm"
                  placeholder="Start Time"
                />
              </Form.Item>
              <Form.Item
                name="endTime"
                label={
                  <label style={{ color: "#0566FF", marginBottom: 0 }}>
                    End Time
                  </label>
                }
                style={{ width: "100%" }}
              >
                <TimePicker
                  style={{
                    width: "100%",
                    transition: "background-color 0.3s ease",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    cursor: "pointer",
                    padding: "10px 30px",
                    border: "1px solid #0566FF",
                    marginTop: "0px",
                  }}
                  format="HH:mm"
                  placeholder="End Time"
                />
              </Form.Item>
            </Space>

            <Form.Item>
              <Button
                type="primary"
                style={{ padding: "20px 20px", width: "100%" }}
                htmlType="submit"
              >
                Proceed to Pay
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default BookingFacility;
