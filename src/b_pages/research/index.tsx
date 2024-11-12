import ResearchList from "@/c_widgets/ui/researchList";
import styled from "styled-components";

const Research = () => {
  return (
    <ResearchContainer>
      <ResearchList />
    </ResearchContainer>
  );
};

export default Research;

const ResearchContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: #9bb7d4;
`;
