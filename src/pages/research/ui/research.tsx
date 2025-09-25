import { ResearchList } from "@/widgets/research";
import styled from "styled-components";

export const Research = () => {
  return (
    <ResearchContainer>
      <ResearchList />
    </ResearchContainer>
  );
};

const ResearchContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: #9bb7d4;
`;
