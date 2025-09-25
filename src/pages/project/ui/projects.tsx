import styled from "styled-components";
import { ProjectSlide, ProjectSummary, ProjectList } from "@/widgets/project";
import { useParams, useNavigate } from "react-router-dom";

export const Projects = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const selectedProjectId = id ? parseInt(id) : undefined;

  const handleSlideClick = (projectId: number) => {
    navigate(`/projects/${projectId}`);
  };

  return (
    <ProjectsContainer>
      {selectedProjectId ? (
        <ProjectSummary selectedProjectId={selectedProjectId} />
      ) : (
        <ProjectList onClick={handleSlideClick} />
      )}
      <ProjectSlide onClick={handleSlideClick} />
    </ProjectsContainer>
  );
};


const ProjectsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 8.1rem;
  padding-top: 6rem;
`;
