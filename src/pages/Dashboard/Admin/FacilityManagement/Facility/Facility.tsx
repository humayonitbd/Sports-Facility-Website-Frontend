import { NavLink } from "react-router-dom";
import { Card, Row, Col, Image, Button, Popconfirm } from "antd";
import facilitiesApi from "../../../../../redux/features/facility/facilityApi";
import { EditOutlined, DeleteOutlined, EyeOutlined } from "@ant-design/icons";

const { Meta } = Card;

const Facility = () => {
  const { data: facilities } = facilitiesApi.useGetAllFacilitiesQuery(null);

  const handleFacilityDelete=async(facilityId:string)=>{
    console.log("facility id ", facilityId);

  }
  return (
    // <div
    //   style={{
    //     padding: "50px",
    //     backgroundColor: "#f2f7ff",
    //     borderBottom: "5px solid #fff",
    //   }}
    // >
    //   <Row gutter={[16, 16]}>
    //     {facilities?.data?.map((facility, index) => (
    //       <Col xs={24} sm={12} md={12} lg={6} key={index}>
    //         <NavLink to={`/facilities/${facility._id}`}>
    //           <Card
    //             hoverable
    //             cover={
    //               <Image
    //                 alt={facility.name}
    //                 src={facility.image}
    //                 style={{ height: "200px", objectFit: "cover" }}
    //                 preview={false}
    //               />
    //             }
    //             style={{
    //               borderRadius: "10px",
    //               overflow: "hidden",
    //               border: `1px solid #0566FF`,
    //             }}
    //             bodyStyle={{ padding: "20px" }}
    //           >
    //             <Meta
    //               title={
    //                 <span style={{ color: "#0566FF" }}>{facility.name}</span>
    //               }
    //               description={facility.description}
    //               style={{ textAlign: "center" }}
    //             />
    //           </Card>
    //         </NavLink>
    //       </Col>
    //     ))}
    //   </Row>
    // </div>

    // <div
    //   style={{
    //     padding: "50px",
    //     backgroundColor: "#f8faff",
    //     borderBottom: "5px solid #ffffff",
    //   }}
    // >
    //   <Row gutter={[16, 16]}>
    //     {facilities?.data?.map((facility, index) => (
    //       <Col xs={24} sm={12} md={12} lg={6} key={index}>
    //         <NavLink to={`/facilities/${facility._id}`}>
    //           <Card
    //             hoverable
    //             cover={
    //               <div style={{ position: "relative" }}>
    //                 <Image
    //                   alt={facility.name}
    //                   src={facility.image}
    //                   style={{
    //                     height: "200px",
    //                     width:"100%",
    //                     objectFit: "cover",
    //                     borderRadius: "15px 15px 0 0",

    //                   }}
    //                   preview={false}
    //                 />
    //                 <div
    //                   style={{
    //                     position: "absolute",
    //                     bottom: "0",
    //                     width: "100%",
    //                     background: "rgba(0, 0, 0, 0.5)",
    //                     color: "#fff",
    //                     textAlign: "center",
    //                     padding: "5px 0",
    //                     borderRadius: "0 0 15px 15px",
    //                   }}
    //                 >
    //                   {facility.location}
    //                 </div>
    //               </div>
    //             }
    //             style={{
    //               borderRadius: "15px",
    //               overflow: "hidden",
    //               boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    //               transition: "transform 0.3s, box-shadow 0.3s",
    //             }}
    //             bodyStyle={{ padding: "20px" }}
    //             onMouseEnter={(e) => {
    //               e.currentTarget.style.transform = "translateY(-5px)";
    //               e.currentTarget.style.boxShadow =
    //                 "0 8px 16px rgba(0, 0, 0, 0.2)";
    //             }}
    //             onMouseLeave={(e) => {
    //               e.currentTarget.style.transform = "translateY(0)";
    //               e.currentTarget.style.boxShadow =
    //                 "0 4px 8px rgba(0, 0, 0, 0.1)";
    //             }}
    //           >
    //             <Meta
    //               title={
    //                 <span style={{ color: "#0566FF", fontWeight: "bold" }}>
    //                   {facility.name}
    //                 </span>
    //               }
    //               description={
    //                 <span style={{ color: "#555", fontSize: "14px" }}>
    //                   {facility.description.length > 100
    //                     ? `${facility.description.substring(0, 100)}...`
    //                     : facility.description}
    //                 </span>
    //               }
    //               style={{ textAlign: "center" }}
    //             />
    //           </Card>
    //         </NavLink>
    //       </Col>
    //     ))}
    //   </Row>
    // </div>

    // <div
    //   style={{
    //     padding: "50px",
    //     backgroundColor: "#f8faff",
    //     borderBottom: "5px solid #ffffff",
    //   }}
    // >
    //   <Row gutter={[16, 16]}>
    //     {facilities?.data?.map((facility, index) => (
    //       <Col xs={24} sm={12} md={12} lg={6} key={index}>
    //         <Card
    //           hoverable
    //           cover={
    //             <div style={{ position: "relative" }}>
    //               <Image
    //                 alt={facility.name}
    //                 src={facility.image}
    //                 style={{
    //                   height: "200px",
    //                   objectFit: "cover",
    //                   borderRadius: "15px 15px 0 0",
    //                 }}
    //                 preview={false}
    //               />
    //               <div
    //                 style={{
    //                   position: "absolute",
    //                   bottom: "0",
    //                   width: "100%",
    //                   background: "rgba(0, 0, 0, 0.5)",
    //                   color: "#fff",
    //                   textAlign: "center",
    //                   padding: "5px 0",
    //                   borderRadius: "0 0 15px 15px",
    //                 }}
    //               >
    //                 {facility.location}
    //               </div>
    //             </div>
    //           }
    //           style={{
    //             borderRadius: "15px",
    //             overflow: "hidden",
    //             boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    //             transition: "transform 0.3s, box-shadow 0.3s",
    //           }}
    //           bodyStyle={{ padding: "20px", textAlign: "center" }}
    //           onMouseEnter={(e) => {
    //             e.currentTarget.style.transform = "translateY(-5px)";
    //             e.currentTarget.style.boxShadow =
    //               "0 8px 16px rgba(0, 0, 0, 0.2)";
    //           }}
    //           onMouseLeave={(e) => {
    //             e.currentTarget.style.transform = "translateY(0)";
    //             e.currentTarget.style.boxShadow =
    //               "0 4px 8px rgba(0, 0, 0, 0.1)";
    //           }}
    //         >
    //           <Meta
    //             title={
    //               <span style={{ color: "#0566FF", fontWeight: "bold" }}>
    //                 {facility.name}
    //               </span>
    //             }
    //             description={
    //               <span style={{ color: "#555", fontSize: "14px" }}>
    //                 {facility.description.length > 100
    //                   ? `${facility.description.substring(0, 100)}...`
    //                   : facility.description}
    //               </span>
    //             }
    //             style={{ marginBottom: "15px" }}
    //           />
    //           <div style={{ display: "flex", justifyContent: "space-between" }}>
    //             <NavLink to={`/facility/${facility._id}`}>
    //               <Button type="primary" icon={<EditOutlined />}>
    //                 Update
    //               </Button>
    //             </NavLink>
    //               <Button
    //                 onClick={() => handleFacilityDelete(facility._id)}
    //                 danger
    //                 icon={<DeleteOutlined />}
    //               >
    //                 Delete
    //               </Button>
    //           </div>
    //         </Card>
    //       </Col>
    //     ))}
    //   </Row>
    // </div>

    <div
      style={{
        padding: "10px",
        backgroundColor: "#f8faff",
        borderBottom: "5px solid #ffffff",
      }}
    >
      <Row gutter={[16, 16]}>
        {facilities?.data?.map((facility, index) => (
          <Col xs={24} sm={12} md={12} lg={12} key={index}>
            <Card
              hoverable
              style={{
                borderRadius: "15px",
                overflow: "hidden",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s, box-shadow 0.3s",
              }}
              bodyStyle={{ padding: "10px" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow =
                  "0 8px 16px rgba(0, 0, 0, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 4px 8px rgba(0, 0, 0, 0.1)";
              }}
            >
              <Row gutter={[16, 16]}>
                <Col xs={24} md={10}>
                  <Image
                    alt={facility.name}
                    src={facility.image}
                    style={{
                      height: "100%",
                      width: "100%",
                      objectFit: "cover",
                      borderRadius: "15px",
                    }}
                    preview={false}
                  />
                </Col>
                <Col xs={24} md={14}>
                  <Meta
                    title={
                      <span
                        style={{
                          color: "#0566FF",
                          fontWeight: "bold",
                          fontSize: "18px",
                        }}
                      >
                        {facility.name}
                      </span>
                    }
                    description={
                      <span style={{ color: "#555", fontSize: "14px" }}>
                        {facility.description.length > 100
                          ? `${facility.description.substring(0, 100)}...`
                          : facility.description}
                      </span>
                    }
                    style={{ marginBottom: "15px" }}
                  />
                  <div style={{ marginTop: "15px" }}>
                    <NavLink to={`/facilities/${facility._id}`}>
                      <Button
                        type="primary"
                        icon={<EyeOutlined />}
                        style={{ marginRight: "10px" }}
                      >
                        View Details
                      </Button>
                    </NavLink>
                    <NavLink to={`/facility/${facility._id}`}>
                      <Button
                        type="primary"
                        icon={<EditOutlined />}
                        style={{ marginRight: "10px" }}
                      >
                        Update
                      </Button>
                    </NavLink>
                    <Button
                      onClick={() => handleFacilityDelete(facility._id)}
                      danger
                      icon={<DeleteOutlined />}
                    >
                      Delete
                    </Button>
                  </div>
                </Col>
              </Row>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Facility;
