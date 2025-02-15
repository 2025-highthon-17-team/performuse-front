import { useAxiosCRUD } from "../hooks/client";
import Sen from "../styles/sementic.module.css";

export default function Root() {
  const { login } = useAxiosCRUD();
  return (
    <div className={`${Sen.text_primary_normal} ${Sen.title_1} ${Sen.normal}`}>
      나랏말싸미 듕귁에 달아 문자와로 서르 사맛디 아니할쌔 wertyuiop
      <button onClick={() => login("qwerty", "q1w2e3r4t5y6!")}>
        로그인 테스트
      </button>
    </div>
  );
}
