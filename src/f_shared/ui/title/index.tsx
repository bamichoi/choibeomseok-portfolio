import styled from "styled-components";

interface TitleProps {
  onClick: () => void;
}

const Title = ({ onClick }: TitleProps) => {
  return (
    <TitleContainer onClick={onClick}>
      <Name>choi beomseok | 최 범 석</Name>
      <StatusIcon>⭐️</StatusIcon>
      <Job>frontend developer</Job>
    </TitleContainer>
  );
};

export default Title;

const TitleContainer = styled.div`
  padding: 20px;
  color: #9bb7d4;
  border: 2px solid #9bb7d4;
  width: 240px;
  height: 240px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  z-index: 1000;

  &:hover {
    border: 2px solid white;
    color: white;
  }
`;

const Name = styled.div``;

const Job = styled.div`
  width: 100%;
  text-align: end;
`;

const StatusIcon = styled.div`
  width: 100%;
  text-align: center;
`;
