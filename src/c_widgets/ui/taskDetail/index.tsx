import tasks from "@/e_entities/careers";
import styled from "styled-components";

interface TaskDetailProps {
  selectedTaskId: number;
}

const TaskDetail = ({ selectedTaskId }: TaskDetailProps) => {
  const selectedTask = tasks.find((task) => task.id === selectedTaskId);
  return (
    <TaskDetailContainer>
      <Title>{selectedTask?.summary.taskTitle}</Title>
    </TaskDetailContainer>
  );
};

export default TaskDetail;

const TaskDetailContainer = styled.div``;

const Title = styled.div`
  font-size: 1.8rem;
  color: #9bb7d4;
  font-weight: semibold;
`;
