import { requestMoonAge } from "@/c_widgets/home/api";
import { useEffect, useState } from "react";
import styled from "styled-components";

const MoonAge = () => {
  const [lunAge, setLunAge] = useState<number>();
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

  const handleMoonClick = () => {
    window.open(
      "https://starwalk.space/ko/moon-calendar",
      "_blank",
      "noopener,noreferrer"
    );
  };

  useEffect(() => {
    getMoonAge();
  }, []);

  return (
    <MoonAgeContainer>
      <MoonAgeValue>{lunAge}</MoonAgeValue>
      {lunAge && (
        <Moon $lunAge={lunAge} title="달의 위상" onClick={handleMoonClick} />
      )}
    </MoonAgeContainer>
  );
};

export default MoonAge;

const MoonAgeContainer = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;
`;

const Moon = styled.div<{ $lunAge: number }>`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #1c4e89;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #9bb7d4;

    ${({ $lunAge }) => {
      if ($lunAge <= 14.75) {
        // Waxing (차오름) - 오른쪽에서 왼쪽으로 채워짐 (곡선 경계)
        const percentage = ($lunAge / 14.75) * 100;
        return `clip-path: circle(${percentage}% at 100% 50%);`;
      } else {
        // Waning (기울어짐) - 왼쪽에서 오른쪽으로 비워짐 (곡선 경계)
        const percentage = ((29.5 - $lunAge) / 14.75) * 100;
        return `clip-path: circle(${percentage}% at 0% 50%);`;
      }
    }}
  }
`;

const MoonAgeValue = styled.div`
  color: #9bb7d4;
`;
