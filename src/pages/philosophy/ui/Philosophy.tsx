import styled from "styled-components";
import { useState } from "react";

export const Philosophy = () => {
  const [expandedItemId, setExpandedItemId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setExpandedItemId(expandedItemId === id ? null : id);
  };

  return (
    <PhilosophyContainer>
      <ContentWrapper>
        <Title>개발 철학</Title>
        <PhilosophyItems>
          <PhilosophyItem>
            <ItemTitleWrapper onClick={() => handleToggle(1)}>
              <ItemTitle>1. 맥락이 먼저, 그 다음이 디테일.</ItemTitle>
              <ToggleIcon $isExpanded={expandedItemId === 1}>
                {expandedItemId === 1 ? "▼" : "▲"}
              </ToggleIcon>
            </ItemTitleWrapper>
            <ItemContentWrapper $isExpanded={expandedItemId === 1}>
              <ItemDescription>
                일을 잘하는 데에는 두 가지 타입이 있다. 일의 전체 맥락을 잘
                파악하는 것. 그리고 일의 세부사항의 완성도를 높이는 것.
                {"\n"}
                어느 것이 더 중요하다 말할 수는 없다. 하지만 디테일이라는 것은
                맥락 위에서만 비로소 의미를 가진다.
                {"\n"}
                개발을 위한 개발을 하지마라. 기술은 그저 도구일 뿐이다. {"\n\n"}
                원론적인 기술적 가치를 따지기 전에 애초에 그것이 비즈니스라는 큰
                맥락 속에서 유효하게 기능하고 있는지부터 생각하라.
                {"\n"} 유지보수나 깨끗한 코드가 중요한 것은 그것이
                엔지니어링적으로 합당하기 때문이 아니라 비즈니스 가치에 부응하기
                때문이다.
                {"\n"} 비즈니스와 제품의 맥락을 제대로 파악했다면 이제 디테일을
                파고들어라.
              </ItemDescription>
            </ItemContentWrapper>
          </PhilosophyItem>
          <PhilosophyItem>
            <ItemTitleWrapper onClick={() => handleToggle(2)}>
              <ItemTitle>
                2. 개발언어는 프로그래밍 언어지, 사람의 언어가 아니다.
              </ItemTitle>
              <ToggleIcon $isExpanded={expandedItemId === 2}>
                {expandedItemId === 2 ? "▼" : "▲"}
              </ToggleIcon>
            </ItemTitleWrapper>
            <ItemContentWrapper $isExpanded={expandedItemId === 2}>
              <ItemDescription>
                서비스 하나를 토양층같은 평면적인 계층으로 생각해보자.
                {"\n"}
                제일 땅의 제일 위에는 멋진 공원 같은게 조성되어 있어서
                나무라던가 꽃가지 같은 것들이 흙에 심겨 있다. {"\n"} 울타리 같은
                것도 있고, 조명도 있다. 서비스의 사용자들이 실제로 보는 느끼는
                형태나 모양 혹은 실제적인 경험들이 제공되는 계층이다. {"\n\n"}{" "}
                표면에서 흙을 조금 파내보면, 그 아래에는 사실 그런 경험들을
                디자인한 기획자들의 의도들이 담겨있는 토양층이 있다. {"\n"} 어떤
                공원을 만들것인가 그리고 어떻게 해야 더 많은 사람들이 이 공원을
                찾게 할 것인가. 그리고 어떻게 해야 이 공원이 사람들을 만족시킬
                수 있을것인가 등에 대한 정성들인 연구와 고민들이 이 공원을
                지탱하고 있다.
                {"\n\n"} 그리고 조금 더 내려가면, 디자이너들의 토양층이 나온다.
                공원의 꽃이나 나무나 울타리가 적절히 보기좋은 형태를 가지도록
                하고 그것들을 어떻게 배치해야할지나 사람들이 어떻게 걷도록 길을
                내면 좋을지 같은 그들의 세련된 감각과 재기발랄한 센스가 담긴
                계산들이 다 숨어있는 곳이다.
                {"\n\n"} 그리고 여기서 좀 더 내려가서야 개발자 토양층이 나온다.
                {"\n"} 이 공원에 있는 모든 오브젝트들의 데이터와 동작이 담긴
                코드들이 촘촘히 얽혀있다. 무척이나 깊기 때문에 공원을 거니는
                사용자는 이 토양층에 대해서는 잘 알지 못한다. 기획자들과
                디자이너들은 이 곳의 존재를 알긴하지만 전혀 다른 언어로 되어있는
                곳이기 때문에 쉽게 접근하기는 역시 어렵다. {"\n\n"} 그럼에도
                종종 개발자들은 그들에게 공원의 꽃과 나무를 코드로 설명하려든다.{" "}
                {"\n"} 이 공원의 땅 속 가장 깊은 곳에만 있다보니 바깥 세상이
                무엇으로 이루어져있었는지 잊어버렸기 때문이다.
                {"\n"} 개발언어는 프로그래밍언어지 사람의 언어가 아니다.
                개발자도 사람이지 프로그램이 아니다. {"\n"} 개발자여, 사람과
                이야기할 때는 사람의 언어로 이야기하라.
              </ItemDescription>
            </ItemContentWrapper>
          </PhilosophyItem>
          <PhilosophyItem>
            <ItemTitleWrapper onClick={() => handleToggle(3)}>
              <ItemTitle>3. 사랑으로 일한다는 것.</ItemTitle>
              <ToggleIcon $isExpanded={expandedItemId === 3}>
                {expandedItemId === 2 ? "▼" : "▲"}
              </ToggleIcon>
            </ItemTitleWrapper>
            <ItemContentWrapper $isExpanded={expandedItemId === 3}>
              <ItemDescription>
                이탈리아 유학 시절. 항상 아침을 먹던 집 근처의 바(Bar, 한국으로
                치면 카페)는 정말로 커피가 맛있는 곳이었다. 그런데 보통 맛있는
                것이 아니라, 왠만해선 커피가 맛있는 이탈리아 어느 곳의 커피도
                여기만큼 맛있는 곳이 없었다. 당시 상당히 요식업에 뜻을 품고 있던
                나는 매번 유심히 가게를 살폈지만 특별한 점은 없었다. 흔하디 흔한
                원두를 사용하고 있었고, 머신이 더 좋은 것도 아니었다. 그렇다고
                주인이 무슨 바리스타 챔피언이라던가 그런것도 아니었다. 나는
                한번은 주인 아주머니께 여쭤보았다.
                {"\n\n"}
                "프란체스카, 근데 여기 커피는 왜 이렇게 맛있는거에요?"
                {"\n\n"}
                "오 그렇게 말해저숴 정말 고마워."
                {"\n\n"}
                "아뇨 그냥 하는 말이 아니라요, 제가 많은 바를 가봤는데 여기 만큼
                맛있는데가 없어요. 심지어 에스프레소 한잔에 7유로씩하는 곳에도
                가봤지만요."
                {"\n\n"}
                그러자 프란체스카 아주머니가 미소를 띠며 말했다.
                {"\n\n"}
                "너 왜그런 줄 아니?"
                {"\n\n"}
                "바로 사랑으로 만들기 때문이야."
                {"\n"}
                "내가 커피 한 잔을 만들 때, 나는 사람들이 이걸 마시고 정말
                행복해졌으면 좋겠다하는 그런 마음을 담아서 만드니까. 맛있을 수
                밖에 없지 않겠니?"
                {"\n\n"}
                "바미, 앞으로 너가 무슨 일을 하든. 사랑을 담아서 하렴. 그럼 분명
                좋은 결과가 생길거야."
                {"\n\n"}
                불행히도 한국인들 대부분은 이 말을 이해하지 못할 것이다. 우리
                사회에서 직장이란 어쩔 수 없이 불행을 감내해야하는 곳이기
                때문에. 좋은 급여나 근무여건 등을 이유로 자신의 일을 좋아하고 그
                일에 만족하는 사람들은 있지만, 그들도 자기가 하는 일에 사랑을
                불어넣는다는 것이 어떤 것인지 가늠조차 하기 힘들 것이다. {"\n"}
                이것은 일의 노예가 되지 않는 것에 관한 이야기이자 일이 삶의
                불행이 되지 않는 것에 관한 이야기다. {"\n"} 사랑으로 일한다는
                것. 내 마음을 온전히 담아서 일한다는 것은 그런 것이다.
              </ItemDescription>
            </ItemContentWrapper>
          </PhilosophyItem>
        </PhilosophyItems>
      </ContentWrapper>
    </PhilosophyContainer>
  );
};

const PhilosophyContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 100px;
  display: flex;
  justify-content: center;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: #9bb7d4;
    border-radius: 4px;
    opacity: 0.5;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #9bb7d4;
    opacity: 0.8;
  }

  scrollbar-width: thin;
  scrollbar-color: #9bb7d4 transparent;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 700px;
`;

const Title = styled.div`
  font-size: 1.2rem;
  color: #9bb7d4;
  text-align: center;
`;

const PhilosophyItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const PhilosophyItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ItemTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding-bottom: 10px;
  border-bottom: 0.5px solid #9bb7d4;
  margin-bottom: 15px;

  &:hover {
    opacity: 0.8;
  }
`;

const ItemTitle = styled.div`
  font-size: 1rem;
  color: #9bb7d4;
  font-weight: 500;
`;

const ToggleIcon = styled.div<{ $isExpanded: boolean }>`
  color: #9bb7d4;
  font-size: 0.8rem;
`;

const ItemContentWrapper = styled.div<{ $isExpanded: boolean }>`
  max-height: ${({ $isExpanded }) => ($isExpanded ? "1000px" : "0")};
  opacity: ${({ $isExpanded }) => ($isExpanded ? "1" : "0")};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out;
`;

const ItemDescription = styled.div`
  font-size: 0.9rem;
  color: #9bb7d4;
  opacity: 0.8;
  line-height: 1.5;
  white-space: pre-line;
`;
