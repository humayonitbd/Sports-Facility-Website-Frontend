import { Form, Select } from "antd";
import { Controller } from "react-hook-form";


type TSelectProps = {
  label: string;
  name: string;
  options?: { value: string; label: string; disabled?: boolean }[] | undefined;
  disabled?: boolean;
  defaultValue?: string;
};
const CustomSelect = ({
  label,
  name,
  options,
  disabled,
  defaultValue,
}: TSelectProps) => {
  return (
    <Controller
      name={name}
      defaultValue={defaultValue}
      render={({ field, fieldState: { error } }) => (
        <Form.Item label={label}>
          <Select
            style={{ width: "100%" }}
            {...field}
            options={options}
            disabled={disabled}
            defaultValue={defaultValue}
          />
          {error && <small style={{ color: "red" }}>{error.message}</small>}
        </Form.Item>
      )}
    />
  );
};

export default CustomSelect;
