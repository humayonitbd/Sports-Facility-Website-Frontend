import { Col, Row, Divider } from "antd";
import {Image} from "antd"
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const FooterSec = () => {
  return (
    <div>
      <Row gutter={24}>
        <Col span={24}>
          <Row gutter={24} style={{ padding: "60px 0" }}>
            <Col xs={24} sm={12} md={6}>
              <div style={{ paddingRight: "40px" }}>
                <Image
                  width={200}
                  height={50}
                  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
                  // preview={{
                  //   src: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
                  // }}
                />
                <p
                  style={{ padding: "20px 0", color: "#fff", fontSize: "17px" }}
                >
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Debitis magni illum obcaecati nemo ipsam recusandae.
                </p>
                <div style={{ display: "flex", gap: "5px" }}>
                  <span
                    style={{
                      fontSize: "20px",
                      color: "#fff",
                      background: "#0566FF",
                      padding: "4px 8px",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                  >
                    <FaFacebook />
                  </span>
                  <span
                    style={{
                      fontSize: "20px",
                      color: "#fff",
                      background: "#0566FF",
                      padding: "4px 8px",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                  >
                    <FaInstagram />
                  </span>
                  <span
                    style={{
                      fontSize: "20px",
                      color: "#fff",
                      background: "#0566FF",
                      padding: "4px 8px",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                  >
                    <FaTwitter />
                  </span>
                  <span
                    style={{
                      fontSize: "20px",
                      color: "#fff",
                      background: "#0566FF",
                      padding: "4px 8px",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                  >
                    <FaYoutube />
                  </span>
                </div>
              </div>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <div>
                <h4
                  style={{
                    fontSize: "24px",
                    color: "#fff",
                    marginBottom: "10px",
                  }}
                >
                  Company
                </h4>
                <NavLink to="/">
                  <p
                    style={{
                      fontSize: "17px",
                      color: "#fff",
                      marginBottom: "7px",
                    }}
                  >
                    About us
                  </p>
                </NavLink>
                <NavLink to="/">
                  <p
                    style={{
                      fontSize: "17px",
                      color: "#fff",
                      marginBottom: "7px",
                    }}
                  >
                    Leadership
                  </p>
                </NavLink>
                <NavLink to="/">
                  <p
                    style={{
                      fontSize: "17px",
                      color: "#fff",
                      marginBottom: "7px",
                    }}
                  >
                    Careers
                  </p>
                </NavLink>
                <NavLink to="/">
                  <p
                    style={{
                      fontSize: "17px",
                      color: "#fff",
                      marginBottom: "7px",
                    }}
                  >
                    Article & News
                  </p>
                </NavLink>
                <NavLink to="/">
                  <p
                    style={{
                      fontSize: "17px",
                      color: "#fff",
                      marginBottom: "5px",
                    }}
                  >
                    Legal Notice
                  </p>
                </NavLink>
              </div>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <div>
                <h4
                  style={{
                    fontSize: "24px",
                    color: "#fff",
                    marginBottom: "10px",
                  }}
                >
                  Academy
                </h4>
                <NavLink to="/">
                  <p
                    style={{
                      fontSize: "17px",
                      color: "#fff",
                      marginBottom: "7px",
                    }}
                  >
                    Group Lesson
                  </p>
                </NavLink>
                <NavLink to="/">
                  <p
                    style={{
                      fontSize: "17px",
                      color: "#fff",
                      marginBottom: "7px",
                    }}
                  >
                    Private Lesson
                  </p>
                </NavLink>
                <NavLink to="/">
                  <p
                    style={{
                      fontSize: "17px",
                      color: "#fff",
                      marginBottom: "7px",
                    }}
                  >
                    Badminton for Kids
                  </p>
                </NavLink>
                <NavLink to="/">
                  <p
                    style={{
                      fontSize: "17px",
                      color: "#fff",
                      marginBottom: "7px",
                    }}
                  >
                    Badminton for Adult
                  </p>
                </NavLink>
                <NavLink to="/">
                  <p
                    style={{
                      fontSize: "17px",
                      color: "#fff",
                      marginBottom: "5px",
                    }}
                  >
                    Court Rent
                  </p>
                </NavLink>
              </div>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <div>
                <h4
                  style={{
                    fontSize: "24px",
                    color: "#fff",
                    marginBottom: "10px",
                  }}
                >
                  Support
                </h4>
                <NavLink to="/">
                  <p
                    style={{
                      fontSize: "17px",
                      color: "#fff",
                      marginBottom: "7px",
                    }}
                  >
                    Help Center
                  </p>
                </NavLink>
                <NavLink to="/">
                  <p
                    style={{
                      fontSize: "17px",
                      color: "#fff",
                      marginBottom: "7px",
                    }}
                  >
                    Sports Support
                  </p>
                </NavLink>
                <NavLink to="/">
                  <p
                    style={{
                      fontSize: "17px",
                      color: "#fff",
                      marginBottom: "7px",
                    }}
                  >
                    FAQ Forum
                  </p>
                </NavLink>
              </div>
            </Col>
          </Row>
        </Col>
        <Col span={24} style={{ marginBottom: "25px", color: "#fff" }}>
          <Row gutter={24}>
            <Col span={24}>
              <span>
                <Divider
                  style={{ borderColor: "#fff", }}
                />
              </span>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <div>
                  <p style={{ marginBottom: "0", fontSize: "16px" }}>
                    Copyright © 2022 jumpsmash, All rights reserved. Powered by
                    MoxCreative.
                  </p>
                </div>
                <div style={{ display: "flex", gap: "15px" }}>
                  <p>Terms of use</p>
                  <p>Privacy Policy</p>
                  <p>Cookie Policy</p>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default FooterSec;
