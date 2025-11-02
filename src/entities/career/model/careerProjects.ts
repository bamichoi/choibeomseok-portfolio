import {
  ReactSVG,
  ReactHookFormSVG,
  ViteSVG,
  TypescriptSVG,
  StyledComponentsSVG,
  LambdaSVG,
  BunSVG,
  ChatGPTSVG,
  JotaiSVG,
  VueSVG,
  NuxtSVG,
  WebsocketSVG,
  KubeSVG,
  TritonSVG,
  SwrSVG,
  ApexSVG,
  JenkinsSVG,
  ExpoSVG,
  ReactQuerySVG,
  ZustandSVG,
  NextjsSVG,
  ThreejsSVG,
} from "@shared/assets";
import { RESEARCH_DATA } from "@/entities/research";

export const TMAX_PROJECTS = [
  {
    id: 1,
    summary: {
      projectTitle: "HyperChatbot 2.0",
      description: "챗봇 스튜디오 FE 개발",
    },
    tasks: [
      "- 챗봇 빌드 및 버전 관리 기능 개발",
      "- 개발 확장성과 재사용성을 고려한 UI 공통 컴포넌트 설계",
      "- End-User 채팅 애플리케이션 UI 및 STT 기능 개발",
    ],
    stacks: [ReactSVG, TypescriptSVG, SwrSVG, StyledComponentsSVG],
  },
  {
    id: 3,
    summary: {
      projectTitle: "TmaxAI Homepage",
      description: "자사 공식 홈페이지 FE 개발",
    },
    tasks: [
      "- WebSocket과 Audio Worklet을 활용한 실시간 음성데이터 처리 및 실시간 STT 기능 개발",
      "- Audio Recorder 및 Audio Player 컴포넌트 개발",
      "- TTS 체험 기능 및 Parallax Scrolling UI 개발",
    ],
    stacks: [ReactSVG, TypescriptSVG, StyledComponentsSVG, WebsocketSVG],
    articles: [RESEARCH_DATA[0]],
  },
  {
    id: 4,
    summary: {
      projectTitle: "미래엔 디지털 교과서 사업",
      description: "디지털 영어 교과서 FE 개발",
    },
    tasks: [
      "- Web Audio API를 활용한 녹음기 컴포넌트 및 STT/TTS 기능 개발",
      "- ApexCharts를 활용한 학습자 발음 평가 데이터 시각화",
      "- 공통 레이아웃 컴포넌트 개발",
    ],
    stacks: [ReactSVG, TypescriptSVG, StyledComponentsSVG, ApexSVG],
  },
  {
    id: 6,
    summary: {
      projectTitle: "연구본부 서버 클러스터 구축 및 백오피스 개발",
      description: "사내 AI 모델 관리를 위한 쿠버네티스 클러스터 구축",
    },
    tasks: [
      "- Kubernetes 클러스터 환경 구성 및 GPU 환경 세팅",
      "- Triton Inference Server 를 활용한 모델 배포",
      "- 모델 관리 및 추론 테스트용 백오피스 개발",
    ],
    stacks: [ReactSVG, TypescriptSVG, StyledComponentsSVG, KubeSVG, TritonSVG],
  },
  {
    id: 7,
    summary: {
      projectTitle: "Frontend CI/CD 구축",
      description: "프론트엔드 배포 자동화를 위한 CI/CD pipline 구축",
    },
    tasks: ["- Jenkins를 활용한 프론트엔드 애플리케이션 CI/CD 자동화"],
    stacks: [JenkinsSVG],
  },
  {
    id: 8,
    summary: {
      projectTitle: "NLP 모델 인퍼런스 테스트페이지 개발",
      description:
        "자사 지식 관계 플랫폼(KRP)에 활용되는 NLP 모델 테스트 페이지 개발",
    },
    tasks: [
      "- 자사 구축 지식 관계 플랫폼(KRP)에 활용되는 NLP 모델의 추론 테스트 애플리케이션 개발",
      "- 각 파이프라인 단위로 단계별 테스트 구현",
    ],
    stacks: [ReactSVG, TypescriptSVG, StyledComponentsSVG],
  },
];

export const AGEFREE_PROJECTS = [
  {
    id: 1,
    summary: {
      projectTitle: "아동교육용 OTT 서비스 및 LMS 개발",
      description: "아동교육용 OTT 서비스 및 LMS FE 개발",
    },
    tasks: [
      "- Nuxt3 기반 SSR을 활용한 렌더링 최적화",
      "- Vue Draggable을 활용한 드래그앤드롭 데이터 리스트 구현",
      "- Video.js를 활용한 동영상 재생 기능 구현",
      "- Tiptap Editor를 활용한 리치 텍스트 에디터 구현",
      "- Virtual Scroll을 활용한 데이터 리스트의 성능 최적화",
      "- i18n을 활용한 다국어 처리",
    ],
    stacks: [VueSVG, NuxtSVG],
  },
];

export const BLISS_PROJECTS = [
  {
    id: 1,
    summary: {
      projectTitle: "카르마의 평행우주(Karma's Parallel Universe)",
      description: "스토리텔링형 평행세계 시뮬레이터",
    },
    tasks: [
      "- React Hook Form과 Zod를 이용한 Form Validation",
      "- AWS lambda 및 API Gateway를 활용한 백엔드 구현",
      "- i18n 다국어 지원",
    ],
    stacks: [
      ReactSVG,
      TypescriptSVG,
      StyledComponentsSVG,
      ViteSVG,
      BunSVG,
      JotaiSVG,
      ReactHookFormSVG,
      LambdaSVG,
      ChatGPTSVG,
    ],
  },
  {
    id: 2,
    summary: {
      projectTitle: "올해의 행복(The Annual Bliss)",
      description: "연간 리캡형 라이프 기록앱",
    },
    tasks: [
      "- React Native(Expo) 기반의 모바일 앱 개발",
      "- Tanstack Query를 활용한 클라이언트 사이드 데이터 관리 최적화",
      "- Expo Sqlite를 활용한 앱 로컬 스토리지 기반의 DB관리",
      "- 다양한 expo 라이브러리를 활용한 기능 개발",
      "- expo-file-system/next를 활용한 사진 파일 관리",
      "- 클로즈 베타 테스트 진행을 통한 UX 피드백 반영 및 개선",
      "- PlayStore/AppStore 배포 및 운영중",
    ],
    stacks: [
      ReactSVG,
      ExpoSVG,
      TypescriptSVG,
      ZustandSVG,
      ReactQuerySVG,
      ReactHookFormSVG,
    ],
  },
  {
    id: 3,
    summary: {
      projectTitle: "단시점(斷時占, Danjisen)",
      description: "간편하고 정확한 전통 주역점",
    },
    tasks: [
      "- Three.js를 활용한 3D 주사위 던지기 구현",
      "- React Native 앱을 포팅한 Next.js 웹버전 개발",
      "- AWS lambda-GPT API를 활용한 AI 응답 생성",
      "- PlayStore/Web 배포 및 운영중",
    ],
    stacks: [
      ReactSVG,
      ExpoSVG,
      NextjsSVG,
      TypescriptSVG,
      ZustandSVG,
      ThreejsSVG,
      ReactHookFormSVG,
    ],
  },
  {
    id: 4,
    summary: {
      projectTitle: "라틴어 산책",
      description: "데일리 라틴어 레터카드 서비스",
    },
    tasks: ["- 데일리 로컬 푸시 알림 구현", "- PlayStore/Web 배포 및 운영중"],
    stacks: [ReactSVG, ExpoSVG, TypescriptSVG, ZustandSVG],
  },
];
