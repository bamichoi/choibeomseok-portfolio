import projects from "@entities/projects";
import styled from "styled-components";
import PreviewSlide from "../previewSlide/previewSlide";

interface SummaryProps {
  selectedProjectId: number;
}

const Summary = ({ selectedProjectId }: SummaryProps) => {
  const project = projects.find((project) => project.id === selectedProjectId);

  const handleSiteLinkClick = () => {
    if (project?.url) {
      window.open(project?.url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <SummaryContainer>
      <TitleWrapper>
        <Logo src={project?.logo} />
        <Title>
          {project?.title}
          {project?.url && (
            <SiteLinkBtn onClick={handleSiteLinkClick}>둘러보기</SiteLinkBtn>
          )}
        </Title>
      </TitleWrapper>
      <Subtitle>{project?.subtitle}</Subtitle>
      <PreviewSlideWrapper>
        <PreviewSlide images={project?.images} />
      </PreviewSlideWrapper>
      <Contents>
        <PropertyWrapper>
          <PropertyText>period :</PropertyText>
          <Date>
            {project?.startDate} - {project?.endDate}
          </Date>
        </PropertyWrapper>
        <PropertyWrapper>
          <PropertyText>stack :</PropertyText>
          <Stacks>
            {project?.stacks.map((stackLogo) => (
              <StackImage src={stackLogo} />
            ))}
          </Stacks>
        </PropertyWrapper>
      </Contents>
      <Description>{project?.description}</Description>
      <BtnWraper>
        <DetailBtn>자세히</DetailBtn>
      </BtnWraper>
    </SummaryContainer>
  );
};

export default Summary;

const SummaryContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 100px;
  padding-top: 80px;
`;

const PreviewSlideWrapper = styled.div`
  display: flex;
  justify-content: start;
  width: fit-content;
  margin-bottom: 40px;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: start;
  gap: 10px;
  margin-bottom: 20px;
`;

const Logo = styled.img`
  width: 60px;
  height: 60px;
`;

const Title = styled.div`
  font-size: 60px;
  color: #9bb7d4;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Subtitle = styled.div`
  font-size: 20px;
  color: #9bb7d4;
  font-weight: semibold;
  margin-bottom: 50px;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-bottom: 60px;
`;

const PropertyText = styled.div`
  font-size: 18px;
  color: #9bb7d4;
  font-weight: semibold;
`;

const Stacks = styled.div`
  display: flex;
  gap: 12px;
`;

const StackImage = styled.img`
  width: 40px;
  height: 40px;
`;

const DetailBtn = styled.div`
  cursor: pointer;
  width: 100px;
  height: 40px;
  padding: 10px;
  background-color: #9bb7d4;
  color: #1c4e89;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    color: white;
  }
`;

const PropertyWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Date = styled.div`
  font-size: 16px;
  color: #9bb7d4;
  font-weight: medium;
`;

const BtnWraper = styled.div`
  width: 700px;
  display: flex;
  justify-content: end;
`;

const Description = styled.div`
  font-size: 16px;
  height: fit-content;
  color: #9bb7d4;
  font-weight: medium;
  margin-top: 40px;
  width: 700px;
  line-height: 140%;
`;

const SiteLinkBtn = styled.div`
  width: 70px;
  height: 30px;
  background-color: #9bb7d4;
  cursor: pointer;
  color: #1c4e89;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-weight: lighter;

  &:hover {
    color: white;
  }
`;
