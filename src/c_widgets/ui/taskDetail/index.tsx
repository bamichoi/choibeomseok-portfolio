import careerProjects from "@/e_entities/careers";
import styled from "styled-components";

interface TaskDetailProps {
  selectedProjectId: number;
}

const TaskDetail = ({ selectedProjectId }: TaskDetailProps) => {
  const selectedProject = careerProjects.find(
    (project) => project.id === selectedProjectId
  );
  return (
    <TaskDetailContainer>
      <Contents>
        <Title>{selectedProject?.summary.projectTitle}</Title>
        <Subtitle>Tasks</Subtitle>
        <Tasks>
          {selectedProject?.tasks.map((task) => (
            <Task>{task}</Task>
          ))}
        </Tasks>
        <Subtitle>Articles</Subtitle>
      </Contents>
    </TaskDetailContainer>
  );
};

export default TaskDetail;

const TaskDetailContainer = styled.div``;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Title = styled.div`
  font-size: 1.8rem;
  color: #9bb7d4;
  font-weight: semibold;
  margin-bottom: 50px;
`;

const Tasks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Task = styled.div`
  color: #9bb7d4;
  font-size: 0.9rem;
`;

const Subtitle = styled.div`
  color: #9bb7d4;
  font-size: 1rem;
  font-weight: medium;
`;

const Articles = styled.div``;
