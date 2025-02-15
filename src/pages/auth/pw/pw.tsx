import Sen from "../../../styles/sementic.module.css";
import { useState } from "react";
import CustomTextField from "../../../components/textfield/CustomTextField";
import Style from "./pw.module.css";
import { CustomButton } from "../../../components/button/CustomButton";
import { useNavigate } from "react-router-dom";

export default function PwPage() {
  const navigate = useNavigate();
  const [loginText, setLoginText] = useState<string>("");
  const loginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginText(e.target.value);
  };

  const handleNext = () => {
    localStorage.setItem("pw", loginText);
    navigate("/email");
  };
  return (
    <div className={Style.container}>
      <div className={Style.boxs}>
        <div
          style={{ fontWeight: "bold" }}
          className={`${Style.smallBox} ${Sen.title_2}`}
        >
          비밀번호를 <br />
          입력해주세요
        </div>
        <div className={Style.spacer}></div>
        <CustomTextField
          placeholder="비밀번호를 입력해주세요"
          label="비밀번호"
          type="password"
          value={loginText}
          onChange={loginChange}
        />
        <div className={Style.spacertwo}></div>
      </div>

      {/* 버튼을 화면 하단에 배치 */}
      <div className={Style.ButtonContainer}>
        <CustomButton label="다음" onClick={handleNext} />
      </div>
    </div>
  );
}
