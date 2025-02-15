import { useParams } from "react-router-dom";

export default function RoomPage() {
  const roomId = useParams<{ id: string }>().id;
  return (
    <div>
      <h1>Room {roomId}</h1>
    </div>
  );
}
