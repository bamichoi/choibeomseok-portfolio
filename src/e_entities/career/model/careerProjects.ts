const careerProjects = [
  {
    id: 1,
    summary: {
      projectTitle: "HyperChatbot 2.0",
      description: "Rule-base 기반 챗봇 스튜디오 서비스",
    },
    tasks: [
      "- Chatflow가 입력된 챗봇의 빌드 및 배포 페이지 개발",
      "- 빌드 및 배포 버전 관리를 위한 리스트 테이블 컴포넌트 개발",
      "- SWR을 활용한 챗봇 버전 데이터 관리 및 Pagination 개발",
      "- 커스터마이징이 용이한 반응형 드롭다운 메뉴 공통 컴포넌트 개발",
      "- End-user 채팅 애플리케이션 개발",
    ],
  },
  {
    id: 2,
    summary: {
      projectTitle: "A-Job",
      description: "AI 기반 채용 지원 개인화 서비스",
    },
    tasks: [
      "- 다양한 형태의 기업 공고 리스트 및 개인 프로필 페이지 개발",
      "- Swiper를 활용한 여러 유형의 슬라이드 UI 및 공통 컴포넌트 개발",
      "- Portal을 이용한 모달 컴포넌트 개발",
    ],
  },
  {
    id: 3,
    summary: {
      projectTitle: "TmaxAI Homepage",
      description: "티맥스에이아이사 홈페이지 재구축 및 개선 프로젝트",
    },
    tasks: [
      "- Parallex Scrolling Effect을 배경에 적용한 페이지 레이아웃 개발",
      "- TTS 기술 체험 페이지 및 Audio Recorder 컴포넌트 개발",
      "- 오디오 파일 전송 기반의 오프라인 STT 개발",
      "- Websocket 및 AudioWorklet을 이용한 실시간 STT 기능 개발",
    ],
  },
  {
    id: 4,
    summary: {
      projectTitle: "미래엔 디지털 교과서 사업",
      description: "정부 디지털 교과서 개발사업",
    },
    tasks: [
      "- STT/TTS 기능이 연동된 학습 및 평가용 녹음기 컴포넌트 개발",
      "- ApexChart를 이용한 AI 발음 평가 결과 데이터 시각화",
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
      projectTitle: "TmaxAI 연구본부 서버 클러스터 구축 및 백오피스 개발",
      description: "사내 AI 모델 관리를 위한 쿠버네티스 클러스터 구축",
    },
    tasks: [
      "- 사내 AI 모델 관리를 위한 Kubernetes 클러스터 구축",
      "- AI 모델 Triton 서버 배포 작업 수행",
      "- Next.js 기반의 AI 모델 로드 조작 및 테스트용 백오피스 제작",
      "- STT, TTS 및 OCR 모델 테스트 기능 개발",
    ],
  },
  {
    id: 7,
    summary: {
      projectTitle: "Frontend 팀내 CI/CD 환경 구축",
      description:
        "팀내 배포 자동화 목적의 Jenkins를 활용한 CI/CD 파이프라인 구축",
    },
    tasks: [],
  },
  {
    id: 8,
    summary: {
      projectTitle: "NLP 모델 테스트 클라이언트 개발",
      description:
        "자사 지식 관계 플랫폼(KRP)에 활용 중인 NLP 모델 테스트 페이지 개발",
    },
    tasks: [
      "- PDF 파싱, 요약 추출 등 파이프라인의 각 단계별 테스트 기능 구현",
      "- FSD Architecture를 적용한 애플리케이션 개발",
    ],
  },
];

export default careerProjects;
