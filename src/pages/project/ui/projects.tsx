import styled from "styled-components";
import ProjectSlide from "@/widgets/project/ui/projectSlide";
import ProjectSummary from "@/widgets/project/ui/projectSummary";
import ProjectList from "@/widgets/project/ui/projectList";
import { useParams, useNavigate } from "react-router-dom";

const Projects = () => {
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

export default Projects;

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
