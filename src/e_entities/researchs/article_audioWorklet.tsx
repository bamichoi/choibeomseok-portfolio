import styled from "styled-components";
import Image1 from "@shared/assets/images/articleImages/article1/dataflow.jpg";

const ArticleAudioWorklet = () => {
  return (
    <ArticleContainer>
      <Title>AudioWorklet을 활용한 Realtime STT 구현과 데이터 처리</Title>
      <Content>
        <ParagraphWrapper>
          <Subtitle>AudioWorklet의 기본동작 및 흐름</Subtitle>
          <Paragraph>
            {`Realtime STT는 Websocket 통신을 통해 사용자가 입력한 음성 데이터를 실시간으로 STT 서버로 보내야합니다.
            \n하지만 일반적으로 녹음 기능 구현에 사용되는 MediaRecorder는 현재 입력되고 있는 음성 데이터를 실시간으로 얻을 수 없습니다.
            \n이렇게 입력되는 오디오 스트림 데이터를 실시간으로 조작하고 싶다면 AudioWorklet API를 이용할 수 있습니다.
            \nAudioWorklet은 AudioWorkletNode라는 워커 노드를 만듭니다. AudioWorkletNode는 AudioWorkletProcessor로 작업을 수행하게 되는데
            \n개발자는 이 AudioWorkletProcessor에 입력된 음성 데이터로 어떤 처리를 할지 직접 작성할 수 있습니다.
            \n제가 수행한 프로젝트에서는 Processor가 수행할 일은 1) 입력된 데이터를 PCM16로 변환 2) 변환된 PCM16데이터를 Chunking하여 서버로 전송하는 것입니다.
            \n아래는 input 입력부터 최종 output 까지의 데이터 흐름을 간략화한 것입니다.`}
          </Paragraph>
          <DataFlowImage src={Image1} />
        </ParagraphWrapper>
        <Subtitle>
          AudioWorkletNode와 AudioWorkletProcesser 간의 소통 방식
        </Subtitle>
      </Content>
    </ArticleContainer>
  );
};

export default ArticleAudioWorklet;

const ArticleContainer = styled.div`
  width: 100%;
  height: 100%;
  color: #9bb7d4;
`;

const Title = styled.div`
  font-size: 1.5rem;
  margin-bottom: 50px;
`;

const Subtitle = styled.div`
  font-size: 1.3rem;
  margin-bottom: 30px;
  font-weight: semibold;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  overflow: scroll;
`;

const ParagraphWrapper = styled.div``;

const Paragraph = styled.div`
  white-space: pre-wrap;
  font-size: 0.9rem;
`;

const DataFlowImage = styled.img`
  width: 300px;
  object-fit: cover;
  margin-top: 20px;
`;
