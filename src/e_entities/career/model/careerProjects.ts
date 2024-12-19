const careerProjects = [
  {
    id: 1,
    summary: {
      projectTitle: "HyperChatbot 2.0",
      description: "챗봇 스튜디오 FE 개발",
    },
    tasks: [
      "- 챗봇 빌드 및 배포와 버전 관리 페이지 개발",
      "- 빌드 버전 및 배포 내역을 확인할 수 있는 테이블 리스트 컴포넌트 개발",
      "- SWR을 활용한 Pagination 개발",
      "- 확장성을 고려한 들보다운 메뉴 공통 컴포넌트 개발",
      "- End-user 채팅 애플레키이션 STT 기능 및 UI 개발",
    ],
  },
  {
    id: 2,
    summary: {
      projectTitle: "A-Job",
      description: "채용지원 개인화 서비스 FE 개발",
    },
    tasks: [
      "- Swiper를 활용한 다양한 형태의 채용 공고 슬라이드 UI 개발",
      "- React Portal을 이용한 모달 컴포넌트 개발",
    ],
  },
  {
    id: 3,
    summary: {
      projectTitle: "TmaxAI Homepage",
      description: "자사 공식 홈페이지 FE 개발",
    },
    tasks: [
      "- 페이지 배경에 Parallex Scrolling Effect를 적용한 공통 레이아웃 개발",
      "- WebSocket과 AudioWorklet을 이용한 실시간 Audio 데이터 처리 및 STT 기술체험 기능 구현",
      "- STT를 위한 Audio Recorder 및 AudioP layer 컴포넌트 개발",
      "- TTS 기술 체험 UI 및 기능 개발",
    ],
  },
  {
    id: 4,
    summary: {
      projectTitle: "미래엔 디지털 교과서 사업",
      description: "정부 디지털 교과서 개발사업",
    },
    tasks: [
      "- STT/TTS 기술을 활용한 학습용 Recorder 컴포넌트 개발",
      "- 학습자의 발음평가 데이터를 ApexChart를 활용하여 시각화",
      "- 영어 교과서 내 공통 레이아웃 컴포넌트 개발",
    ],
  },
  {
    id: 5,
    summary: {
      projectTitle: "A-call",
      description: "자사 지식 관계 플랫폼(KRP)기반 질의응답 챗봇 서비스",
    },
    tasks: ["- 사용자의 음성을 질의 텍스트로 변환하는 STT 기능 개발"],
  },
  {
    id: 6,
    summary: {
      projectTitle: "연구본부 서버 클러스터 구축 및 백오피스 개발",
      description: "사내 AI 모델 관리를 위한 쿠버네티스 클러스터 구축",
    },
    tasks: [
      "- 사내 AI 모델 관리를 위한 Kubernetes 클러스터 구축 및 GPU 환경세팅",
      "- Triton을 활용한 AI 모델 배포",
      "- Next.js을 기반으로 한 백오피스 애플리케이션 개발",
      "- 백오피스의 모델 로드 제어 기능 및 STT/TTS 및 OCR 등의 모델 테스트 기능 개발",
    ],
  },
  {
    id: 7,
    summary: {
      projectTitle: "Frontend CI/CD 구축",
      description: "프론트엔드 배포 자동화를 위한 CI/CD pipline 구축",
    },
    tasks: ["- Jenkins를 이용한 프론트엔드 애플리케이션 CI/CD 자동화"],
  },
  {
    id: 8,
    summary: {
      projectTitle: "NLP 모델 인퍼런스 테스트페이지 개발",
      description:
        "자사 지식 관계 플랫폼(KRP)에 활용되는 NLP 모델 테스트 페이지 개발",
    },
    tasks: [
      "- 자사에서 구축한 지식 관계 플랫폼(KRP)에 활용되는 NLP 모델 인퍼런스 테스트 페이지 개발",
      "- PDF 문서 파싱, 문장 요약 및 추출 등 파이프라인의 각 단계별로 테스트 구현",
      "- Feature-Sliced Design 아키텍처 도입",
    ],
  },
];

export default careerProjects;
