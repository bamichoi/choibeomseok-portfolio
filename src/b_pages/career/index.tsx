import styled from "styled-components";
import TmaxSVG from "@shared/assets/images/careerLogo/tmaxLogo.svg?react";
import { useState } from "react";
import tasks from "@/e_entities/careers";
import Task from "@/c_widgets/ui/task";
import TaskDetail from "@/c_widgets/ui/taskDetail";

const Career = () => {
  const [selectedTaskId, setSelectedTaskId] = useState(1);

  const handleTaskClick = (id: number) => {
    setSelectedTaskId(id);
  };
  return (
    <CareerContainer>
      <Summary>
        <TitleWrapper>
          <LogoWrapper>
            <TmaxSVG />
          </LogoWrapper>
          <TextWrapper>
            <Title>TmaxAI</Title>
            <Period>2022.10.4 ~ 재직중</Period>
          </TextWrapper>
        </TitleWrapper>
        <Tasks>
          {tasks.map(({ id, summary: { taskTitle, description } }) => (
            <Task
              key={id}
              id={id}
              taskTitle={taskTitle}
              description={description}
              onClick={handleTaskClick}
              isSelected={id === selectedTaskId}
            />
          ))}
        </Tasks>
      </Summary>
      <Divider />
      <Detail>
        <TaskDetail selectedTaskId={selectedTaskId} />
      </Detail>
    </CareerContainer>
  );
};

export default Career;

const CareerContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 120px;
  padding-top: 100px;
`;

const Summary = styled.div`
  width: 40%;
  overflow: scroll;
`;

const Divider = styled.div`
  width: 1px;
  height: 80vh;
  background-color: #9bb7d4;
`;

const Detail = styled.div`
  width: 60%;
  padding-left: 40px;
`;

const TitleWrapper = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 80px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const Title = styled.div`
  font-size: 20px;
  color: #9bb7d4;
  font-weight: semibold;
`;

const Period = styled.div`
  font-size: 14px;
  color: #9bb7d4;
  font-weight: lighter;
`;

const LogoWrapper = styled.div``;

const Tasks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
