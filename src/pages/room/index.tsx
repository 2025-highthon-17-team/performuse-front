import { useParams } from "react-router-dom";
import QuizComponent from "../../components/quiz/QuizComponent";

export default function RoomPage() {
  const roomId = useParams<{ id: string }>().id;
  const sendAnswer = (answer: string) => {
    // eslint-disable-next-line
    console.log(answer, roomId);
  };
  return (
    <div>
      <QuizComponent
        title="퀴즈 제목"
        question="퀴즈 질문"
        point={100}
        time={10}
        type="주관식"
        sendAnswer={sendAnswer}
        selections={["선택1", "선택2", "선택3", "선택4"]}
      />
    </div>
  );
}
