import styled from "styled-components";
import { useState } from "react";
import { CareerSummary, TaskDetail } from "@/widgets/career";
import { CAREER_DATA } from "@/entities/career";

export const Career = () => {
  const [selectedProjectId, setSelectedProjectId] = useState(1);
  const [expandedCareerId, setExpandedCareerId] = useState<string>("tmax");

  const handleProjectClick = (id: number) => {
    setSelectedProjectId(id);
  };

  const handleToggle = (id: string) => {
    setExpandedCareerId(expandedCareerId === id ? "" : id);
  };

  return (
    <CareerContainer>
      <SummaryContainer>
        {CAREER_DATA.map((career) => (
          <CareerSummary
            key={career.id}
            id={career.id}
            title={career.title}
            period={career.period}
            logo={career.logo}
            projects={career.projects}
            isExpanded={expandedCareerId === career.id}
            onToggle={handleToggle}
            selectedProjectId={selectedProjectId}
            onProjectClick={handleProjectClick}
          />
        ))}
      </SummaryContainer>
      <Divider />
      <Detail>
        <TaskDetail
          selectedProjectId={selectedProjectId}
          selectedCareerId={expandedCareerId}
        />
      </Detail>
    </CareerContainer>
  );
};


const CareerContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 8.1rem;
  padding-top: 6rem;
`;

const SummaryContainer = styled.div`
  width: 45%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;

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
  margin-left: 2.5rem;
  margin-right: 2.5rem;
`;

const Detail = styled.div`
  width: 55%;
`;
