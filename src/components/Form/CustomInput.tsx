import { Form, Input } from "antd";
import { Controller } from "react-hook-form";

type TInputProps = {
  type?: string;
  name: string;
  label?: string;
  style?: React.CSSProperties; 
};

const CustomInput = ({ type = "text", name, label, style }: TInputProps) => {
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
                  if (e.target.files) {
                    field.onChange(e.target.files[0]);
                  }
                } else {
                  field.onChange(e.target.value);
                }
              }}
              value={type === "file" ? undefined : field.value}
              style={style}
            />
            {error && <small style={{ color: "red" }}>{error.message}</small>}{" "}
            {/* Changed color to red for better visibility */}
          </Form.Item>
        )}
      />
    </div>
  );
};

export default CustomInput;
