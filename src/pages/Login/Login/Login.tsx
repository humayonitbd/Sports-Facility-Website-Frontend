import { Button, Row, Col } from "antd";
import CustomInput from "../../../components/Form/CustomInput";
import CustomForm from "../../../components/Form/CustomForm";
import { FieldValues } from "react-hook-form";
import loginImage from "../../../assets/login images/logn image.jpg";
import { NavLink } from "react-router-dom";

const Login = () => {
  const defaultValues = {
    email: "user3@gmail.com",
    password: "123456",
  };

  const onSubmit = async (data: FieldValues) => {
    console.log("data", data);

    try {
      const userInfo = {
        email: data.email,
        password: data.password,
      };

      console.log(userInfo);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ position: "relative", height: "100vh" }}>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${loginImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 1,
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 89, 230, 0.9)",
          // opacity: 2.9,
          zIndex: 2,
        }}
      ></div>
      <Row
        justify="center"
        align="middle"
        style={{ height: "100%", position: "relative", zIndex: 3 }}
      >
        <Col xs={22} sm={16} md={12} lg={8} xl={6}>
          <div
            style={{
              border: "2px solid white",
              padding: "30px",
              borderRadius: "5px",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
              zIndex: 3,
            }}
          >
            <h2
              style={{
                textAlign: "center",
                color: "#fff",
                marginBottom: "16px",
              }}
            >
              Login Here!
            </h2>
            <CustomForm onSubmit={onSubmit} defaultValues={defaultValues}>
              <CustomInput type="text" name="email" label="Email: " />
              <CustomInput type="password" name="password" label="Password: " />
              <div style={{ textAlign: "center" }}>
                <Button htmlType="submit">Login</Button>
              </div>
              <div style={{ textAlign: "center" }}>
                <p style={{ color: "#fff", marginTop: "14px" }}>
                  Are you new user?{" "}
                  <NavLink
                    style={{
                      color: "#fff",
                      fontWeight: "bold",
                      textDecoration: "underline",
                    }}
                    to="/register"
                  >
                    Register
                  </NavLink>
                </p>
              </div>
            </CustomForm>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
