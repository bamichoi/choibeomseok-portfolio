import styled from "styled-components";
import { CareerHeader } from "./CareerHeader";
import { CareerProject } from "./CareerProject";
import type { Project } from "@shared/types/career";

interface CareerSummaryProps {
  id: string;
  title: string;
  period: string;
  logo?: React.ComponentType | string;
  projects: Project[];
  isExpanded: boolean;
  onToggle: (id: string) => void;
  selectedProjectId: number;
  onProjectClick: (id: number) => void;
}

export const CareerSummary = ({
  id,
  title,
  period,
  logo,
  projects,
  isExpanded,
  onToggle,
  selectedProjectId,
  onProjectClick,
}: CareerSummaryProps) => {
  return (
    <Summary>
      <CareerHeader
        title={title}
        period={period}
        logo={logo}
        isExpanded={isExpanded}
        onToggle={() => onToggle(id)}
      />
      <TasksWrapper $isExpanded={isExpanded}>
        <Tasks>
          {projects.map(
            ({ id, summary: { projectTitle, description } }) => (
              <CareerProject
                key={id}
                id={id}
                projectTitle={projectTitle}
                description={description}
                onClick={onProjectClick}
                isSelected={id === selectedProjectId}
              />
            )
          )}
        </Tasks>
      </TasksWrapper>
    </Summary>
  );
};


const Summary = styled.div`
  width: 100%;
`;

const TasksWrapper = styled.div<{ $isExpanded: boolean }>`
  max-height: ${({ $isExpanded }) => ($isExpanded ? "1000px" : "0")};
  opacity: ${({ $isExpanded }) => ($isExpanded ? "1" : "0")};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out;
`;

const Tasks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
`;