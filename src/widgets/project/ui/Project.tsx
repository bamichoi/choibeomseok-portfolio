import styled from "styled-components";

interface ProjectProps {
  title: string;
  logoSrc: string;
}

export const Project = ({ title, logoSrc }: ProjectProps) => {
  return (
    <ProjectContainer>
      <LogoWrapper>
        <Logo src={logoSrc} />
      </LogoWrapper>
      <Name>{title}</Name>
    </ProjectContainer>
  );
};


const ProjectContainer = styled.div`
  width: 230px;
  height: 230px;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border: 1px solid #9bb7d4;
  align-items: center;
  color: #9bb7d4;
  gap: 20px;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  &:hover {
    border: 1px solid white;
  }
`;

const LogoWrapper = styled.div`
  width: 200px;
  height: 100px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const Logo = styled.img`
  width: 190px;
  height: 90px;
`;

const Name = styled.div``;
