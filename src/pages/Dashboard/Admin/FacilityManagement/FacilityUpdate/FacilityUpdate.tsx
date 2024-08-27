import { Button, Row, Col } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import Swal from "sweetalert2";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomForm from "../../../../../components/Form/CustomForm";
import CustomInput from "../../../../../components/Form/CustomInput";
import facilitiesApi from "../../../../../redux/features/facility/facilityApi";
import { facilityZodSchema } from "../../../../../Schemas/addFacility.zod.schema";
import SmallLoading from "../../../../../components/ui/SmallLoading";

const FacilityUpdate = () => {
    const {id} = useParams();
    const {data:singleFacultyData, isLoading}= facilitiesApi.useSingleFacilityGetQuery(id);
    console.log("singleFacultyData", singleFacultyData?.data);
  const [facilityLoading, setFacilityLoading] = useState(false);
  const navigate = useNavigate();
  const [CreateFacilityHandler] = facilitiesApi.useAddFacilityMutation();

  const onSubmit = async (data: FieldValues) => {
    if (!data.image) {
      Swal.fire({
        icon: "error",
        title: "Please provide your profile image!",
        showConfirmButton: false,
        timer: 1000,
      });
      return;
    }
    setFacilityLoading(true);

    const formData = new FormData();
    formData.append("image", data.image);

    try {
      const response = await fetch(
        `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_APP_IMAGE_URL_KEY
        }`,
        {
          method: "POST",
          body: formData,
        }
      );
      const result = await response.json();

      if (result.success) {
        const facilityInfo = {
          name: data.name,
          description: data.description,
          pricePerHour: Number(data.pricePerHour),
          location: data.location,
          image: result.data.display_url,
        };

        console.log("facilityInfo Data", facilityInfo);

        //  Add your API call here to save the user data
        const res: any = await CreateFacilityHandler(facilityInfo);
        // console.log("register res", res);
        if (res?.data?.success) {
          setFacilityLoading(false);
          Swal.fire({
            icon: "success",
            title: `${res.data.message}`,
            showConfirmButton: false,
            timer: 1000,
          });
          navigate("/admin/facilities");
        } else {
          setFacilityLoading(false);
          Swal.fire({
            icon: "error",
            title: `${res?.error?.data?.message}`,
            showConfirmButton: false,
            timer: 1200,
          });
        }
      } else {
        setFacilityLoading(false);
        Swal.fire({
          icon: "error",
          title: "Image upload failed!",
          showConfirmButton: false,
          timer: 1000,
        });
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      setFacilityLoading(false);
      Swal.fire({
        icon: "error",
        title: "An error occurred!",
        showConfirmButton: false,
        timer: 1000,
      });
    }
  };
if (isLoading) {
  return <SmallLoading />;
}
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
                margin: "16px 0",
              }}
            >
              Update Facility Data!
            </h2>
            <CustomForm
              onSubmit={onSubmit}
              resolver={zodResolver(facilityZodSchema)}
            >
              <CustomInput
                type="text"
                name="name"
                label="Facility Name: "
                labelColor="white"
              />
              <CustomInput
                type="text"
                name="description"
                label="Description: "
                labelColor="white"
              />
              <CustomInput
                type="number"
                name="pricePerHour"
                label="Price Per Hour: "
                labelColor="white"
              />
              <CustomInput
                type="text"
                name="location"
                label="Location: "
                labelColor="white"
              />
              <CustomInput
                type="file"
                name="image"
                label="Facility Image: "
                labelColor="white"
              />
              <div style={{ textAlign: "center", marginBottom: "10px" }}>
                <Button htmlType="submit" loading={facilityLoading}>
                  Submit
                </Button>
              </div>
            </CustomForm>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default FacilityUpdate;
