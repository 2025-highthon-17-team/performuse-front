import Style from "./room/room.module.css";
import { useNavigate } from "react-router-dom";
export default function Root() {
  const navigate = useNavigate();
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
