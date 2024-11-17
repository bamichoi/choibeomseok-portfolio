import styled from "styled-components";
import Image1 from "@shared/assets/images/articleImages/article1/image1.jpg";
import Image2 from "@shared/assets/images/articleImages/article1/image2.png";
import Image3 from "@shared/assets/images/articleImages/article1/image3.png";
import Image4 from "@shared/assets/images/articleImages/article1/image4.jpg";
import Image5 from "@shared/assets/images/articleImages/article1/image5.png";

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
            \n아래는 input 입력부터 최종 output 까지의 처리 흐름을 모식화한 것입니다.`}
          </Paragraph>
          <DataFlowImage src={Image1} />
        </ParagraphWrapper>
        <ParagraphWrapper>
          <Subtitle>
            AudioWorkletNode와 AudioWorkletProcesser 간의 소통 방식
          </Subtitle>
          <Paragraph>
            {`AudioWorkletProcessor에는 process메서드가 있고 process의 첫번째 인자로 오디오 스트림 데이터를 실시간으로 읽어들일 수 있습니다.
            \nprocess 메서드는 오디오 데이터가 들어오면 자동으로 실행되고 이 메서드가 하는 일은 그저 오디오 데이터를 실시간으로 받는 것 뿐입니다. 
            \n이 메서드는 데이터에 대한 아무런 처리도 하지 않기 때문에 메서드가 실행될 때 이루어질 일을 직접 정의해주어야 합니다. 
            \nAudioWorkletProcessor에서 이렇게 데이터가 처리된 뒤에는 다시 AudioWorkletNode으로 전달해주어야 컴포넌트 단에서 처리된 데이터를 사용할 수 있습니다.
            \nAudioWorkletProcessor와 AudioWorkletNode는 port라는 객체를 공통적으로 가지는데 이 port를 통해 데이터를 주고 받을 수 있습니다.
            \nport에는 onMessage 이벤트와 postMessage 메서드가 있습니다. onMessage로 특정한 메세지에 반응하는 이벤트를 바인딩해놓고 postMessage로 onMessage를 트리거합니다.
            \n한쪽에서 postMessage에 데이터를 담아보내면 반대쪽에서는 발생한 이벤트를 통해 데이터를 받을 수 있습니다.`}
          </Paragraph>
          <ImageWrapper>
            <CodeImage src={Image2} />
            <CodeImage src={Image3} />
          </ImageWrapper>
        </ParagraphWrapper>
        <ParagraphWrapper>
          <Subtitle>AnalyserNode를 활용한 자동 녹음 정지 기능</Subtitle>
          <Paragraph>
            {`이 STT Recorder에는 모델 부하를 방지하기 위한 자동 정지 기능이 포함되어 있습니다.
            \n5초간 사용이 없으면 녹음 상태는 자동으로 종료 되어야 했는데, 사용자의 음성 입력 디바이스로는 여러 소리가 다 담겨 들어오기 때문에
            \n일반적인 케이스에서 녹음 상태에서 사용자가 아무 말을 하지 않더라도 입력 디바이스로부터는 어떤식으로든 데이터가 들어오게 되어있습니다.
            \n그래서 들어오는 음성의 주파수를 분석하여 5초 동안의 데시벨 평균이 기준 값보다 작으면 사용자의 발화가 없다고 추정하고 녹음을 자동종료하기로 했습니다.
            \nAnalyserNode는 실시간 주파수 정보를 표현하는 Node로 AudioContext의 CreateAnalyser 메서드를 사용하여 생성합니다.
            \n그리고 frequencyBinCount로 현재 주파수 값이 실시간으로 재생되도록 한 뒤에 getByteFrequencyData 메서드로 주파수 데이터 값을 복사하여 데시벨 평균을 구하는데 사용했습니다.
            `}
          </Paragraph>
          <Paragraph></Paragraph>
          <ImageWrapper>
            <NoteImage src={Image4} />
            <CodeImageHalf src={Image5} />
          </ImageWrapper>
        </ParagraphWrapper>
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
  padding-bottom: 35px;
  border-bottom: 1px solid #9bb7d4;
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
  height: 35rem;
  padding-right: 20px;
  padding-top: 35px;
`;

const ParagraphWrapper = styled.div`
  margin-bottom: 30px;
`;

const Paragraph = styled.div`
  white-space: pre-wrap;
  font-size: 0.9rem;
`;

const DataFlowImage = styled.img`
  width: 300px;
  margin-top: 20px;
  border-radius: 10px;
`;

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
`;

const CodeImage = styled.img`
  width: 500px;
  object-fit: cover;
  object-position: 0 0;
  border-radius: 10px;
`;

const CodeImageHalf = styled.img`
  width: 600px;
  height: 180px;
  object-fit: fill;
  object-position: 0 0;
  border-radius: 10px;
`;

const NoteImage = styled.img`
  width: 400px;
  height: 240px;
  object-fit: cover;
  object-position: 0 30%;
  border-radius: 10px;
  align-self: center;
`;
