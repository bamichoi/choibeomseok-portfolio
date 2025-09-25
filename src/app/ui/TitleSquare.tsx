import styled from "styled-components";
import { PlantImage } from "@shared/assets";

interface TitleProps {
  onClick: () => void;
}

export const TitleSquare = ({ onClick }: TitleProps) => {
  return (
    <TitleContainer onClick={onClick}>
      <Name>Choi Beomseok | 최 범 석</Name>
      <StatusIcon src={PlantImage} alt="plant" />
      <Job>Frontend Developer</Job>
    </TitleContainer>
  );
};

const TitleContainer = styled.div`
  padding: 1.2rem;
  color: #9bb7d4;
  border: 2px solid #9bb7d4;
  width: 15rem;
  height: 15rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  z-index: 1000;
  font-size: 1rem;

  &:hover {
    border: 2px solid white;
    color: white;
  }
`;

const Name = styled.div``;

const Job = styled.div`
  width: 100%;
  text-align: end;
`;

const StatusIcon = styled.img`
  width: 20px;
  height: 30px;
  align-self: center;
`;
