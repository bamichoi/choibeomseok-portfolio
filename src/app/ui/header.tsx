import styled from "styled-components";

export const Header = () => {
  return (
    <HeaderContainer>
      <Navigater>
        <NavigateBtn>{"<"}</NavigateBtn>
        <NavigateBtn>{">"}</NavigateBtn>
      </Navigater>
    </HeaderContainer>
  );
};


const HeaderContainer = styled.div`
  width: 100%;
  max-width: calc(100vw - 340px);
  height: 100px;
  position: fixed;
  padding-top: 40px;
  padding-left: 120px;
  background-color: #1d4e89;
`;

const Navigater = styled.div`
  display: flex;
  gap: 20px;
`;

const NavigateBtn = styled.div`
  color: #9bb7d4;
  cursor: pointer;

  &:hover {
    color: white;
  }
`;
