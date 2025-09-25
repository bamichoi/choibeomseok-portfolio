/* stack icons */
import ReactSVG from "@shared/ui/assets/images/stackLogo/react.svg";
import ReactHookFormSVG from "@shared/ui/assets/images/stackLogo/react-hook-form.svg";
import ReactQuerySVG from "@shared/ui/assets/images/stackLogo/react-query.svg";
import ViteSVG from "@shared/ui/assets/images/stackLogo/vite.svg";
import TypescriptSVG from "@shared/ui/assets/images/stackLogo/typescript.svg";
import SwiperSVG from "@shared/ui/assets/images/stackLogo/swiper.png";
// import NextjsSVG from "@shared/ui/assets/images/stackLogo/nextjs.svg";
import DjangoSVG from "@shared/ui/assets/images/stackLogo/django.svg";
import MobxSVG from "@shared/ui/assets/images/stackLogo/mobx.svg";
import RecoilSVG from "@shared/ui/assets/images/stackLogo/recoil.svg";
import JavascriptSVG from "@shared/ui/assets/images/stackLogo/javascript.svg";
import FfmpegwasmSVG from "@shared/ui/assets/images/stackLogo/ffmpeg-wasm.png";
import ScssSVG from "@shared/ui/assets/images/stackLogo/scss.svg";
import StyledComponentsSVG from "@shared/ui/assets/images/stackLogo/styled-components.png";
import TailwindcssSVG from "@shared/ui/assets/images/stackLogo/tailwindcss.svg";
import ReduxSVG from "@shared/ui/assets/images/stackLogo/redux.svg";
import NodejsSVG from "@shared/ui/assets/images/stackLogo/nodejs.svg";
import ExpressSVG from "@shared/ui/assets/images/stackLogo/express.png";
import BedrockSVG from "@shared/ui/assets/images/stackLogo/bedrock.png";
import LambdaSVG from "@shared/ui/assets/images/stackLogo/lambda.png";
import BunSVG from "@shared/ui/assets/images/stackLogo/bun.png";
import ChatGPTSVG from "@shared/ui/assets/images/stackLogo/chatGPT.svg";
import JotaiSVG from "@shared/ui/assets/images/stackLogo/jotai.png";
import ExpoSVG from "@shared/ui/assets/images/stackLogo/expo.svg";
import ZustandSVG from "@shared/ui/assets/images/stackLogo/zustand.png";

/* preview screenshot */

import Cineacca1SVG from "@shared/ui/assets/images/preview/cineacca.jpg";
import Cineacca2SVG from "@shared/ui/assets/images/preview/cineacca_2.jpg";
import Cineacca3SVG from "@shared/ui/assets/images/preview/cineacca_3.jpg";
import Cineacca4SVG from "@shared/ui/assets/images/preview/cineacca_4.jpg";

import Hellokorea1SVG from "@shared/ui/assets/images/preview/hellokorea.png";
import Hellokorea2SVG from "@shared/ui/assets/images/preview/hellokorea2.png";
import Hellokorea3SVG from "@shared/ui/assets/images/preview/hellokorea3.png";
import Hellokorea4SVG from "@shared/ui/assets/images/preview/hellokorea4.png";

import FridayT1SVG from "@shared/ui/assets/images/preview/fridayT.png";
import FridayT2SVG from "@shared/ui/assets/images/preview/fridayT2.png";
import FridayT3SVG from "@shared/ui/assets/images/preview/fridayT3.png";

import BoardMe1PNG from "@shared/ui/assets/images/preview/boardme.png";
import BoardMe2PNG from "@shared/ui/assets/images/preview/boardme2.png";
import BoardMe3PNG from "@shared/ui/assets/images/preview/boardme3.png";
import BoardMe4PNG from "@shared/ui/assets/images/preview/boardme4.png";
import BoardMe5PNG from "@shared/ui/assets/images/preview/boardme5.png";
import BoardMe6PNG from "@shared/ui/assets/images/preview/boardme6.png";

import KarmaPNG from "@shared/ui/assets/images/preview/karma.png";

import CoffeeBirdyPNG from "@shared/ui/assets/images/preview/coffeeBirdy.png";

