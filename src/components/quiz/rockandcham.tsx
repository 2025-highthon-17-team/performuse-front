import Sen from "../../styles/sementic.module.css";
import EmogeButton from "../button/emogebutton/emogebutton";
import S from "./rockandcham.module.css";

interface RockandChamProps {
  type: "rock" | "cham";
  time: number;
  sendAnswer: (answer: string) => void;
}

export default function RockandChamComponent({
  type,
  sendAnswer,
  time,
}: RockandChamProps) {
  const rockdatas = [
    { name: "가위", value: "rock", emoge: "✌️" },
    { name: "바위", value: "paper", emoge: "✊" },
    { name: "보", value: "scissors", emoge: "✋" },
  ];
  const chamdatas = [
    { name: "왼쪽", value: "left", emoge: "🫲" },
    { name: "중간", value: "middle", emoge: "✊" },
    { name: "오른쪽", value: "right", emoge: "🫱" },
  ];

  return (
    <div className={S.container}>
      <div className={S.title}>
        <p className={`${Sen.display_2} ${Sen.bold}`}>
          {type === "rock" ? "가위바위보" : "참참참"}
        </p>
        <span className={`${Sen.body} ${Sen.text_primary_normal}`}>
          {time}초 안에 선택해주세요
        </span>
      </div>
      <div className={S.buttons}>
        {type === "rock" &&
          rockdatas.map((data) => (
            <EmogeButton
              key={data.value}
              content={data.name}
              emoge={data.emoge}
              onClick={() => sendAnswer(data.value)}
            />
          ))}
        {type === "cham" &&
          chamdatas.map((data) => (
            <EmogeButton
              key={data.value}
              content={data.name}
              emoge={data.emoge}
              onClick={() => sendAnswer(data.value)}
            />
          ))}
      </div>
    </div>
  );
}
