import {
  Row,
  Col,
  Card,
  Typography,
  Progress,
  List,
  Avatar,
  Divider,
} from "antd";
import {
  BarChartOutlined,
  CheckCircleOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import { useAppSelector } from "../../../../redux/hooks";
import authApi from "../../../../redux/features/auth/authApi";
import moment from "moment";

const { Title, Text } = Typography;

const AdminDashboard = () => {
  const user = useAppSelector((state) => state.auth.user);
  const { data: userData } = authApi.useUserGetQuery(user?.userId);
  console.log("user Data", userData?.data);
  const activities = [
    {
      title: "Completed task: Design homepage",
      date: "Today",
    },
    {
      title: "Meeting with team",
      date: "Yesterday",
    },
    {
      title: "Updated user profile",
      date: "Last Week",
    },
  ];

  return (
    <div style={{ padding: "24px", background: "#f2f7ff" }}>
      <Title level={3} style={{ marginBottom: "24px" }}>
        Dashboard Overview
      </Title>
      <Row
        gutter={16}
        style={{
          marginBottom: "24px",
          boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
          borderRadius: "10px",
          background: "#fff",
        }}
      >
        <Col
          xs={24}
          md={24}
          style={{ display: "flex", alignItems: "center", padding: "10px" }}
        >
          <div>
            {userData?.data ? (
              <>
                <Text style={{ color: "#0045B3" }}>
                  Today is{" "}
                  {moment(new Date().toLocaleDateString()).format("LL")}
                </Text>
                <Title
                  level={2}
                  style={{ textAlign: "center", marginBottom: "8px" }}
                >
                  Welcome,{" "}
                  <span style={{ color: "#0045B3" }}>
                    {userData?.data?.name}!
                  </span>
                </Title>
                <p
                  style={{
                    marginTop: "16px",
                    fontSize: "16px",
                    textAlign: "center",
                    padding: "0px 50px",
                  }}
                >
                  This is your personalized dashboard where you can find your
                  profile updates, task overview, and upcoming events. Stay on
                  top of your activities and manage your tasks efficiently.
                </p>
              </>
            ) : (
              <Title
                level={2}
                style={{ textAlign: "left", marginBottom: "8px" }}
              >
                Loading...
              </Title>
            )}
          </div>
        </Col>
      </Row>

      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} md={8}>
          <Card
            title="Profile Completion"
            bordered={false}
            style={{
              borderRadius: "8px",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
            }}
            extra={<CheckCircleOutlined style={{ color: "green" }} />}
          >
            <Progress percent={80} status="active" />
            <Text>
              Your profile is 80% complete. Update your profile to get more
              visibility.
            </Text>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card
            title="Tasks Overview"
            bordered={false}
            style={{
              borderRadius: "8px",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
            }}
            extra={<BarChartOutlined style={{ color: "#1890ff" }} />}
          >
            <Text>Completed: 5/10 tasks</Text>
            <Progress percent={50} />
            <Text>Keep up the good work! You’re halfway there.</Text>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card
            title="Upcoming Events"
            bordered={false}
            style={{
              borderRadius: "8px",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
            }}
            extra={<CalendarOutlined style={{ color: "#ff4d4f" }} />}
          >
            <Text style={{ display: "block" }}>Next event: Team Meeting</Text>
            <Text type="secondary"> August 30, 2024</Text>
          </Card>
        </Col>
      </Row>

      <Divider style={{ margin: "24px 0" }} />

      <Row gutter={[16, 16]}>
        <Col xs={24} sm={24} md={12}>
          <Card
            title="Recent Activities"
            bordered={false}
            style={{
              borderRadius: "8px",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <List
              itemLayout="horizontal"
              dataSource={activities}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar icon={<CheckCircleOutlined />} />}
                    title={item.title}
                    description={item.date}
                  />
                </List.Item>
              )}
            />
          </Card>
        </Col>

        <Col xs={24} sm={24} md={12}>
          <Card
            title="Performance Overview"
            bordered={false}
            style={{
              borderRadius: "8px",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Row gutter={[8, 8]}>
              <Col span={12}>
                <Progress
                  type="circle"
                  percent={75}
                  format={(percent) => `${percent}%`}
                  strokeColor={{
                    "0%": "#108ee9",
                    "100%": "#87d068",
                  }}
                />
                <Text
                  style={{
                    display: "block",
                    marginTop: "12px",
                    textAlign: "center",
                  }}
                >
                  Task Completion
                </Text>
              </Col>
              <Col span={12}>
                <Progress
                  type="circle"
                  percent={60}
                  format={(percent) => `${percent}%`}
                  strokeColor={{
                    "0%": "#ff4d4f",
                    "100%": "#ff7a45",
                  }}
                />
                <Text
                  style={{
                    display: "block",
                    marginTop: "12px",
                    textAlign: "center",
                  }}
                >
                  Event Attendance
                </Text>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default AdminDashboard;