import AnnualBliss1PNG from "@shared/ui/assets/images/preview/annualBliss.png";
import AnnualBliss2PNG from "@shared/ui/assets/images/preview/annualBliss2.png";
import AnnualBliss3PNG from "@shared/ui/assets/images/preview/annualBliss3.png";
/* project logo */
import StagecueLogo from "@shared/ui/assets/images/projectLogo/stagecue.svg";
import StagecueFullLogo from "@shared/ui/assets/images/projectLogo/stagecue_full.svg";
import FridayTLogo from "@shared/ui/assets/images/projectLogo/fridayT.png";
import FridayTFullLogo from "@shared/ui/assets/images/projectLogo/fridayT_full.png";
import BoardmeLogo from "@shared/ui/assets/images/projectLogo/boardme.png";
import BoardmeFullLogo from "@shared/ui/assets/images/projectLogo/boardme_full.svg";
import CineaccaLogo from "@shared/ui/assets/images/projectLogo/cineacca.svg";
import CineaccaFullLogo from "@shared/ui/assets/images/projectLogo/cineacca_full.svg";
import HellokoreaLogo from "@shared/ui/assets/images/projectLogo/hellokorea.svg";
import HellokoreaFullLogo from "@shared/ui/assets/images/projectLogo/hellokorea_full.svg";
import KarmaLogo from "@shared/ui/assets/images/projectLogo/karma.png";
import KarmaFullLogo from "@shared/ui/assets/images/projectLogo/karma_full.png";
import CoffeeBirdyLogo from "@shared/ui/assets/images/projectLogo/coffeeBirdy.png";
import CoffeeBirdyFullLogo from "@shared/ui/assets/images/projectLogo/coffeeBirdy_full.png";
import AnnualBlissLogo from "@shared/ui/assets/images/projectLogo/annualBliss.png";
import AnnualBlissFullLogo from "@shared/ui/assets/images/projectLogo/annualBliss_full.png";

