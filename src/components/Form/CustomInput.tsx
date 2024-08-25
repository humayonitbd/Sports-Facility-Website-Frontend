
import { Form, Input } from "antd";
import { Controller } from "react-hook-form";

type TInputProps = {
  type?: string;
  name: string;
  label?: string;
};

const CustomInput = ({ type = "text", name, label }: TInputProps) => {
  return (
    <div style={{ marginBottom: "10px" }}>
      <Controller
        name={name}
        render={({ field, fieldState: { error } }) => (
          <Form.Item label={label}>
            <Input
              {...field}
              type={type}
              id={name}
              onChange={(e) => {
                if (type === "file") {
                  // Handle file input
                  if (e.target.files) {
                    field.onChange(e.target.files[0]); // Pass the first file
                  }
                } else {
                  // Handle other types of inputs
                  field.onChange(e.target.value);
                }
              }}
              value={type === "file" ? undefined : field.value}
            />
            {error && <small style={{ color: "white" }}>{error.message}</small>}
          </Form.Item>
        )}
      />
    </div>
  );
};

export default CustomInput;
