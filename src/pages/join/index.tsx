import S from "./style.module.css";
import { useRef, useEffect, useState } from "react";
import Webcam from "react-webcam";
import { BrowserMultiFormatReader, Result } from "@zxing/library";

const QRCodeScanner: React.FC = () => {
  const webcamRef = useRef<Webcam>(null);
  const [height, setHeight] = useState<number>(0);

  const videoConstraints = {
    facingMode: "environment", // 후면 카메라 사용
    width: { ideal: 1280 }, // 가급적 높은 해상도로
    height: { ideal: 720 },
  };

  useEffect(() => {
    const codeReader = new BrowserMultiFormatReader();

    const scanQRCode = async () => {
      if (!webcamRef.current || !webcamRef.current.video) return;

      try {
        const video = webcamRef.current.video as HTMLVideoElement;
        const result: Result = await codeReader.decodeFromVideoElement(video);
        window.location.href = "/room/" + result.getText();
      } catch (error) {
        // eslint-disable-next-line
        console.error("QR Code Scan Error:", error);
      }

      requestAnimationFrame(scanQRCode);
    };

    scanQRCode();

    return () => codeReader.reset();
  }, []);

  useEffect(() => {
    const checkWebcamActive = () => {
      if (webcamRef.current?.video?.readyState === 4)
        setHeight(webcamRef.current?.getCanvas()?.height || 0);
    };

    const interval = setInterval(checkWebcamActive, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Webcam
        ref={webcamRef}
        videoConstraints={videoConstraints}
        style={{ width: "100%", height: "auto" }}
      />
      <div className={S.text} style={{ height, marginTop: -height * 1.1 }}>
        <p>QR 코드를 인식해주세요</p>
        <svg
          width={height / 2}
          height={height / 2}
          viewBox="0 0 305 305"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M302.5 102.505V52.4946C302.5 39.2352 297.233 26.5189 287.857 17.1431C278.481 7.76727 265.765 2.5 252.505 2.5H202.495M202.495 302.5H252.505C265.765 302.5 278.481 297.233 287.857 287.857C297.233 278.481 302.5 265.765 302.5 252.505V202.495M2.5 202.495V252.505C2.5 265.765 7.76727 278.481 17.1431 287.857C26.5189 297.233 39.2352 302.5 52.4946 302.5H102.505M102.505 2.5H52.4946C39.2352 2.5 26.5189 7.76727 17.1431 17.1431C7.76727 26.5189 2.5 39.2352 2.5 52.4946V102.505"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default QRCodeScanner;
