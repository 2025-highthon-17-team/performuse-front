import { useAxiosCRUD } from "../../../hooks/client";
import Sen from "../../../styles/sementic.module.css";
import { useState } from "react";
import CustomTextField from "../../../components/textfield/CustomTextField";
import { CustomButton } from "../../../components/button/CustomButton";
import Style from "../login/login.module.css";
export default function LoginPage() {
  const [loginText, setLoginText] = useState<string>("");
  const loginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginText(e.target.value);
  };
  const [passwordText, setPasswordText] = useState<string>("");
  const passwordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordText(e.target.value);
  };
  const { login } = useAxiosCRUD();
  const handleLogin = async () => {
    if (loginText === "" || passwordText === "") {
      alert("아이디와 비밀번호를 입력해주세요");
      return;
    }
    try {
      await login(loginText, passwordText);
      alert("로그인 성공!");
    } catch (error) {
      alert(`로그인 실패! ${error}`);
    }
  };
  return (
    <div className={Style.container}>
      <div className={Style.smallBox}></div>
      <div className={Style.logoBox}></div>

      <div className={`${Style.boxs}`}>
        <CustomTextField
          placeholder="아이디를 입력하세요"
          label="아이디"
          type="text"
          value={loginText}
          onChange={loginChange}
        />
        <div className={Style.spacer}></div>
        <CustomTextField
          placeholder="비밀번호를 입력하세요"
          label="비밀번호"
          type="password"
          value={passwordText}
          onChange={passwordChange}
        />
        <div className={Style.ButtonContainer}></div>
        <CustomButton label="로그인" onClick={handleLogin} />
        <div
          className={Sen.label}
          style={{ textAlign: "center", marginTop: 20 }}
        >
          계정이 없으신가요?{" "}
          <span className={Sen.text_primary_neutral}>회원가입</span>
        </div>
      </div>
    </div>
  );
}
