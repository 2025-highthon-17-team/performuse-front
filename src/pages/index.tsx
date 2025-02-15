import Sen from "../styles/sementic.module.css";
import CustomTextField from "../components/textfield/CustomTextField";
import { useState } from "react";
import Style from "./room/room.module.css";
import { useNavigate } from "react-router-dom";
export default function Root() {
  const navigate = useNavigate();
  const [text, setText] = useState<string>("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  return (
    <div className={Style.container}>
      <img style={{ width: "350px" }} src="/gogogogozuieq.png" alt="" />
      <p></p>

      <img
        onClick={() => {
          navigate("/point");
        }}
        style={{ cursor: "pointer", width: "350px" }}
        src="/gopoint.png"
        alt=""
      />
    </div>
  );
}
