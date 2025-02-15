import React from "react";
import Sen from "../../styles/sementic.module.css";
import Style from "../button/CustomButton.module.css";

interface ButtonProps {
  label: string;
  onClick: () => void;
}
export const CustomButton: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <div className={Sen.umjunsik}>
      <button className={Style.button} onClick={onClick}>
        <label className={`${Sen.headline_2} ${Style.labelColor}`}>
          {label}
        </label>
      </button>
    </div>
  );
};
