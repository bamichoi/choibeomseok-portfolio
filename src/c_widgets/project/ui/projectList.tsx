import projects from "@/e_entities/project/model/projects";
import styled from "styled-components";

interface ProjectListProps {
  onClick: (id: number) => void;
}

const ProjectList = ({ onClick }: ProjectListProps) => {
  return (
    <ProjectListContainer>
      <Title>Side Project List</Title>
      <Projects>
        {projects.slice(0, 5).map((project) => (
          <Project key={project.id} onClick={() => onClick(project.id)}>
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectSubtitle>{project.subtitle}</ProjectSubtitle>
          </Project>
        ))}
      </Projects>
    </ProjectListContainer>
  );
};

export default ProjectList;

const ProjectListContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

const Title = styled.div`
  font-size: 1.2rem;
  color: #9bb7d4;
`;

const Projects = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
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
