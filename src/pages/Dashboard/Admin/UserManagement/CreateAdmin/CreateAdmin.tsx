import { Button, Row, Col } from "antd";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import Swal from "sweetalert2";
import { zodResolver } from "@hookform/resolvers/zod";
import authApi from "../../../../../redux/features/auth/authApi";
import CustomForm from "../../../../../components/Form/CustomForm";
import CustomInput from "../../../../../components/Form/CustomInput";
import { registerZodSchema } from "../../../../../Schemas/register.zod.schema";

const CreateAdmin = () => {
    const [registerLoading, setRegisterLoading] = useState(false);
    const navigate = useNavigate();
    const [adminCreateHandler] = authApi.useRegisterMutation();

    const onSubmit = async (data: FieldValues) => {
        console.log(data)
    //   if (data.password.length < 6) {
    //     Swal.fire({
    //       icon: "error",
    //       title: "Your password must be at least 6 characters!",
    //       showConfirmButton: false,
    //       timer: 1000,
    //     });
    //     return;
    //   }

    //   if (!data.image) {
    //     Swal.fire({
    //       icon: "error",
    //       title: "Please provide your profile image!",
    //       showConfirmButton: false,
    //       timer: 1000,
    //     });
    //     return;
    //   }
    //   setRegisterLoading(true);

    //   const formData = new FormData();
    //   formData.append("image", data.image);

    //   try {
    //     const response = await fetch(
    //       `https://api.imgbb.com/1/upload?key=${
    //         import.meta.env.VITE_APP_IMAGE_URL_KEY
    //       }`,
    //       {
    //         method: "POST",
    //         body: formData,
    //       }
    //     );
    //     const result = await response.json();

    //     if (result.success) {
    //       const userInfo = {
    //         name: data.name,
    //         email: data.email,
    //         password: data.password,
    //         phone: data.phone,
    //         address: data.address,
    //         profileImg: result.data.display_url,
    //         role:'admin'
    //       };

    //       console.log("Register userData", userInfo);

    //       //  Add your API call here to save the user data
    //       const res: any = await registerHandler(userInfo);
    //       // console.log("register res", res);
    //       if (res?.data?.success) {
    //         setRegisterLoading(false);
    //         Swal.fire({
    //           icon: "success",
    //           title: `Admin Create Successfull !!`,
    //           showConfirmButton: false,
    //           timer: 1000,
    //         });

    //       } else {
    //         setRegisterLoading(false);
    //         Swal.fire({
    //           icon: "error",
    //           title: `${res?.error?.data?.message}`,
    //           showConfirmButton: false,
    //           timer: 1200,
    //         });
    //       }
    //     } else {
    //       setRegisterLoading(false);
    //       Swal.fire({
    //         icon: "error",
    //         title: "Image upload failed!",
    //         showConfirmButton: false,
    //         timer: 1000,
    //       });
    //     }
    //   } catch (error) {
    //     console.error("Error uploading image:", error);
    //     setRegisterLoading(false);
    //     Swal.fire({
    //       icon: "error",
    //       title: "An error occurred!",
    //       showConfirmButton: false,
    //       timer: 1000,
    //     });
    //   }
    };
  

  return (
    <div
      style={{
        padding: "50px 0",
        background: "#0045B3",
        borderRadius: "8px",
      }}
    >
      <Row
        justify="center"
        align="middle"
        style={{
          height: "100%",
          zIndex: 3,
        }}
      >
        <Col xs={22} sm={20} md={16} lg={12} xl={8}>
          <div
            style={{
              border: "2px solid white",
              padding: "10px",
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
              Create Admin Here!
            </h2>
            <CustomForm
              onSubmit={onSubmit}
              resolver={zodResolver(registerZodSchema)}
            >
              <CustomInput type="text" name="name" label="Full Name: " />
              <CustomInput type="text" name="email" label="Email: " />
              <CustomInput type="password" name="password" label="Password: " />
              <CustomInput type="text" name="phone" label="Phone Number: " />
              <CustomInput type="text" name="address" label="Address: " />
              <CustomInput type="file" name="image" label="Profile Image: " />
              <div style={{ textAlign: "center" }}>
                <Button htmlType="submit">
                  {registerLoading ? (
                    <span className="loading loading-spinner mr-2"></span>
                  ) : null}
                  Submit
                </Button>
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

export default CreateAdmin;
