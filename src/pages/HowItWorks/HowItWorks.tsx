
// import React from "react";
// import ReactFlow, {
//   MiniMap,
//   Controls,
//   Background,
//   MarkerType,
// } from "reactflow";
// import {
//   UserOutlined,
//   SearchOutlined,
//   CalendarOutlined,
//   CreditCardOutlined,
//   CheckCircleOutlined,
//   SmileOutlined,
//   RightOutlined,
// } from "@ant-design/icons";
// import "reactflow/dist/style.css";

// // Custom Node Component
// const CustomNode = ({ data }:any) => {
//   return (
//     <div style={nodeContainerStyles}>
//       <div style={iconContainerStyles}>{data.icon}</div>
//       <div style={contentContainerStyles}>
//         <h4 style={titleStyles}>{data.title}</h4>
//         <p style={descriptionStyles}>{data.description}</p>
//       </div>
//     </div>
//   );
// };

// // Styles
// const nodeContainerStyles = {
//   backgroundColor: "#f4faff",
//   border: "2px solid #2196F3",
//   borderRadius: "12px",
//   padding: "20px",
//   boxShadow: "0 8px 16px rgba(0, 0, 0, 0.15)",
//   width: "220px",
//   textAlign: "center",
//   transition: "transform 0.2s ease-in-out",
// };

// const iconContainerStyles = {
//   fontSize: "32px",
//   color: "#2196F3",
//   marginBottom: "10px",
// };

// const contentContainerStyles = {
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
// };

// const titleStyles = {
//   fontSize: "18px",
//   color: "#003180",
//   margin: "0",
// };

// const descriptionStyles = {
//   fontSize: "14px",
//   color: "#555",
//   marginTop: "8px",
// };

// // Node and Edge Definitions
// const nodes = [
//   {
//     id: "1",
//     position: { x: 50, y: 50 },
//     data: {
//       title: "Sign Up or Log In",
//       icon: <UserOutlined />,
//       description:
//         "Start by creating an account or logging into your existing one.",
//     },
//     type: "customNode",
//   },
//   {
//     id: "2",
//     position: { x: 300, y: 150 },
//     data: {
//       title: "Select Your Facility Service",
//       icon: <SearchOutlined />,
//       description:
//         "Use the search feature to find the service or experience you’re looking for.",
//     },
//     type: "customNode",
//   },
//   {
//     id: "3",
//     position: { x: 550, y: 50 },
//     data: {
//       title: "Choose Date and Time",
//       icon: <CalendarOutlined />,
//       description: "Pick a date and time that works best for you.",
//     },
//     type: "customNode",
//   },
//   {
//     id: "4",
//     position: { x: 800, y: 150 },
//     data: {
//       title: "Make Payment",
//       icon: <CreditCardOutlined />,
//       description: "Complete your booking by making a secure payment.",
//     },
//     type: "customNode",
//   },
//   {
//     id: "5",
//     position: { x: 1050, y: 50 },
//     data: {
//       title: "Receive Confirmation",
//       icon: <CheckCircleOutlined />,
//       description:
//         "After payment, you’ll receive a booking confirmation via email or SMS.",
//     },
//     type: "customNode",
//   },
//   {
//     id: "6",
//     position: { x: 1300, y: 150 },
//     data: {
//       title: "Enjoy Your Experience",
//       icon: <SmileOutlined />,
//       description:
//         "On the day of your booking, enjoy the service or experience you’ve selected.",
//     },
//     type: "customNode",
//   },
// ];


// const edges = [
//   {
//     id: "e1-2",
//     source: "1",
//     target: "2",
//     style: { stroke: "#2196F3", strokeWidth: 2 },
//     markerEnd: { type: MarkerType.ArrowClosed, color: "#2196F3" },
//     animated: true,
//     label: <RightOutlined style={{ color: "#2196F3" }} />,
//     labelStyle: { fontSize: "16px" },
//   },
//   {
//     id: "e2-3",
//     source: "2",
//     target: "3",
//     style: { stroke: "#2196F3", strokeWidth: 2 },
//     markerEnd: { type: MarkerType.ArrowClosed, color: "#2196F3" },
//     animated: true,
//     label: <RightOutlined style={{ color: "#2196F3" }} />,
//     labelStyle: { fontSize: "16px" },
//   },
//   {
//     id: "e3-4",
//     source: "3",
//     target: "4",
//     style: { stroke: "#2196F3", strokeWidth: 2 },
//     markerEnd: { type: MarkerType.ArrowClosed, color: "#2196F3" },
//     animated: true,
//     label: <RightOutlined style={{ color: "#2196F3" }} />,
//     labelStyle: { fontSize: "16px" },
//   },
//   {
//     id: "e4-5",
//     source: "4",
//     target: "5",
//     style: { stroke: "#2196F3", strokeWidth: 2 },
//     markerEnd: { type: MarkerType.ArrowClosed, color: "#2196F3" },
//     animated: true,
//     label: <RightOutlined style={{ color: "#2196F3" }} />,
//     labelStyle: { fontSize: "16px" },
//   },
//   {
//     id: "e5-6",
//     source: "5",
//     target: "6",
//     style: { stroke: "#2196F3", strokeWidth: 2 },
//     markerEnd: { type: MarkerType.ArrowClosed, color: "#2196F3" },
//     animated: true,
//     label: <RightOutlined style={{ color: "#2196F3" }} />,
//     labelStyle: { fontSize: "16px" },
//   },
// ];


