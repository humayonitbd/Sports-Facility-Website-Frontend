import { Button, Row, Col } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import Swal from "sweetalert2";
import CustomForm from "../../../../../components/Form/CustomForm";
import CustomInput from "../../../../../components/Form/CustomInput";
import facilitiesApi from "../../../../../redux/features/facility/facilityApi";
import SmallLoading from "../../../../../components/ui/SmallLoading";

const FacilityUpdate = () => {
    const { id } = useParams();
    const { data: singleFacilityData, isLoading } =
      facilitiesApi.useSingleFacilityGetQuery(id);
    const [facilityUpdateLoading, setFacilityUpdateLoading] = useState(false);
    const navigate = useNavigate();
    const [updateFacility] = facilitiesApi.useUpdateSingleFacilityMutation();

    const uploadImage = async (file: File) => {
      const formData = new FormData();
      formData.append("image", file);

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
          return result.data.display_url;
        } else {
          throw new Error("Image upload failed!");
        }
      } catch (error) {
        console.error("Error uploading image:", error);
        throw error;
      }
    };

    const onSubmit = async (data: FieldValues) => {
      setFacilityUpdateLoading(true);

      try {
        // const imageUrl = data.image?.File?.name
        //   ? await uploadImage(data.image)
        //   : singleFacilityData?.data.image;
        const imageFile = data.image instanceof File ? data.image : null;
        const imageUrl = imageFile
          ? await uploadImage(imageFile)
          : singleFacilityData?.data.image;

          console.log('image data', data.image);
          console.log("image data file", data.image?.File);
          console.log("image data file name", data.image?.File?.name);
        const updateFacilityData = {
          name: data.name,
          description: data.description,
          pricePerHour: Number(data.pricePerHour),
          location: data.location,
          image: imageUrl,
        };

        const res: any = await updateFacility({ id, data: updateFacilityData });

        if (res?.data?.success) {
          Swal.fire({
            icon: "success",
            title: `${res.data.message}`,
            showConfirmButton: false,
            timer: 1200,
          });
          navigate("/admin/facilities");
        } else {
          throw new Error(res?.error?.data?.message || "Update failed!");
        }
      } catch (error:any) {
        Swal.fire({
          icon: "error",
          title: error.message || "An error occurred!",
          showConfirmButton: false,
          timer: 1200,
        });
      } finally {
        setFacilityUpdateLoading(false);
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
              defaultValues={singleFacilityData?.data}
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
                <Button htmlType="submit" loading={facilityUpdateLoading}>
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
