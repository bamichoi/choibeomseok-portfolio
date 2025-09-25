import styled from "styled-components";

interface CareerProjectProps {
  id: number;
  projectTitle: string;
  description: string;
  isSelected: boolean;
  onClick: (id: number) => void;
}

export const CareerProject = ({
  id,
  projectTitle,
  description,
  isSelected,
  onClick,
}: CareerProjectProps) => {
  return (
    <CareerProjectContainer
      onClick={() => onClick(id)}
      $isSelected={isSelected}
    >
      <TaskTitle>{projectTitle}</TaskTitle>
      <Description>{description}</Description>
    </CareerProjectContainer>
  );
};


const CareerProjectContainer = styled.div<{ $isSelected: boolean }>`
  cursor: pointer;
  color: ${({ $isSelected }) => ($isSelected ? "white" : "#9bb7d4")};
  display: flex;
  flex-direction: column;
  gap: 7px;

  &:hover {
    color: white;
  }
`;

const TaskTitle = styled.div`
  font-size: 1.2rem;
  color: inherit;
  font-weight: semibold;
`;

const Description = styled.div`
  font-size: 1rem;
  color: inherit;
  font-weight: lighter;
`;
