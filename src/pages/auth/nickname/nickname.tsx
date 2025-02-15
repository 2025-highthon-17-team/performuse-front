import Sen from "../../../styles/sementic.module.css";
import { useState } from "react";
import CustomTextField from "../../../components/textfield/CustomTextField";
import Style from "./nickname.module.css";
import { CustomButton } from "../../../components/button/CustomButton";
import { useAxiosCRUD } from "../../../hooks/client";

export default function NickNamePage() {
  const [loginText, setLoginText] = useState<string>("");
  const { signup } = useAxiosCRUD();
  const loginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginText(e.target.value);
  };

  const handleLogin = async () => {
    const id: string | null = localStorage.getItem("id") ?? "leegeh1213";
    const password: string | null = localStorage.getItem("pw") ?? "1234qwer";
    const email: string | null =
      localStorage.getItem("email") ?? "leegeh1213@gmail.com";
    try {
      await signup(id, password, email, loginText);
      alert("회원가입 성공!");
    } catch (error) {
      alert(`회원가입 실패! ${error}`);
    }
  };
  return (
    <div className={Style.container}>
      <div className={Style.boxs}>
        <div
          style={{ fontWeight: "bold" }}
          className={`${Style.smallBox} ${Sen.title_2}`}
        >
          닉네임을 <br />
          입력해주세요
        </div>
        <div className={Style.spacer}></div>
        <CustomTextField
          placeholder="닉네임을 입력해주세요"
          label="닉네임"
          type="text"
          value={loginText}
          onChange={loginChange}
        />
        <div className={Style.spacertwo}></div>
      </div>

      {/* 버튼을 화면 하단에 배치 */}
      <div className={Style.ButtonContainer}>
        <CustomButton label="다음" onClick={handleLogin} />
      </div>
    </div>
  );
}