export const PROJECTS = [
  {
    id: 9,
    title: "올해의 행복",
    logo: AnnualBlissLogo,
    fullLogo: AnnualBlissFullLogo,
    subtitle: "연간 리캡형 라이프 기록 애플리케이션",
    url: "https://apps.apple.com/kr/app/%EC%98%AC%ED%95%B4%EC%9D%98-%ED%96%89%EB%B3%B5/id6751865635",
    images: [AnnualBliss1PNG, AnnualBliss2PNG, AnnualBliss3PNG],
    stacks: [ReactSVG, ExpoSVG, TypescriptSVG, ZustandSVG, ReactHookFormSVG],
    startDate: "2025.08",
    endDate: "현재",
    description:
      "한 해의 순간들을 기록하고 기념 할 수 있는 연간 리캡형 라이프 기록 애플리케이션입니다.",
    tasks: [
      "- React Native 및 Expo를 기반의 모바일 앱 개발",
      "- Expo Sqlite를 활용한 앱 로컬 스토리지 기반의 DB관리",
      "- 다양한 expo 라이브러리를 활용한 기능 개발",
      "- expo-file-system/next를 활용한 사진 파일 관리",
      "- 클로즈 베타 테스트 진행을 통한 UX 피드백 반영 및 개선",
    ],
  },
  {
    id: 7,
    title: "커피버디",
    logo: CoffeeBirdyLogo,
    fullLogo: CoffeeBirdyFullLogo,
    subtitle: "AI 스피셜티 커피 추천 서비스",
    images: [CoffeeBirdyPNG],
    stacks: [
      ReactSVG,
      TypescriptSVG,
      ViteSVG,
      BunSVG,
      JotaiSVG,
      ReactHookFormSVG,
      BedrockSVG,
      LambdaSVG,
    ],
    startDate: "2025.08",
    endDate: "2025.08",
    description:
      "AI 기반으로 내 취향에 어울리는 스페셜티 커피를 추천해주는 서비스입니다.",
    tasks: [
      "- FSD 아키텍쳐 기반의 체계적인 컴포넌트 관리",
      "- Shadcn ui를 활용한 디자인 시스템 관리 및 UI 구현",
      "- AWS Bedrock의 KB 기반 AI agent를 활용한 추천 기능 구현",
    ],
  },
  {
    id: 6,
    title: "카르마의 평행우주",
    logo: KarmaLogo,
    fullLogo: KarmaFullLogo,
    subtitle: "과거 회귀 가상 시뮬레이터",
    url: "https://karmaparalleluniverse.com/",
    images: [KarmaPNG],
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
    startDate: "2025.08",
    endDate: "2025.08",
    description:
      "초지능 AI휴머노이드 카르마와 함께 자신의 과거의 선택을 바꿔보는 가상 시뮬레이션 서비스입니다.",
    tasks: [
      "- React Hook Form과 Zod를 이용한 Form Validation",
      "- AWS lambda 및 API Gateway를 활용한 백엔드 구현",
      "- i18n 다국어 지원",
    ],
  },
  {
    id: 6,
    title: "카르마의 평행우주",
    logo: KarmaLogo,
    fullLogo: KarmaFullLogo,
    subtitle: "과거 회귀 가상 시뮬레이터",
    url: "https://karmaparalleluniverse.com/",
    images: [KarmaPNG],
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
    startDate: "2025.08",
    endDate: "2025.08",
    description:
      "초지능 AI휴머노이드 카르마와 함께 자신의 과거의 선택을 바꿔보는 가상 시뮬레이션 서비스입니다.",
    tasks: [
      "- React Hook Form과 Zod를 이용한 Form Validation",
      "- AWS lambda 및 API Gateway를 활용한 백엔드 구현",
      "- i18n 다국어 지원",
    ],
  },
  {
    id: 5,
    title: "스테이지큐",
    logo: StagecueLogo,
    fullLogo: StagecueFullLogo,
    images: [],
    subtitle: "극단-배우 단원모집 중개 플랫폼",
    stacks: [
      ReactSVG,
      TypescriptSVG,
      StyledComponentsSVG,
      ViteSVG,
      ReactHookFormSVG,
      ReactQuerySVG,
      SwiperSVG,
    ],
    startDate: "2024.05",
    endDate: "2025.01",
    description:
      "스테이지큐는 극단원 모집 중계 플랫폼으로 극단주에게는 단원모집과 간편한 지원자 관리를, 지원자에게는 공고검색과 빠른 지원절차를 제공하기 위한 서비스입니다.",
    tasks: [
      "- React Hook Form을 활용한 복잡한 Form 관리 최적화",
      "- React Query를 활용한 무한스크롤 및 페이지네이션 구현",
      "- Zustand를 사용한 JWT 및 유저 세션 관리",
      "- React datepicker를 활용한 Custom Calendar Input 컴포넌트 구현",
      "HTML input 컴포넌트를 이용한 Multi range input의 구현",
    ],
  },

  {
    id: 4,
    title: "금요일의 티붕이",
    logo: FridayTLogo,
    fullLogo: FridayTFullLogo,
    images: [FridayT1SVG, FridayT2SVG, FridayT3SVG],
    subtitle: "사내 근태시간 계산 시뮬레이터",
    stacks: [ReactSVG, MobxSVG, StyledComponentsSVG],
    url: "https://fridaytmax.com",
    startDate: "2023.01",
    endDate: "2023.04",
    description:
      "티맥스 사내 직원들이 근태 시간 계산을 간편하게 할 수 있는 서비스입니다.",
    tasks: [
      "- Recoil을 활용한 근태시간 입력 값의 상태 관리",
      "- AWS Amplify를 활용한 배포 및 운영",
    ],
  },
  {
    id: 3,
    title: "보드미",
    logo: BoardmeLogo,
    fullLogo: BoardmeFullLogo,
    images: [
      BoardMe1PNG,
      BoardMe2PNG,
      BoardMe3PNG,
      BoardMe4PNG,
      BoardMe5PNG,
      BoardMe6PNG,
    ],
    subtitle: "롤링페이퍼형 메세지보드 서비스",
    stacks: [ReactSVG, RecoilSVG, StyledComponentsSVG],
    url: "https://board-we.github.io/frontend/",
    startDate: "2022.11",
    endDate: "2023.02",
    description:
      "휘발성 롤링페이퍼 서비스입니다. 주제와 기간을 정하여 익명으로 롤링페이퍼 형식으로 메세지를 남길 수 있는 서비스입니다.",
    tasks: [
      "- 단계별 보드 만들기 페이지 및 기능 개발",
      "- Recoil을 활용한 보드 및 메세지 입력 데이터 관리",
    ],
  },
  {
    id: 2,
    title: "치네아카",
    fullLogo: CineaccaFullLogo,
    logo: CineaccaLogo,
    images: [Cineacca1SVG, Cineacca2SVG, Cineacca3SVG, Cineacca4SVG],
    subtitle: "이탈리아 학생영화 스트리밍 플랫폼",
    stacks: [DjangoSVG, JavascriptSVG, FfmpegwasmSVG, ScssSVG],
    startDate: "2021.07",
    endDate: "2022.03",
    description:
      "잠재력이 크지만 비교적 기회가 적은 학생 영화감독들이 자신의 작품을 대중들에게 보여줄 수 있는 단편영화 스트리밍 플랫폼 서비스입니다",
    tasks: [
      "- FFmpeg.wasm을 활용한 비디오 컨버팅 및 압축 구현",
      "- Custom video player 개발",
      "- Django 기반의 백엔드 개발",
      "- Amazon S3 파일스토리지 구축 및 Heroku 배포 및 운영 경험",
    ],
  },
  {
    id: 1,
    title: "헬로 코리아",
    logo: HellokoreaLogo,
    fullLogo: HellokoreaFullLogo,
    images: [Hellokorea1SVG, Hellokorea2SVG, Hellokorea3SVG, Hellokorea4SVG],
    subtitle: "한국 거주 베트남 유학생 커뮤니티",
    stacks: [
      ReactSVG,
      TypescriptSVG,
      TailwindcssSVG,
      ReduxSVG,
      ReactQuerySVG,
      ReactHookFormSVG,
      NodejsSVG,
      ExpressSVG,
    ],
    startDate: "2022.02",
    endDate: "2022.10",
    description:
      "유학생들이 한국생활에 순조롭게 정착할 수 있도록 다양한 서비스를 제공하기 위한 커뮤니티 서비스입니다.",
    tasks: [
      "- Draft.js를 활용한 게시글 쓰기 기능 구현",
      "- React Query를 활용한 서버사이드 데이터 관리",
      "- Express 기반의 Node.js 백엔드 개발 및 RESTful API 설계",
      "- MongoDB 기반의 데이터베이스 구축",
      "- Redux 및 Redux persist를 활용한 유저 세션 관리",
      "- TailwindCSS를 사용한 CSS 스타일링",
    ],
  },
];
