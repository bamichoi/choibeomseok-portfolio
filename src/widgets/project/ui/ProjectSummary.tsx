import { PROJECTS } from "@/entities/project";
import styled from "styled-components";
import { PreviewSlide } from "./PreviewSlide";

interface ProjectSummaryProps {
  selectedProjectId: number;
}

export const ProjectSummary = ({ selectedProjectId }: ProjectSummaryProps) => {
  const project = PROJECTS.find((project) => project.id === selectedProjectId);

  const handleSiteLinkClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <ProjectSummaryContainer>
      <TitleWrapper>
        <Logo src={project?.logo} />
        <Title>
          {project?.title}
          <ButtonsContainer>
            {project?.url && (
              <SiteLinkBtn onClick={() => handleSiteLinkClick(project.url!)}>
                둘러보기(Web)
              </SiteLinkBtn>
            )}
            {project?.appStoreUrl && (
              <SiteLinkBtn onClick={() => handleSiteLinkClick(project.appStoreUrl!)}>
                둘러보기(iOS)
              </SiteLinkBtn>
            )}
            {project?.playStoreUrl && (
              <SiteLinkBtn onClick={() => handleSiteLinkClick(project.playStoreUrl!)}>
                둘러보기(Android)
              </SiteLinkBtn>
            )}
          </ButtonsContainer>
        </Title>
      </TitleWrapper>
      <Subtitle>{project?.subtitle}</Subtitle>
      <PreviewSlideWrapper>
        <PreviewSlide images={project?.images} />
      </PreviewSlideWrapper>
      <Contents>
        <PropertyWrapper>
          <PropertyText>period :</PropertyText>
          <Date>
            {project?.startDate} - {project?.endDate}
          </Date>
        </PropertyWrapper>
        <PropertyWrapper>
          <PropertyText>stack :</PropertyText>
          <Stacks>
            {project?.stacks.map((stackLogo: string, index: number) => (
              <StackImage key={index} src={stackLogo} />
            ))}
          </Stacks>
        </PropertyWrapper>
      </Contents>
      <Description>{project?.description}</Description>
      {project?.tasks && (
        <TasksSection>
          <TasksTitle>Tasks</TasksTitle>
          <TasksList>
            {project.tasks.map((task, index) => (
              <Task key={index}>{task}</Task>
            ))}
          </TasksList>
        </TasksSection>
      )}
    </ProjectSummaryContainer>
  );
};


const ProjectSummaryContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const PreviewSlideWrapper = styled.div`
  display: flex;
  justify-content: start;
  width: fit-content;
  margin-bottom: 40px;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: start;
  gap: 10px;
  margin-bottom: 20px;
`;

const Logo = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 8px;
`;

const Title = styled.div`
  font-size: 3rem;
  color: #9bb7d4;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 20px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const Subtitle = styled.div`
  font-size: 1.1rem;
  color: #9bb7d4;
  font-weight: semibold;
  margin-bottom: 50px;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-bottom: 60px;
`;

const PropertyText = styled.div`
  font-size: 1rem;
  color: #9bb7d4;
  font-weight: semibold;
`;

const Stacks = styled.div`
  display: flex;
  gap: 12px;
`;

const StackImage = styled.img`
  width: 2rem;
  height: 2rem;
`;

const PropertyWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Date = styled.div`
  font-size: 1rem;
  color: #9bb7d4;
  font-weight: medium;
`;

const Description = styled.div`
  font-size: 1rem;
  height: fit-content;
  color: #9bb7d4;
  font-weight: medium;
  margin-top: 40px;
  width: 600px;
  line-height: 150%;
  margin-bottom: 0.5rem;
`;

const TasksSection = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const TasksTitle = styled.div`
  width: fit-content;
  padding: 6px;
  border-radius: 2px;
  color: #1c4e89;
  font-size: 1.2rem;
  font-weight: medium;
  background-color: #9bb7d4;
`;

const TasksList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Task = styled.div`
  color: #9bb7d4;
  font-size: 1rem;
`;

const SiteLinkBtn = styled.div`
  width: 120px;
  height: 35px;
  background-color: #9bb7d4;
  cursor: pointer;
  color: #1c4e89;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  font-weight: lighter;

  &:hover {
    color: white;
  }
`;
