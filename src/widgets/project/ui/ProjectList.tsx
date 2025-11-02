import { PROJECTS } from "@/entities/project";
import styled from "styled-components";

interface ProjectListProps {
  onClick: (id: number) => void;
}

export const ProjectList = ({ onClick }: ProjectListProps) => {
  return (
    <ProjectListContainer>
      <Title>Project List</Title>
      <Projects>
        {PROJECTS.map((project) => (
          <Project key={project.id} onClick={() => onClick(project.id)}>
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectSubtitle>{project.subtitle}</ProjectSubtitle>
          </Project>
        ))}
      </Projects>
    </ProjectListContainer>
  );
};

const ProjectListContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 50px;
  padding: 50px 0;
`;

const Title = styled.div`
  font-size: 1.2rem;
  color: #9bb7d4;
`;

const Projects = styled.div`
  display: grid;
  grid-template-rows: repeat(8, auto);
  grid-auto-flow: column;
  gap: 15px 40px;
  justify-content: center;
  align-items: start;
`;

const ProjectTitle = styled.div``;

const ProjectSubtitle = styled.div`
  font-size: 0.8rem;
  font-weight: lighter;
`;

const Project = styled.div`
  color: #9bb7d4;
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  gap: 5px;

  cursor: pointer;

  &:hover {
    color: white;
  }
`;
