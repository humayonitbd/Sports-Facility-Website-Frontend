// import { Timeline, Typography, Row, Col } from "antd";

// const { Title, Paragraph } = Typography;

// const HistoryMilestones = () => {

//     const milestones = [
//       {
//         year: "2015",
//         event: "Platform Founded",
//       },
//       {
//         year: "2017",
//         event: "Reached 10,000 Users",
//       },
//       {
//         year: "2020",
//         event: "Expanded Globally",
//       },
//       // Add more milestones here
//     ];
//   return (
//     <div style={{ padding: "50px 20px", backgroundColor: "#f5f5f5" }}>
//       <Row justify="center">
//         <Col xs={24} sm={20} md={18} lg={16}>
//           <Title level={2} style={{ textAlign: "center", color: "#003180" }}>
//             Our Journey
//           </Title>
//           <Timeline mode="left">
//             {milestones.map((milestone, index) => (
//               <Timeline.Item key={index}>
//                 <Title level={4}>{milestone.year}</Title>
//                 <Paragraph>{milestone.event}</Paragraph>
//               </Timeline.Item>
//             ))}
//           </Timeline>
//         </Col>
//       </Row>
//     </div>
//   );
// };

// export default HistoryMilestones;

// import { Timeline, Typography, Row, Col } from "antd";
// import {
//   RocketOutlined,
//   UsergroupAddOutlined,
//   GlobalOutlined,
//   FileTextOutlined,
//   TrophyOutlined,
//   ClockCircleOutlined,
// } from "@ant-design/icons";
// import { CSSProperties } from "react";

// const { Title, Paragraph } = Typography;

// const milestones = [
//   {
//     year: "2015",
//     event: "Platform Founded",
//     icon: <RocketOutlined style={{ fontSize: "28px", color: "#ff5722" }} />,
//   },
//   {
//     year: "2017",
//     event: "Reached 10,000 Users",
//     icon: (
//       <UsergroupAddOutlined style={{ fontSize: "28px", color: "#4caf50" }} />
//     ),
//   },
//   {
//     year: "2020",
//     event: "Expanded Globally",
//     icon: <GlobalOutlined style={{ fontSize: "28px", color: "#2196f3" }} />,
//   },
//   {
//     year: "2021",
//     event: "Launched New Features",
//     icon: <FileTextOutlined style={{ fontSize: "28px", color: "#ff9800" }} />,
//   },
//   {
//     year: "2022",
//     event: "Awarded Best Innovation",
//     icon: <TrophyOutlined style={{ fontSize: "28px", color: "#ffc107" }} />,
//   },
//   {
//     year: "2023",
//     event: "Reached 50,000 Users",
//     icon: (
//       <ClockCircleOutlined style={{ fontSize: "28px", color: "#673ab7" }} />
//     ),
//   },
// ];

// const HistoryMilestones = () => {
//   // Define styles for the component
//   const containerStyle: CSSProperties = {
//     padding: "60px 20px",
//     background: "linear-gradient(135deg, #e0e0e0 0%, #ffffff 100%)", // Gradient background
//     color: "#333", // Dark text color for contrast
//   };

//   const titleStyle: CSSProperties = {
//     textAlign: "center",
//     color: "#333", // Dark text color for the title
//     marginBottom: "40px",
//     fontWeight: "bold",
//   };

//   const timelineStyle: CSSProperties = {
//     padding: "20px 0",
//   };

//   const timelineItemStyle: CSSProperties = {
//     borderRadius: "10px",
//     backgroundColor: "#fff", // White background for items
//     padding: "20px",
//     boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
//     position: "relative",
//     display: "flex",
//     alignItems: "center",
//     gap: "15px",
//   };

//   const yearStyle: CSSProperties = {
//     color: "#333", // Dark color for year
//     fontWeight: "bold",
//     fontSize: "20px",
//     marginBottom: "8px",
//   };

//   const eventStyle: CSSProperties = {
//     color: "#555", // Medium gray for event description
//     fontSize: "16px",
//   };

//   const dotStyle: CSSProperties = {
//     width: "40px",
//     height: "40px",
//     borderRadius: "50%",
//     background: "#333", // Dark color for dot
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     color: "#fff",
//     fontSize: "24px",
//     boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
//   };

