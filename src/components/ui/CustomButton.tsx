import { Button } from "antd";
import { ReactNode } from "react";

export type TCustomButton = {
  children: ReactNode;
  backgroundColor?: string;
  textColor?: string;
};

const CustomButton = ({
  children,
  backgroundColor = "#0566FF",
  textColor = "#fff",
}: TCustomButton) => {
  return (
    <Button
      style={{
        background: backgroundColor,
        color: textColor,
        fontSize: "16px",
        padding: "20px",
      }}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
