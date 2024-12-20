import styled from "styled-components";
import KnuSVG from "@shared/ui/assets/images/univLogo/knu.svg?react";
import PerugiaSVG from "@shared/ui/assets/images/univLogo/perugia.svg?react";
import RomaSVG from "@shared/ui/assets/images/univLogo/roma.svg?react";
import PetSVG from "@shared/ui/assets/images/hangboghi.svg?react";

const Etc = () => {
  const handleCVClick = () => {
    window.open(
      "https://buttoned-garage-49e.notion.site/Curriculum-vitae-15eb67f2506a8001913dfbd1b13215d5?pvs=4",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <EtcContainer>
      <AboutGrid>
        <ItemWrapper>
          <Property>Puppy</Property>
          <TextWrapper>
            <SvgWrapper>
              <PetSVG />
            </SvgWrapper>
            <PetName>행복이 (♂, 1살)</PetName>
          </TextWrapper>
        </ItemWrapper>
        <ItemWrapper>
          <Property>Education</Property>
          <DetailWrapper>
            <KnuSVG />
            <TextWrapper>
              <MainText>경북대학교 철학과 졸업</MainText>
              <SubText>2009.03 - 2017.02</SubText>
            </TextWrapper>
          </DetailWrapper>
          <DetailWrapper>
            <PerugiaSVG />
            <TextWrapper>
              <MainText>Università per Stranieri di Perugia</MainText>
              <SubText>Italiano B1 과정 수료</SubText>
              <SubText>2019.05 - 2019.08</SubText>
            </TextWrapper>
          </DetailWrapper>
          <DetailWrapper>
            <RomaSVG />
            <TextWrapper>
              <MainText>Accademia Belle Arti di Roma</MainText>
              <SubText>Teorie e Tecniche dell'Audiovisivo 중퇴</SubText>
              <SubText>2018.08 - 2020.02</SubText>
            </TextWrapper>
          </DetailWrapper>
        </ItemWrapper>
        <ItemWrapper>
          <Property>Documents</Property>
          <CVBox onClick={handleCVClick}>Curriculum vitae</CVBox>
        </ItemWrapper>
      </AboutGrid>
    </EtcContainer>
  );
};

export default Etc;

const EtcContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 100px;
  display: flex;
  align-items: center;
`;

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8rem;
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const Property = styled.div`
  font-size: 2.5rem;
  color: #9bb7d4;
  margin-bottom: 50px;
`;

const DetailWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const MainText = styled.div`
  font-size: 1rem;
  color: #9bb7d4;
  font-weight: semibold;
`;

const SubText = styled.div`
  font-size: 0.85rem;
  color: #9bb7d4;
`;

const SvgWrapper = styled.div`
  width: fit-content;
  height: fit-content;
  border-radius: 10%;
  overflow: hidden;
`;

const PetName = styled.div`
  font-size: 0.85rem;
  color: #9bb7d4;
  text-align: center;
  width: 214px;
`;

const CVBox = styled.div`
  width: 100%;
  height: 3rem;
  padding: 1rem;
  border-radius: 5px;
  background-color: #9bb7d4;
  cursor: pointer;
  color: #1c4e89;

  &:hover {
    color: white;
  }
`;