//   return (
//     <div style={containerStyle}>
//       <Row justify="center">
//         <Col xs={24} sm={20} md={18} lg={16}>
//           <Title level={2} style={titleStyle}>
//             Our Journey
//           </Title>
//           <Timeline mode="left" style={timelineStyle}>
//             {milestones.map((milestone, index) => (
//               <Timeline.Item
//                 key={index}
//                 style={timelineItemStyle}
//                 dot={<div style={dotStyle}>{milestone.icon}</div>}
//               >
//                 <div>
//                   <Title level={4} style={yearStyle}>
//                     {milestone.year}
//                   </Title>
//                   <Paragraph style={eventStyle}>{milestone.event}</Paragraph>
//                 </div>
//               </Timeline.Item>
//             ))}
//           </Timeline>
//         </Col>
//       </Row>
//     </div>
//   );
// };

// export default HistoryMilestones;


import { Timeline, Typography, Row, Col } from "antd";
import {
  RocketOutlined,
  UsergroupAddOutlined,
  GlobalOutlined,
  FileTextOutlined,
  TrophyOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";
import { CSSProperties } from "react";

const { Title, Paragraph } = Typography;

const milestones = [
  {
    year: "2015",
    event: "Platform Founded",
    icon: <RocketOutlined style={{ fontSize: "28px", color: "#ff5722" }} />,
  },
  {
    year: "2017",
    event: "Reached 10,000 Users",
    icon: (
      <UsergroupAddOutlined style={{ fontSize: "28px", color: "#4caf50" }} />
    ),
  },
  {
    year: "2020",
    event: "Expanded Globally",
    icon: <GlobalOutlined style={{ fontSize: "28px", color: "#2196f3" }} />,
  },
  {
    year: "2021",
    event: "Launched New Features",
    icon: <FileTextOutlined style={{ fontSize: "28px", color: "#ff9800" }} />,
  },
  {
    year: "2022",
    event: "Awarded Best Innovation",
    icon: <TrophyOutlined style={{ fontSize: "28px", color: "#ffc107" }} />,
  },
  {
    year: "2023",
    event: "Reached 50,000 Users",
    icon: (
      <ClockCircleOutlined style={{ fontSize: "28px", color: "#673ab7" }} />
    ),
  },
];

const HistoryMilestones = () => {
  // Define styles for the component
  const containerStyle: CSSProperties = {
    padding: "60px 20px",
    background: "linear-gradient(180deg, #e8f1ff 0%, #a3c7ff 100%)", // Gradient background
    color: "#333", // Dark text color for contrast
  };

  const titleStyle: CSSProperties = {
    textAlign: "center",
    color: "#333", // Dark text color for the title
    marginBottom: "40px",
    fontWeight: "bold",
  };

  const timelineStyle: CSSProperties = {
    padding: "20px 0",
  };

  const timelineItemStyle: CSSProperties = {
    borderRadius: "10px",
    backgroundColor: "#fff", // White background for items
    padding: "20px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    position: "relative",
    display: "flex",
    alignItems: "center",
    gap: "15px",
  };

  const yearStyle: CSSProperties = {
    color: "#333", // Dark color for year
    fontWeight: "bold",
    fontSize: "20px",
    marginBottom: "8px",
  };

  const eventStyle: CSSProperties = {
    color: "#555", // Medium gray for event description
    fontSize: "16px",
  };

  const dotStyle: CSSProperties = {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    background: "#333", // Dark color for dot
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    fontSize: "24px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  };

  return (
    <div style={containerStyle}>
      <Row justify="center">
        <Col xs={24} sm={20} md={18} lg={16}>
          <Title level={2} style={titleStyle}>
            Our Journey
          </Title>
          <Timeline mode="alternate" style={timelineStyle}>
            {milestones.map((milestone, index) => (
              <Timeline.Item
                key={index}
                style={timelineItemStyle}
                dot={<div style={dotStyle}>{milestone.icon}</div>}
              >
                <div>
                  <Title level={4} style={yearStyle}>
                    {milestone.year}
                  </Title>
                  <Paragraph style={eventStyle}>{milestone.event}</Paragraph>
                </div>
              </Timeline.Item>
            ))}
          </Timeline>
        </Col>
      </Row>
    </div>
  );
};
  export default HistoryMilestones;
