import Sen from "../../../styles/sementic.module.css";
import { useState } from "react";
import CustomTextField from "../../../components/textfield/CustomTextField";
import Style from "./email.module.css";
import { CustomButton } from "../../../components/button/CustomButton";
import { useNavigate } from "react-router-dom";

export default function EmailPage() {
  const navigate = useNavigate();
  const [loginText, setLoginText] = useState<string>("");
  const loginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginText(e.target.value);
  };

  const handleNext = () => {
    localStorage.setItem("email", loginText);
    navigate("/nickname");
  };

  return (
    <div className={Style.container}>
      <div className={Style.boxs}>
        <div
          style={{ fontWeight: "bold" }}
          className={`${Style.smallBox} ${Sen.title_2}`}
        >
          이메일을 <br />
          입력해주세요
        </div>
        <div className={Style.spacer}></div>
        <CustomTextField
          placeholder="이메일을 입력해주세요"
          label="이메일"
          type="text"
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
