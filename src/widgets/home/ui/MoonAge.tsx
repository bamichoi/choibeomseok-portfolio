import { requestMoonAge } from "@/widgets/home";
import { useEffect, useState } from "react";
import styled from "styled-components";

export const MoonAge = () => {
  const [lunAge, setLunAge] = useState<number>();

  const getMoonAge = async () => {
    const today = new Date();
    const solYear = String(today.getFullYear());
    const solMonth = String(today.getMonth() + 1).padStart(2, "0");
    const solDay = String(today.getDate()).padStart(2, "0");

    try {
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
    } catch {
      // API 에러 시 반달로 설정
      console.log("moon age api error");
      setLunAge(7.5);
    }
  };

  const getMoonPath = (phase: number, size: number) => {
    const radius = size / 2;
    const centerX = radius;
    const centerY = radius;

    // 보름달일 때는 전체 원
    if (phase === 0.5) {
      return `M ${centerX - radius} ${centerY}
              A ${radius} ${radius} 0 1 1 ${centerX + radius} ${centerY}
              A ${radius} ${radius} 0 1 1 ${centerX - radius} ${centerY}
              Z`;
    }

    if (phase < 0.5) {
      // 상현달 (오른쪽이 밝음)
      const curveX = centerX + radius * (1 - 2 * phase);
      return `M ${centerX} ${centerY - radius}
              A ${radius} ${radius} 0 0 1 ${centerX} ${centerY + radius}
              A ${Math.abs(curveX - centerX)} ${radius} 0 0 ${
        phase < 0.25 ? 0 : 1
      } ${centerX} ${centerY - radius}
              Z`;
    } else {
      // 하현달 (왼쪽이 밝음)
      const curveX = centerX - radius * (1 - 2 * (1 - phase));
      return `M ${centerX} ${centerY - radius}
              A ${radius} ${radius} 0 0 0 ${centerX} ${centerY + radius}
              A ${Math.abs(curveX - centerX)} ${radius} 0 0 ${
        phase > 0.75 ? 0 : 1
      } ${centerX} ${centerY - radius}
              Z`;
    }
  };

  useEffect(() => {
    getMoonAge();
  }, []);

  const size = 130;

  if (lunAge === undefined) {
    return null;
  }

  const phase = (lunAge % 29.5) / 29.5;
  const lightPath = getMoonPath(phase, size);

  return (
    <MoonAgeContainer>
      <MoonAgeValue>{lunAge}</MoonAgeValue>
      <MoonSvg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        onClick={() =>
          window.open(
            "https://starwalk.space/ko/moon-calendar",
            "_blank",
            "noopener,noreferrer"
          )
        }
      >
        <defs>
          <radialGradient id="darkMoon" cx="30%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#4A5568" />
            <stop offset="70%" stopColor="#2D3748" />
            <stop offset="100%" stopColor="#1A202C" />
          </radialGradient>
          <radialGradient id="lightMoon" cx="30%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#FFFBF0" />
            <stop offset="30%" stopColor="#FFF59D" />
            <stop offset="60%" stopColor="#FFEB3B" />
            <stop offset="100%" stopColor="#FFC107" />
          </radialGradient>

          {/* 밝은 영역만 보이게 하는 마스크 */}
          <mask id="lightAreaMask">
            <rect width={size} height={size} fill="black" />
            {lightPath && <path d={lightPath} fill="white" />}
          </mask>
        </defs>

        {lightPath && <path d={lightPath} fill="url(#lightMoon)" />}

        {/* 크레이터들 - 밝은 영역에서만 보임 */}
        <g mask="url(#lightAreaMask)">
          <defs>
            {/* 큰 크레이터 그라데이션들 */}
            <radialGradient id="craterRim1" cx="50%" cy="50%" r="100%">
              <stop offset="0%" stopColor="#CCCCCC" stopOpacity="0.3" />
              <stop offset="70%" stopColor="#999999" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#666666" stopOpacity="0.1" />
            </radialGradient>
            <radialGradient id="craterDepth1" cx="30%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#555555" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#777777" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#999999" stopOpacity="0.2" />
            </radialGradient>
            <radialGradient id="craterCenter1" cx="40%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#777777" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#888888" stopOpacity="0.3" />
            </radialGradient>

            {/* 중간 크레이터 그라데이션들 */}
            <radialGradient id="craterRim2" cx="50%" cy="50%" r="100%">
              <stop offset="0%" stopColor="#BBBBBB" stopOpacity="0.25" />
              <stop offset="80%" stopColor="#888888" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#666666" stopOpacity="0.1" />
            </radialGradient>
            <radialGradient id="craterDepth2" cx="35%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#666666" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#888888" stopOpacity="0.2" />
            </radialGradient>
          </defs>

          {/* 큰 크레이터 (복잡한 구조) */}
          {/* 외곽 테두리 (융기된 부분) */}
          <circle
            cx={size * 0.35}
            cy={size * 0.25}
            r={size * 0.05}
            fill="url(#craterRim1)"
          />
          {/* 메인 크레이터 몸체 */}
          <circle
            cx={size * 0.35}
            cy={size * 0.25}
            r={size * 0.04}
            fill="url(#craterDepth1)"
          />
          {/* 중앙 깊은 부분 */}
          <ellipse
            cx={size * 0.352}
            cy={size * 0.248}
            rx={size * 0.018}
            ry={size * 0.015}
            fill="url(#craterCenter1)"
          />
          {/* 내부 그림자 */}
          <ellipse
            cx={size * 0.358}
            cy={size * 0.245}
            rx={size * 0.008}
            ry={size * 0.006}
            fill="#888888"
            opacity="0.3"
          />

          {/* 중간 크레이터 */}
          <circle
            cx={size * 0.65}
            cy={size * 0.4}
            r={size * 0.032}
            fill="url(#craterRim2)"
          />
          <circle
            cx={size * 0.65}
            cy={size * 0.4}
            r={size * 0.025}
            fill="url(#craterDepth2)"
          />
          <ellipse
            cx={size * 0.652}
            cy={size * 0.398}
            rx={size * 0.012}
            ry={size * 0.009}
            fill="#999999"
            opacity="0.3"
          />
          <ellipse
            cx={size * 0.655}
            cy={size * 0.396}
            rx={size * 0.005}
            ry={size * 0.004}
            fill="#777777"
            opacity="0.3"
          />

          {/* 작은 크레이터 (단순화된 구조) */}
          <circle
            cx={size * 0.45}
            cy={size * 0.7}
            r={size * 0.035}
            fill="url(#craterRim1)"
            opacity="0.6"
          />
          <circle
            cx={size * 0.45}
            cy={size * 0.7}
            r={size * 0.028}
            fill="url(#craterDepth1)"
            opacity="0.5"
          />
          <ellipse
            cx={size * 0.452}
            cy={size * 0.698}
            rx={size * 0.012}
            ry={size * 0.009}
            fill="#AAAAAA"
            opacity="0.25"
          />

          <circle
            cx={size * 0.25}
            cy={size * 0.6}
            r={size * 0.025}
            fill="url(#craterRim2)"
            opacity="0.5"
          />
          <circle
            cx={size * 0.25}
            cy={size * 0.6}
            r={size * 0.018}
            fill="url(#craterDepth2)"
            opacity="0.4"
          />
          <ellipse
            cx={size * 0.252}
            cy={size * 0.598}
            rx={size * 0.008}
            ry={size * 0.006}
            fill="#AAAAAA"
            opacity="0.2"
          />

          {/* 매우 작은 크레이터들 */}
          <circle
            cx={size * 0.75}
            cy={size * 0.25}
            r={size * 0.018}
            fill="#999999"
            opacity="0.3"
          />
          <circle
            cx={size * 0.75}
            cy={size * 0.25}
            r={size * 0.012}
            fill="#777777"
            opacity="0.25"
          />
          <circle
            cx={size * 0.752}
            cy={size * 0.248}
            r={size * 0.005}
            fill="#999999"
            opacity="0.15"
          />

          <circle
            cx={size * 0.15}
            cy={size * 0.35}
            r={size * 0.015}
            fill="#AAAAAA"
            opacity="0.25"
          />
          <circle
            cx={size * 0.15}
            cy={size * 0.35}
            r={size * 0.01}
            fill="#888888"
            opacity="0.2"
          />

          <circle
            cx={size * 0.6}
            cy={size * 0.75}
            r={size * 0.022}
            fill="url(#craterRim2)"
            opacity="0.4"
          />
          <circle
            cx={size * 0.6}
            cy={size * 0.75}
            r={size * 0.016}
            fill="url(#craterDepth2)"
            opacity="0.35"
          />
          <ellipse
            cx={size * 0.602}
            cy={size * 0.748}
            rx={size * 0.007}
            ry={size * 0.005}
            fill="#BBBBBB"
            opacity="0.2"
          />

          {/* 추가 미세한 크레이터들 */}
          <circle
            cx={size * 0.8}
            cy={size * 0.6}
            r={size * 0.008}
            fill="#999999"
            opacity="0.2"
          />
          <circle
            cx={size * 0.12}
            cy={size * 0.8}
            r={size * 0.006}
            fill="#AAAAAA"
            opacity="0.15"
          />
          <circle
            cx={size * 0.88}
            cy={size * 0.35}
            r={size * 0.005}
            fill="#888888"
            opacity="0.18"
          />
        </g>
      </MoonSvg>
    </MoonAgeContainer>
  );
};

const MoonAgeContainer = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;
`;

const MoonSvg = styled.svg`
  width: 150px;
  height: 150px;
  cursor: pointer;
  transform: rotate(6.7deg);
`;

const MoonAgeValue = styled.div`
  color: #9bb7d4;
`;
