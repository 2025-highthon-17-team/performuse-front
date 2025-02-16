import S from "./CanvasComponent.module.css";
import Sen from "../../styles/sementic.module.css";
import { useRef, useState } from "react";
import { CustomButton } from "../button/CustomButton";

interface CanvasComponentProps {
  sendImage: () => void;
}

export default function CanvasComponent({ sendImage }: CanvasComponentProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [drawing, setDrawing] = useState(false);
  const [prevPos, setPrevPos] = useState<{ x: number; y: number } | null>(null);
  const [lineThickness, setLineThickness] = useState(1);

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = (e.target as HTMLCanvasElement).getBoundingClientRect();
    setDrawing(true);
    setPrevPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!drawing || !prevPos) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.lineWidth = lineThickness;

    const rect = canvas.getBoundingClientRect();
    const currentPos = { x: e.clientX - rect.left, y: e.clientY - rect.top };

    ctx.beginPath();
    ctx.moveTo(prevPos.x, prevPos.y);
    ctx.lineTo(currentPos.x, currentPos.y);
    ctx.stroke();
    setPrevPos(currentPos);
  };

  const endDrawing = () => {
    setDrawing(false);
    setPrevPos(null);
  };

  const handleSendImage = () => {
    sendImage();
  };

  return (
    <div className={`${S.container} ${Sen.background_background_neutral}`}>
      <div style={{ marginTop: "10px" }}>
        <button
          onClick={() => setLineThickness(1)}
          className={S.setThickButton}
        >
          <svg
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.0999756"
              y="0.5"
              width="12"
              height="12"
              rx="6"
              fill="white"
            />
          </svg>
        </button>
        <button
          onClick={() => setLineThickness(3)}
          className={S.setThickButton}
        >
          <svg
            width="16"
            height="15"
            viewBox="0 0 16 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="0.900024" width="15" height="15" rx="7.5" fill="white" />
          </svg>
        </button>
        <button
          onClick={() => setLineThickness(5)}
          className={S.setThickButton}
        >
          <svg
            width="18"
            height="17"
            viewBox="0 0 18 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="0.699951" width="17" height="17" rx="8.5" fill="white" />
          </svg>
        </button>
        <button
          onClick={() => setLineThickness(7)}
          className={S.setThickButton}
        >
          <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="0.5"
              width="20"
              height="20"
              rx="10"
              fill="#7C3AED"
            />
          </svg>
        </button>
      </div>
      <canvas
        className={S.canvas}
        ref={canvasRef}
        width={300}
        height={400}
        style={{ backgroundColor: "white", cursor: "crosshair" }}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={endDrawing}
        onMouseLeave={endDrawing}
        onTouchStart={(e) => {
          e.preventDefault();
          const touch = e.touches[0];
          const rect = (e.target as HTMLCanvasElement).getBoundingClientRect();
          setDrawing(true);
          setPrevPos({
            x: touch.clientX - rect.left,
            y: touch.clientY - rect.top,
          });
        }}
        onTouchMove={(e) => {
          e.preventDefault();
          if (!drawing || !prevPos) return;
          const canvas = canvasRef.current;
          if (!canvas) return;
          const ctx = canvas.getContext("2d");
          if (!ctx) return;
          ctx.lineWidth = lineThickness;
          const touch = e.touches[0];
          const rect = canvas.getBoundingClientRect();
          const currentPos = {
            x: touch.clientX - rect.left,
            y: touch.clientY - rect.top,
          };
          ctx.beginPath();
          ctx.moveTo(prevPos.x, prevPos.y);
          ctx.lineTo(currentPos.x, currentPos.y);
          ctx.stroke();
          setPrevPos(currentPos);
        }}
        onTouchEnd={(e) => {
          e.preventDefault();
          endDrawing();
        }}
      />
      <CustomButton label="Send" onClick={handleSendImage} />
    </div>
  );
}
