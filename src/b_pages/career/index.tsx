import styled from "styled-components";
import TmaxSVG from "@shared/assets/images/careerLogo/tmaxLogo.svg?react";
import { useState } from "react";
import careerProjects from "@/e_entities/careers";
import CareerProject from "@/c_widgets/ui/careerProject";
import TaskDetail from "@/c_widgets/ui/taskDetail";

const Career = () => {
  const [selectedProjectId, setSelectedProjectId] = useState(3);

  const handleProjectClick = (id: number) => {
    setSelectedProjectId(id);
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
            <Period>2022.10 - 재직중</Period>
          </TextWrapper>
        </TitleWrapper>
        <Tasks>
          {careerProjects.map(
            ({ id, summary: { projectTitle, description } }) => (
              <CareerProject
                key={id}
                id={id}
                projectTitle={projectTitle}
                description={description}
                onClick={handleProjectClick}
                isSelected={id === selectedProjectId}
              />
            )
          )}
        </Tasks>
      </Summary>
      <Divider />
      <Detail>
        <TaskDetail selectedProjectId={selectedProjectId} />
      </Detail>
    </CareerContainer>
  );
};

export default Career;

const CareerContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 8.1rem;
  padding-top: 6rem;
`;

const Summary = styled.div`
  width: 45%;
  overflow: auto;

  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const Divider = styled.div`
  width: 1px;
  height: 80vh;
  background-color: #9bb7d4;
`;

const Detail = styled.div`
  width: 55%;
  padding-left: 2.5rem;
`;

const TitleWrapper = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  align-items: center;
  gap: 18px;
  margin-bottom: 2rem;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const Title = styled.div`
  font-size: 1.3rem;
  color: #9bb7d4;
  font-weight: semibold;
`;

const Period = styled.div`
  font-size: 0.9rem;
  color: #9bb7d4;
  font-weight: lighter;
`;

const LogoWrapper = styled.div``;

const Tasks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
`;
