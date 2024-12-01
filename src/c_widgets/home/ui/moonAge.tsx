import { requestMoonAge } from "@/c_widgets/home/api/reqMoonAge";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const MoonAge = () => {
  const [lunAge, setLunAge] = useState<number>();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const getMoonAge = async () => {
    const today = new Date();
    const solYear = String(today.getFullYear());
    const solMonth = String(today.getMonth() + 1).padStart(2, "0");
    const solDay = String(today.getDate()).padStart(2, "0");

    const res = await requestMoonAge({ solYear, solMonth, solDay });
    const {
      response: {
        body: {
          items: {
            item: { lunAge },
          },
        },
      },
    } = res.data;

    setLunAge(lunAge);
  };
  const drawMoon = (ctx: CanvasRenderingContext2D, lunAge: number) => {
    const canvasWidth = ctx.canvas.width;
    const canvasHeight = ctx.canvas.height;
    const radius = canvasWidth / 2;

    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    const tiltAngle = 10;

    ctx.save();
    ctx.translate(radius, radius);
    ctx.rotate((tiltAngle * Math.PI) / 180);
    ctx.translate(-radius, -radius);

    ctx.fillStyle = "#9bb7d4";
    ctx.beginPath();
    ctx.arc(radius, radius, radius, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "#1c4e89";
    ctx.beginPath();

    const isWaxing = lunAge <= 14.75;
    const shadowRadius = radius;
    const shadowOffset = isWaxing
      ? canvasWidth * (lunAge / 14.75)
      : canvasWidth * ((29.5 - lunAge) / 14.75);

    if (isWaxing) {
      ctx.arc(radius - shadowOffset, radius, shadowRadius, 0, Math.PI * 2);
    } else {
      ctx.arc(radius + shadowOffset, radius, shadowRadius, 0, Math.PI * 2);
    }
    ctx.fill();

    ctx.restore();
  };

  useEffect(() => {
    getMoonAge();
  }, []);

  useEffect(() => {
    if (lunAge !== undefined && canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");
      if (ctx) {
        drawMoon(ctx, lunAge);
      }
    }
  }, [lunAge]);

  return (
    <MoonAgeContainer>
      <MoonAgeValue>{lunAge}</MoonAgeValue>
      <MoonCanvas
        ref={canvasRef}
        width="100"
        height="100"
        title="달의 위상"
        onClick={() =>
          window.open(
            "https://starwalk.space/ko/moon-calendar",
            "_blank",
            "noopener,noreferrer"
          )
        }
      />
    </MoonAgeContainer>
  );
};

export default MoonAge;

const MoonAgeContainer = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;
`;

const MoonCanvas = styled.canvas`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #1c4e89;
  cursor: pointer;
`;

const MoonAgeValue = styled.div`
  color: #9bb7d4;
`;
