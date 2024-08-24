import { Button, Row, Col } from "antd";
import CustomInput from "../../../components/Form/CustomInput";
import CustomForm from "../../../components/Form/CustomForm";
import { FieldValues } from "react-hook-form";
import loginImage from "../../../assets/login images/logn image.jpg";
import CustomSelect from "../../../components/Form/CustomSelect";
import { NavLink } from "react-router-dom";

const userRole = ["User", "Admin"];

export const userRoleOptions = userRole.map((item) => ({
  value: item.toLowerCase(),
  label: item,
}));

const Register = () => {
  const onSubmit = async (data: FieldValues) => {
    console.log("data", data);

    try {
      const userInfo = {
        name: data.name,
        email: data.email,
        password: data.password,
        role: data.role,
        phone: data.phone,
        address: data.address,
      };

      console.log(userInfo);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{ position: "relative", minHeight: "100vh", padding: "60px 0" }}
    >
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
          zIndex: 2,
        }}
      ></div>
      <Row
        justify="center"
        align="middle"
        style={{ height: "100%", position: "relative", zIndex: 3 }}
      >
        <Col xs={22} sm={20} md={16} lg={12} xl={8}>
          <div
            style={{
              border: "2px solid white",
              padding: "30px",
              borderRadius: "5px",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
            }}
          >
            <h2
              style={{
                textAlign: "center",
                color: "#fff",
                marginBottom: "16px",
              }}
            >
              Register Here!
            </h2>
            <CustomForm onSubmit={onSubmit}>
              <CustomInput type="text" name="name" label="Full Name: " />
              <CustomInput type="text" name="email" label="Email: " />
              <CustomInput type="password" name="password" label="Password: " />
              <CustomInput type="text" name="phone" label="Phone Number: " />
              <CustomInput type="text" name="address" label="Address: " />
              <CustomSelect
                name="role"
                label="Select Your Role: "
                options={userRoleOptions}
                defaultValue="user"
              />
              <div style={{ textAlign: "center" }}>
                <Button htmlType="submit">Submit</Button>
              </div>
              <div style={{ textAlign: "center" }}>
                <p style={{ color: "#fff", marginTop: "14px" }}>
                  You have an account?{" "}
                  <NavLink
                    style={{
                      color: "#fff",
                      fontWeight: "bold",
                      textDecoration: "underline",
                    }}
                    to="/login"
                  >
                    Login
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

export default Register;
