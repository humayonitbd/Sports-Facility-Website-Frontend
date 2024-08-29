import { Col, Row, Divider } from "antd";
import {Image} from "antd"
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import footerlog from "../../../assets/logo/logo.png"
import { FaLinkedin } from "react-icons/fa6";

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
                  src={footerlog}
                  preview={false}
                />
                <p
                  style={{
                    padding: "20px 0",
                    color: "#003180",
                    fontSize: "17px",
                  }}
                >
                  A Sports Facility Booking Platform is an online service that
                  allows users to easily search for and book sports venues like
                  tennis courts, football fields, and gyms. It offers features
                  like real-time availability.
                </p>
                <div style={{ display: "flex", gap: "5px" }}>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span
                      style={{
                        fontSize: "20px",
                        color: "#fff",
                        background: "#003180",
                        padding: "4px 8px",
                        borderRadius: "5px",
                        cursor: "pointer",
                      }}
                    >
                      <FaFacebook />
                    </span>
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span
                      style={{
                        fontSize: "20px",
                        color: "#fff",
                        background: "#003180",
                        padding: "4px 8px",
                        borderRadius: "5px",
                        cursor: "pointer",
                      }}
                    >
                      <FaTwitter />
                    </span>
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span
                      style={{
                        fontSize: "20px",
                        color: "#fff",
                        background: "#003180",
                        padding: "4px 8px",
                        borderRadius: "5px",
                        cursor: "pointer",
                      }}
                    >
                      <FaInstagram />
                    </span>
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span
                      style={{
                        fontSize: "20px",
                        color: "#fff",
                        background: "#003180",
                        padding: "4px 8px",
                        borderRadius: "5px",
                        cursor: "pointer",
                      }}
                    >
                      <FaLinkedin />
                    </span>
                  </a>
                </div>
              </div>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <div>
                <h4
                  style={{
                    fontSize: "24px",
                    color: "#003180",
                    marginBottom: "10px",
                  }}
                >
                  Company
                </h4>
                <NavLink to="/about">
                  <p
                    style={{
                      fontSize: "17px",
                      color: "#003180",
                      marginBottom: "7px",
                    }}
                  >
                    About us
                  </p>
                </NavLink>
                <NavLink to="/contact">
                  <p
                    style={{
                      fontSize: "17px",
                      color: "#003180",
                      marginBottom: "7px",
                    }}
                  >
                    Contact us
                  </p>
                </NavLink>
                <NavLink to="/facilities">
                  <p
                    style={{
                      fontSize: "17px",
                      color: "#003180",
                      marginBottom: "7px",
                    }}
                  >
                    Facility
                  </p>
                </NavLink>
                <NavLink to="/">
                  <p
                    style={{
                      fontSize: "17px",
                      color: "#003180",
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
                      color: "#003180",
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
                    color: "#003180",
                    marginBottom: "10px",
                  }}
                >
                  Academy
                </h4>
                <NavLink to="/">
                  <p
                    style={{
                      fontSize: "17px",
                      color: "#003180",
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
                      color: "#003180",
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
                      color: "#003180",
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
                      color: "#003180",
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
                      color: "#003180",
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
                    color: "#003180",
                    marginBottom: "10px",
                  }}
                >
                  Support
                </h4>
                <NavLink to="/">
                  <p
                    style={{
                      fontSize: "17px",
                      color: "#003180",
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
                      color: "#003180",
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
                      color: "#003180",
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
                <Divider style={{ borderColor: "#003180" }} />
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
                  <p
                    style={{
                      marginBottom: "0",
                      fontSize: "16px",
                      color: "#003180",
                    }}
                  >
                    Copyright © 2022 jumpsmash, All rights reserved. Powered by
                    MoxCreative.
                  </p>
                </div>
                <div style={{ display: "flex", gap: "15px", color: "#003180" }}>
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
