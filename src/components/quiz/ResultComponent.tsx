import { useEffect } from "react";
import Sen from "../../styles/sementic.module.css";

interface ResultComponentProps {
  type: "wating" | "win" | "lose" | "correct" | "wrong";
  send: (answer: string) => void;
  point?: number;
}

export default function ResultComponent({
  type,
  point,
  send,
}: ResultComponentProps) {
  const data = [
    { type: "wating", text: "결과를 기다리는 중이에요", emoge: "😄" },
    { type: "win", text: "이겼어요!", emoge: "👏" },
    { type: "lose", text: "졌어요...", emoge: "😢" },
    { type: "correct", text: "정답이에요!", emoge: "👏" },
    { type: "wrong", text: "오답이에요...", emoge: "😢" },
    { type: "result", text: "결과", emoge: "🎉" },
  ];
  const result = data.find((d) => d.type === type);
  useEffect(() => {
    setTimeout(() => {
      send("df");
    }, 3000);
  }, []);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80svh",
        flexDirection: "column",
      }}
    >
      <div style={{ fontSize: "100px" }}>{result?.emoge}</div>
      <div className={`${Sen.display_1} ${Sen.bold}`}>{result?.text}</div>
      {point && (
        <p className={Sen.text_primary_normal}>
          {point > 0 ? "+" : "-"}
          {point} point
        </p>
      )}
    </div>
  );
}
