// import { useParams } from "react-router-dom";
import CanvasComponent from "../../components/canvas/CanvasComponent";
import QuizComponent from "../../components/quiz/QuizComponent";
import ResultComponent from "../../components/quiz/ResultComponent";
import RockandChamComponent from "../../components/quiz/rockandcham";
import { useState } from "react";

export default function RoomPage() {
  // const roomId = useParams<{ id: string }>().id;
  const [index, setIndex] = useState<number>(1);
  const sendAnswer = (answer: string) => {
    // eslint-disable-next-line
    // console.log(answer, roomId);
    setIndex((prev) => prev + 1);
  };

  // multipart/form-data
  const sendImage = (image: File) => {
    // eslint-disable-next-line
    console.log(image);
  };

  const testCases = [
    {
      index: 1,
      component: "ResultComponent",
      props: {
        type: "wating",
        point: 0,
      },
    },
    {
      index: 2,
      component: "QuizComponent",
      props: {
        title: "역사 퀴즈",
        question: "조선 시대 세종대왕이 창제한 한글의 원래 이름은?",
        point: 75,
        time: 10,
        type: "주관식",
        selections: [],
      },
    },
    {
      index: 3,
      component: "ResultComponent",
      props: {
        type: "correct",
        point: 75,
      },
    },
    {
      index: 4,
      component: "ResultComponent",
      props: {
        type: "wating",
        point: 0,
      },
    },
    {
      index: 5,
      component: "QuizComponent",
      props: {
        title: "과학 퀴즈",
        question: "물의 화학식은?",
        point: 50,
        time: 10,
        type: "주관식",
        selections: [],
      },
    },
    {
      index: 6,
      component: "ResultComponent",
      props: {
        type: "correct",
        point: 50,
      },
    },
    {
      index: 7,
      component: "ResultComponent",
      props: {
        type: "wating",
        point: 0,
      },
    },
    {
      index: 8,
      component: "QuizComponent",
      props: {
        title: "지리 퀴즈",
        question: "아프리카 대륙에서 가장 넓은 나라는?",
        point: 30,
        time: 10,
        type: "객관식",
        selections: ["이집트", "알제리", "남아프리카공화국", "수단"],
      },
    },
    {
      index: 9,
      component: "ResultComponent",
      props: {
        type: "correct",
        point: 30,
      },
    },
    {
      index: 10,
      component: "ResultComponent",
      props: {
        type: "wating",
        point: 0,
      },
    },
    {
      index: 11,
      component: "QuizComponent",
      props: {
        title: "문학 퀴즈",
        question: "셰익스피어의 4대 비극에 속하지 않는 작품은?",
        point: 90,
        time: 10,
        type: "객관식",
        selections: ["햄릿", "오셀로", "로미오와 줄리엣", "리어왕"],
      },
    },
    {
      index: 12,
      component: "ResultComponent",
      props: {
        type: "correct",
        point: 90,
      },
    },
    {
      index: 13,
      component: "ResultComponent",
      props: {
        type: "wating",
        point: 0,
      },
    },
    {
      index: 14,
      component: "QuizComponent",
      props: {
        title: "스포츠 퀴즈",
        question: "올림픽에서 처음으로 정식 종목이 된 e스포츠 게임은?",
        point: 60,
        time: 10,
        type: "객관식",
        selections: ["리그 오브 레전드", "도타2", "스타크래프트", "FIFA"],
      },
    },
    {
      index: 15,
      component: "ResultComponent",
      props: {
        type: "correct",
        point: 60,
      },
    },
    {
      index: 16,
      component: "ResultComponent",
      props: {
        type: "wating",
        point: 0,
      },
    },
    {
      index: 17,
      component: "RockandChamComponent",
      props: {
        type: "rock",
        time: 5,
      },
    },
    {
      index: 18,
      component: "ResultComponent",
      props: {
        type: "win",
        point: 40,
      },
    },
    {
      index: 19,
      component: "ResultComponent",
      props: {
        type: "wating",
        point: 0,
      },
    },
    {
      index: 20,
      component: "RockandChamComponent",
      props: {
        type: "rock",
        time: 5,
      },
    },
    {
      index: 21,
      component: "ResultComponent",
      props: {
        type: "win",
        point: 30,
      },
    },
    {
      index: 22,
      component: "ResultComponent",
      props: {
        type: "wating",
        point: 0,
      },
    },
    {
      index: 23,
      component: "CanvasComponent",
      props: {},
    },
    {
      index: 24,
      component: "ResultComponent",
      props: {
        type: "wating",
        point: 0,
      },
    },
    {
      index: 25,
      component: "RockandChamComponent",
      props: {
        type: "cham",
        time: 5,
      },
    },
    {
      index: 26,
      component: "ResultComponent",
      props: {
        type: "result",
        point: 1000,
      },
    },
  ];

  return (
    <div>
      {testCases[index].component === "QuizComponent" && (
        // @ts-expect-error
        <QuizComponent
          {...(testCases[index].props as Record<string, unknown>)}
          sendAnswer={sendAnswer}
        />
      )}
      {testCases[index].component === "ResultComponent" && (
        // @ts-expect-error
        <ResultComponent
          {...(testCases[index].props as Record<string, unknown>)}
          send={sendAnswer}
        />
      )}
      {testCases[index].component === "RockandChamComponent" && (
        // @ts-expect-error
        <RockandChamComponent
          {...(testCases[index].props as Record<string, unknown>)}
          sendAnswer={sendAnswer}
        />
      )}
      {testCases[index].component === "CanvasComponent" && (
        // @ts-expect-error
        <CanvasComponent sendImage={sendAnswer} />
      )}
    </div>
  );
}