// // Node Types
// const nodeTypes = {
//   customNode: CustomNode,
// };

// const HowItWorks = () => {
//   return (
//     <div style={{ height: "500px", width: "100%", padding: "20px 0" }}>
//       <ReactFlow nodes={nodes} edges={edges} nodeTypes={nodeTypes} fitView>
//         {/* <MiniMap nodeStrokeColor="#2196F3" /> */}
//         <Controls />
//         <Background color="#E3F2FD" gap={16} />
//       </ReactFlow>
//     </div>
    
//   );
// };

// export default HowItWorks;

// //xslfksfkalfkalfklafa

import ReactFlow, { Background, MarkerType, Controls } from "reactflow";
import {
  UserOutlined,
  SearchOutlined,
  CalendarOutlined,
  CreditCardOutlined,
  CheckCircleOutlined,
  SmileOutlined,
  RightOutlined,
} from "@ant-design/icons";
import "reactflow/dist/style.css";
import {Grid, Typography} from "antd";

// Custom Node Component
const CustomNode = ({ data }: any) => {
  return (
    <div
      style={{
        backgroundColor: "#f4faff",
        border: "2px solid #2196F3",
        borderRadius: "10px",
        padding: "15px",
        boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
        width: "220px",
        textAlign: "center",
      }}
    >
      <div style={iconContainerStyles}>{data.icon}</div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h4 style={titleStyles}>{data.title}</h4>
        <p style={descriptionStyles}>{data.description}</p>
      </div>
    </div>
  );
};


const iconContainerStyles = {
  fontSize: "28px",
  color: "#2196F3",
  marginBottom: "10px",
};



const titleStyles = {
  fontSize: "16px",
  color: "#333333",
  margin: "0",
};

const descriptionStyles = {
  fontSize: "12px",
  color: "#666666",
  marginTop: "6px",
};
// Node and Edge Definitions

const nodes = [
  {
    id: "1",
    position: { x: 0, y: 0 },
    data: {
      title: "Start Signup or login",
      icon: <UserOutlined />,
      description: "Begin by creating an account or logging in.",
    },
    type: "customNode",
  },
  {
    id: "2",
    position: { x: 200, y: 0 },
    data: {
      title: "Find Facility Service",
      icon: <SearchOutlined />,
      description: "Search for the facility service you need.",
    },
    type: "customNode",
  },
  {
    id: "3",
    position: { x: 400, y: 0 },
    data: {
      title: "Select Time and Date",
      icon: <CalendarOutlined />,
      description: "Choose a convenient date and time.",
    },
    type: "customNode",
  },
  {
    id: "4",
    position: { x: 0, y: 200 },
    data: {
      title: "Make Payment",
      icon: <CreditCardOutlined />,
      description: "Complete your payment securely.",
    },
    type: "customNode",
  },
  {
    id: "5",
    position: { x: 200, y: 200 },
    data: {
      title: "Get Confirmation",
      icon: <CheckCircleOutlined />,
      description: "Receive a confirmation of your booking.",
    },
    type: "customNode",
  },
  {
    id: "6",
    position: { x: 400, y: 200 },
    data: {
      title: "Enjoy",
      icon: <SmileOutlined />,
      description: "Enjoy the service you’ve booked.",
    },
    type: "customNode",
  },
];

const edges = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    style: { stroke: "#FF5722", strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: "#FF5722" },
    animated: true,
    label: <RightOutlined style={{ color: "#FF5722" }} />,
    labelStyle: { fontSize: "16px" },
  },
  {
    id: "e2-3",
    source: "2",
    target: "3",
    style: { stroke: "#FF5722", strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: "#FF5722" },
    animated: true,
    label: <RightOutlined style={{ color: "#FF5722" }} />,
    labelStyle: { fontSize: "16px" },
  },
  {
    id: "e1-4",
    source: "1",
    target: "4",
    style: { stroke: "#FF5722", strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: "#FF5722" },
    animated: true,
    label: <RightOutlined style={{ color: "#FF5722" }} />,
    labelStyle: { fontSize: "16px" },
  },
  {
    id: "e2-5",
    source: "2",
    target: "5",
    style: { stroke: "#FF5722", strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: "#FF5722" },
    animated: true,
    label: <RightOutlined style={{ color: "#FF5722" }} />,
    labelStyle: { fontSize: "16px" },
  },
  {
    id: "e3-6",
    source: "3",
    target: "6",
    style: { stroke: "#FF5722", strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: "#FF5722" },
    animated: true,
    label: <RightOutlined style={{ color: "#FF5722" }} />,
    labelStyle: { fontSize: "16px" },
  },
];

// // Node Types
const nodeTypes = {
  customNode: CustomNode,
};
const { useBreakpoint } = Grid;
const HowItWorks = () => {
   const screens = useBreakpoint();
   const { Title } = Typography;
  return (
    <div
      style={{
        height: screens.md ? "700px" : "400px",
        width: "100%",
        padding: screens.md ? "60px 100px" : "40px",
        backgroundColor: "#F2F7FF",
      }}
    >
      <Title
        level={2}
        style={{
          textAlign: "center",
          marginBottom: "20px",
          color: "#003180",
        }}
      >
        How to Work it
      </Title>
      <ReactFlow nodes={nodes} edges={edges} nodeTypes={nodeTypes} fitView>
        {/* <MiniMap nodeStrokeColor="#FF5722" /> */}
        <Controls />
        <Background color="#E3F2FD" gap={16} />
      </ReactFlow>
    </div>
  );
};

export default HowItWorks;
