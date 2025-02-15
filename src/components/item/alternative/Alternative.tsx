import React from "react";
import Style from "./Alternativeitem.module.css";
import Sen from "../../../styles/sementic.module.css";

interface Props {
  img: string;
  user: string;
  title: string;
  point: number;
}

export default function AlternativeItem(props: Props) {
  return (
    <div className={`${Style.container} ${Sen.body}`}>
      <div className={Style.endtoend}>
        <div className={Style.userContainer}>
          <img style={{ width: 40 }} src={props.img} alt="엄랭" />
          <div className={Style.textContainer}>
            {props.user}님<br />
            {props.title}
          </div>
        </div>
        <span style={{ color: "#7c3aed" }}>{props.point}P</span>
      </div>
    </div>
  );
}
