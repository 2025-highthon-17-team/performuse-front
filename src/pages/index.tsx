import Sen from "../styles/sementic.module.css";
import CustomTextField from "../components/textfield/CustomTextField";
import { useState } from "react";

export default function Root() {
  const [text, setText] = useState<string>("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  return (
    <div>
      <div
        className={`${Sen.text_primary_normal} ${Sen.title_1} ${Sen.normal}`}
      >
        나랏말싸미 듕귁에 달아 문자와로 서르 사맛디 아니할쌔 wertyuiop
      </div>
      <CustomTextField
        placeholder="아이디를 입력하세요"
        label="아이디"
        type="text"
        value={text}
        onChange={handleChange}
      />
    </div>
  );
}
