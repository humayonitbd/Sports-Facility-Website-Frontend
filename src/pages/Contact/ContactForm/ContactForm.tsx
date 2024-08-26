import { FieldValues } from "react-hook-form";
import Swal from "sweetalert2";
import CustomForm from "../../../components/Form/CustomForm";
import CustomInput from "../../../components/Form/CustomInput";
import { Button } from "antd";
import { CSSProperties } from "react";

const ContactForm = () => {
  const onSubmit = async (data: FieldValues) => {
    console.log("data", data);

    try {
      const contactData = {
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
      };
      console.log("Contact data", contactData);

      // Add your API call here if needed

      // Uncomment and adjust success message
      // if (res?.success) {
      //   Swal.fire({
      //     icon: "success",
      //     title: `${res.message}`,
      //     showConfirmButton: false,
      //     timer: 1000,
      //   });
      // }
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: `${error?.message || "An error occurred!"}`,
        showConfirmButton: false,
        timer: 1200,
      });
    }
  };

  // Define styles for the form
  const formContainerStyle: CSSProperties = {
    padding: "40px 20px",
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    maxWidth: "600px",
    margin: "0 auto",
  };

  const buttonStyle: CSSProperties = {
    backgroundColor: "#003180",
    color: "#ffffff",
    border: "none",
    borderRadius: "4px",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  };

  

  return (
    <div style={{ background: "#2c79ff", padding: "50px 0" }}>
      <div style={formContainerStyle}>
        <CustomForm onSubmit={onSubmit}>
          <CustomInput
            type="text"
            name="name"
            label="Full Name:"
            style={{ padding: "5px 2px" }}
          />
          <CustomInput
            type="email"
            name="email"
            label="Email:"
            style={{ padding: "5px 2px" }}
          />
          <CustomInput
            type="text"
            name="subject"
            label="Subject:"
            style={{ padding: "5px 2px" }}
          />
          <CustomInput
            type="text"
            name="message"
            label="Message:"
            style={{ height: "100px" }}
          />
          <div style={{ textAlign: "center" }}>
            <Button htmlType="submit" style={buttonStyle}>
              Submit
            </Button>
          </div>
        </CustomForm>
      </div>
    </div>
  );
};

export default ContactForm;
