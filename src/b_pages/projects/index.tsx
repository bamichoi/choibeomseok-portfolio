import styled from "styled-components";
import ProjectSlide from "@/c_widgets/ui/projectSlide";
import { useState } from "react";
import Summary from "@/c_widgets/ui/summary";

const Projects = () => {
  const [selectedProjectId, setSelectedProjectId] = useState<number>(1);

  const handleSlideClick = (id: number) => {
    setSelectedProjectId(id);
  };

  return (
    <ProjectsContainer>
      <Summary selectedProjectId={selectedProjectId} />
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
  padding: 20px;
`;
