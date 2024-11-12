import styled from "styled-components";
import ProjectSlide from "@/c_widgets/ui/projectSlide";
import { useState } from "react";
import Summary from "@/c_widgets/ui/projectSummary";
import ProjectList from "@/c_widgets/ui/projectList";

const Projects = () => {
  const [selectedProjectId, setSelectedProjectId] = useState<number>();

  const handleSlideClick = (id: number) => {
    setSelectedProjectId(id);
  };

  return (
    <ProjectsContainer>
      {selectedProjectId ? (
        <Summary selectedProjectId={selectedProjectId} />
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
