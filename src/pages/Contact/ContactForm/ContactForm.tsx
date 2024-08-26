import { FieldValues } from "react-hook-form";
import Swal from "sweetalert2";
import CustomForm from "../../../components/Form/CustomForm";
import CustomInput from "../../../components/Form/CustomInput";
import { Button } from "antd";
import { CSSProperties } from "react";
// import emailjs from "@emailjs/browser";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactZodSchema } from "../../../Schemas/contact.zod.schema";

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

    //   console.log("Contact data", contactData);
    //   const result = await emailjs.sendForm(
    //     "service_l0ciyxo",
    //     "template_7nilc3p",
    //     form.current,
    //     "fF1Gb1UK-6c2QbJFr"
    //   );

    //   console.log(result.text);
    if(contactData)
      Swal.fire({
        title: "Message was sent successfully!!",
        text: "You clicked the button!",
        icon: "success",
        timer: 1200,
      });
      

      // Add your API call here if needed

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
    backgroundColor: "#2C79FF",
    color: "#ffffff",
    border: "none",
    borderRadius: "4px",
    padding: "20px 20px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "background-color 0.3s",
    width: "100%",
  };

  

  return (
    <div style={{ background: "#2c79ff", padding: "50px 0" }}>
      <div style={formContainerStyle}>
        <CustomForm
          onSubmit={onSubmit}
          resolver={zodResolver(ContactZodSchema)}
        >
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
