import styled from "styled-components";
import KnuSVG from "@shared/assets/images/univLogo/knu.svg?react";
import PerugiaSVG from "@shared/assets/images/univLogo/perugia.svg?react";
import RomaSVG from "@shared/assets/images/univLogo/roma.svg?react";
import Baby3SVG from "@shared/assets/images/castingLogo/baby.svg?react";
import TurbeSVG from "@shared/assets/images/castingLogo/turbe.svg?react";
import NovecentoSVG from "@shared/assets/images/castingLogo/novecento.svg?react";
import PetSVG from "@shared/assets/images/hangboghi.svg?react";

const Etc = () => {
  return (
    <EtcContainer>
      <AboutGrid>
        <ItemWrapper>
          <Property>Education</Property>
          <DetailWrapper>
            <KnuSVG />
            <TextWrapper>
              <MainText>경북대학교 철학과 졸업</MainText>
              <SubText>2009.03. - 2017.02.</SubText>
            </TextWrapper>
          </DetailWrapper>
          <DetailWrapper>
            <PerugiaSVG />
            <TextWrapper>
              <MainText>Università per Stranieri di Perugia</MainText>
              <SubText>Italiano B1 과정 수료</SubText>
              <SubText>2019.05. - 2019.08.</SubText>
            </TextWrapper>
          </DetailWrapper>
          <DetailWrapper>
            <RomaSVG />
            <TextWrapper>
              <MainText>Accademia Belle Arti di Roma</MainText>
              <SubText>Teorie e Tecniche dell'Audiovisivo 중퇴</SubText>
              <SubText>2018.08. - 2020.2.</SubText>
            </TextWrapper>
          </DetailWrapper>
        </ItemWrapper>
        <ItemWrapper>
          <Property>Casting </Property>
          <DetailWrapper>
            <Baby3SVG />
            <TextWrapper>
              <MainText>Baby3</MainText>
              <SubText>Neflix Original Series</SubText>
              <SubText>단역, 호텔 투숙객 커플 남자1 역</SubText>
              <SubText>2019.09.</SubText>
            </TextWrapper>
          </DetailWrapper>
          <DetailWrapper>
            <NovecentoSVG />
            <TextWrapper>
              <MainText>Novecento</MainText>
              <SubText>7th AS Film Festival 단편 경쟁작</SubText>
              <SubText>조연, 한국인 룸메이트 역</SubText>
              <SubText>2019. 12.</SubText>
            </TextWrapper>
          </DetailWrapper>
          <DetailWrapper>
            <TurbeSVG />
            <TextWrapper>
              <MainText>Turbe</MainText>
              <SubText>Episodio #12: Esotico</SubText>
              <SubText>주연, Bami 역</SubText>
              <SubText>2019.05.</SubText>
            </TextWrapper>
          </DetailWrapper>
        </ItemWrapper>
        <ItemWrapper>
          <Property>Puppy</Property>
          <TextWrapper>
            <SvgWrapper>
              <PetSVG />
            </SvgWrapper>
            <PetName>행복이 (♂, 1살)</PetName>
          </TextWrapper>
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
  grid-template-columns: repeat(3, 1fr); /* 1x3 그리드 설정 */
  gap: 120px;
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const Property = styled.div`
  font-size: 40px;
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
  font-size: 15px;
  color: #9bb7d4;
  font-weight: semibold;
`;

const SubText = styled.div`
  font-size: 12px;
  color: #9bb7d4;
`;

const SvgWrapper = styled.div`
  width: fit-content;
  height: fit-content;
  border-radius: 10%;
  overflow: hidden;
`;

const PetName = styled.div`
  font-size: 12px;
  color: #9bb7d4;
  text-align: center;
  width: 214px;
`;
