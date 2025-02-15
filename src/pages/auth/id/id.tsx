import Sen from "../../../styles/sementic.module.css";
import { useState } from "react";
import CustomTextField from "../../../components/textfield/CustomTextField";
import Style from "./id.module.css";
import { CustomButton } from "../../../components/button/CustomButton";

export default function IdPage() {
  const [loginText, setLoginText] = useState<string>("");
  const loginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginText(e.target.value);
  };
  return (
    <div className={Style.container}>
      <div className={Style.boxs}>
        <div
          style={{ fontWeight: "bold" }}
          className={`${Style.smallBox} ${Sen.title_2}`}
        >
          아이디를 <br />
          입력해주세요
        </div>
        <div className={Style.spacer}></div>
        <CustomTextField
          placeholder="아이디를 입력하세요"
          label="아이디"
          type="text"
          value={loginText}
          onChange={loginChange}
        />
        <div className={Style.spacertwo}></div>
      </div>

      {/* 버튼을 화면 하단에 배치 */}
      <div className={Style.ButtonContainer}>
        <CustomButton label="다음" onClick={() => {}} />
      </div>
    </div>
  );
}
