import React from "react";
import Style from "./Neturalitem.module.css";
import Sen from "../../../styles/sementic.module.css";

interface Props {
  user: string;
  point: number;
}

export default function NeutralItem(props: Props) {
  return (
    <div className={`${Style.container} ${Sen.body}`}>
      <div className={Style.endtoend}>
        {" "}
        <span>{props.user}님</span>
        <span style={{ color: "#7c3aed" }}>{props.point}P</span>
      </div>
    </div>
  );
}
