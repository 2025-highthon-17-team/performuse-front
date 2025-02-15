import AlternativeItem from "../../components/item/alternative/Alternative";
import NeutralItem from "../../components/item/neutralitem/NeutralItem";
import Style from "./point.module.css";
import Sen from "../../styles/sementic.module.css";

export default function PointPage() {
  return (
    <div>
      <NeutralItem point={20} user="이건희" />
      <hr style={{ margin: 20 }} />
      <div className={`${Style.container} ${Sen.body}`}>
        <p style={{ fontWeight: "bold" }}>포인트 교환소</p>
        <AlternativeItem
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1DNsfskjJtWhewcdCt8_4spNsZf7lmL3wKQ&s"
          point={30}
          user="NewJeans"
          title="굿 굿즈"
        />
        <AlternativeItem
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1DNsfskjJtWhewcdCt8_4spNsZf7lmL3wKQ&s"
          point={30}
          user="NewJeans"
          title="굿 굿즈"
        />
        <AlternativeItem
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1DNsfskjJtWhewcdCt8_4spNsZf7lmL3wKQ&s"
          point={30}
          user="NewJeans"
          title="굿 굿즈"
        />
      </div>
    </div>
  );
}
