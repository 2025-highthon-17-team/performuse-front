import S from "./QuizComponent.module.css";
import Sen from "../../styles/sementic.module.css";
import { useState } from "react";
import { CustomButton } from "../button/CustomButton";
import CustomTextField from "../textfield/CustomTextField";

export interface QuizComponentProps {
  title: string;
  question: string;
  point: number;
  time: number;
  type: "주관식" | "객관식";
  selections?: string[];
  sendAnswer: (answer: string) => void;
}

export default function QuizComponent({
  time,
  title,
  point,
  question,
  type,
  selections,
  sendAnswer,
}: QuizComponentProps) {
  const [answer, setAnswer] = useState<string>("");
  return (
    <div className={`${Sen.background_background_neutral} ${S.container}`}>
      <div className={S.title}>
        <span>
          {title} ({point}점)
        </span>
        <span className={`${Sen.text_primary_normal}`}>
          남은 시간: {time}초
        </span>
      </div>
      <div
        className={`${S.question} ${Sen.background_background_alternative} ${Sen.text_primary_normal} ${Sen.bold} ${Sen.label}`}
      >
        {question}
      </div>
      {type === "객관식" ? (
        <div className={S.selections}>
          {selections?.map((selection, index) => (
            <CustomButton
              label={selection}
              key={index}
              onClick={() => sendAnswer(selection)}
            />
          ))}
        </div>
      ) : (
        <>
          <CustomTextField
            label={"답변"}
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          />
          <CustomButton label={"제출"} onClick={() => sendAnswer(answer)} />
        </>
      )}
    </div>
  );
}
