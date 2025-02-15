import React from "react";
import Sen from "../../styles/sementic.module.css";
import Style from "./CustomTextField.module.css";

interface TextFieldProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder?: string;
}

const CustomTextField: React.FC<TextFieldProps> = ({
  label,
  value,
  onChange,
  type = "text",
  placeholder: place = "",
}) => {
  return (
    <div className={Style.full}>
      <div className={Style.box}>
        <label className={`${Sen.headline_2} ${Style.labelColor}`}>
          {label}
        </label>
        <input
          className={`${Style.textField} ${Sen.label}`}
          type={type}
          placeholder={place}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};
export default CustomTextField;
