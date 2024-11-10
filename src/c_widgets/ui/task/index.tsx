import styled from "styled-components";

interface TaskProps {
  id: number;
  taskTitle: string;
  description: string;
  isSelected: boolean;
  onClick: (id: number) => void;
}

const Task = ({
  id,
  taskTitle,
  description,
  isSelected,
  onClick,
}: TaskProps) => {
  return (
    <TaskContainer onClick={() => onClick(id)} $isSelected={isSelected}>
      <TaskTitle>{taskTitle}</TaskTitle>
      <Description>-{description}</Description>
    </TaskContainer>
  );
};

export default Task;

const TaskContainer = styled.div<{ $isSelected: boolean }>`
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
  font-size: 20px;
  color: inherit;
  font-weight: semibold;
`;

const Description = styled.div`
  font-size: 14px;
  color: inherit;
`;
