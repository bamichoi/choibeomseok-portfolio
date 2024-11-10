/* stack icons */
import ReactSVG from "@shared/assets/images/stackLogo/react.svg";
import ReactHookFormSVG from "@shared/assets/images/stackLogo/react-hook-form.svg";
import ReactQuerySVG from "@shared/assets/images/stackLogo/react-query.svg";
import ViteSVG from "@shared/assets/images/stackLogo/vite.svg";
import TypescriptSVG from "@shared/assets/images/stackLogo/typescript.svg";
import SwiperSVG from "@shared/assets/images/stackLogo/swiper.png";
// import NextjsSVG from "@shared/assets/images/stackLogo/nextjs.svg";
import DjangoSVG from "@shared/assets/images/stackLogo/django.svg";
import MobxSVG from "@shared/assets/images/stackLogo/mobx.svg";
import RecoilSVG from "@shared/assets/images/stackLogo/recoil.svg";
import JavascriptSVG from "@shared/assets/images/stackLogo/javascript.svg";
import FfmpegwasmSVG from "@shared/assets/images/stackLogo/ffmpeg-wasm.png";
import ScssSVG from "@shared/assets/images/stackLogo/scss.svg";
import StyledComponentsSVG from "@shared/assets/images/stackLogo/styled-components.png";
import TailwindcssSVG from "@shared/assets/images/stackLogo/tailwindcss.svg";
import ReduxSVG from "@shared/assets/images/stackLogo/redux.svg";
import NodejsSVG from "@shared/assets/images/stackLogo/nodejs.svg";
import ExpressSVG from "@shared/assets/images/stackLogo/express.png";

/* preview screenshot */

import Cineacca1SVG from "@shared/assets/images/preview/cineacca.jpg";
import Cineacca2SVG from "@shared/assets/images/preview/cineacca_2.jpg";
import Cineacca3SVG from "@shared/assets/images/preview/cineacca_3.jpg";
import Cineacca4SVG from "@shared/assets/images/preview/cineacca_4.jpg";

import Hellokorea1SVG from "@shared/assets/images/preview/hellokorea.png";
import Hellokorea2SVG from "@shared/assets/images/preview/hellokorea2.png";
import Hellokorea3SVG from "@shared/assets/images/preview/hellokorea3.png";
import Hellokorea4SVG from "@shared/assets/images/preview/hellokorea4.png";

import FridayT1SVG from "@shared/assets/images/preview/fridayT.png";
import FridayT2SVG from "@shared/assets/images/preview/fridayT2.png";
import FridayT3SVG from "@shared/assets/images/preview/fridayT3.png";

import BoardMe1PNG from "@shared/assets/images/preview/boardme.png";
import BoardMe2PNG from "@shared/assets/images/preview/boardme2.png";
import BoardMe3PNG from "@shared/assets/images/preview/boardme3.png";
import BoardMe4PNG from "@shared/assets/images/preview/boardme4.png";
import BoardMe5PNG from "@shared/assets/images/preview/boardme5.png";
import BoardMe6PNG from "@shared/assets/images/preview/boardme6.png";

/* project logo */
import StagecueLogo from "@shared/assets/images/projectLogo/stagecue.svg";
import StagecueFullLogo from "@shared/assets/images/projectLogo/stagecue_full.svg";
import FridayTLogo from "@shared/assets/images/projectLogo/fridayT.png";
import FridayTFullLogo from "@shared/assets/images/projectLogo/fridayT_full.png";
import BoardmeLogo from "@shared/assets/images/projectLogo/boardme.png";
import BoardmeFullLogo from "@shared/assets/images/projectLogo/boardme_full.svg";
import CineaccaLogo from "@shared/assets/images/projectLogo/cineacca.svg";
import CineaccaFullLogo from "@shared/assets/images/projectLogo/cineacca_full.svg";
import HellokoreaLogo from "@shared/assets/images/projectLogo/hellokorea.svg";
import HellokoreaFullLogo from "@shared/assets/images/projectLogo/hellokorea_full.svg";

const projects = [
  {
    id: 1,
    title: "Stage Cue",
    logo: StagecueLogo,
    fullLogo: StagecueFullLogo,
    images: [],
    subtitle: "극단-배우 단원모집 중계 플랫폼",
    stacks: [
      ReactSVG,
      TypescriptSVG,
      StyledComponentsSVG,
      ViteSVG,
      ReactHookFormSVG,
      ReactQuerySVG,
      SwiperSVG,
    ],
    startDate: "2024. 05.",
    endDate: "진행중",
    description:
      "스테이지큐는 극단주에게는 단원모집과 간편한 지원자 관리를, 지원자에게는 공고검색과 빠른 지원절차를 제공하기 위한 서비스입니다. React/Typescript 기반으로 개발을 진행하였고 현재 1차 개발 종료 후 리팩토링 및 React Qeury를 도입하고 있습니다. 다양하고 복잡한 input을 포함하고 있는 from 관리를 구현하면서 React Hook Form의 활용법에 대해 많이 연구할 수 있었고 Multiple Range Input이나 Custom Calander Input 같은 custom ui 구현 작업도 재미있는 작업이었습니다.",
  },
  {
    id: 2,
    title: "금요일의 티붕이",
    logo: FridayTLogo,
    fullLogo: FridayTFullLogo,
    images: [FridayT1SVG, FridayT2SVG, FridayT3SVG],
    subtitle: "사내 근태시간 계산 시뮬레이터",
    stacks: [ReactSVG, MobxSVG, StyledComponentsSVG],
    url: "https://fridaytmax.com",
    startDate: "2023. 01",
    endDate: "2023. 04.",
    description:
      "사내 직원들이 주간 근태 시간을 엑셀 시트로 계산하는 것을 보고, 해당 기능을 웹 애플리케이션으로 옮겨 좀 더 간편한 입력과 보기 좋은 ui를 제공해보고자 시작된 프로젝트입니다. 근태 시간 계산의 다양한 조건들과 계산에 관한 로직들을 좀 더 깔끔한 코드로 작성해보고자 많이 고민했었습니다. AWS Amplify를 통해 서비스를 배포하였고 이후 많은 직원들이 이용하게 되면서 서비스 사용 경험에 대한 다양한 피드백도 받아 볼 수 있었습니다.",
    link: [],
  },
  {
    id: 3,
    title: "BoardMe",
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
    startDate: "2022. 11.",
    endDate: "2023. 02.",
    description:
      "웹에서의 커뮤니케이션은 대부분 일회적이며 쉽게 휘발됩니다. 조금 더 따뜻한 연결을, 조금 더 기억에 남는 방식으로 남길 수 없을까? 하는 것이 보드미 팀의 질문이었습니다. React로 개발되었으며 AWS Amplify로 배포했습니다. 입사 후 첫 사이드 프로젝트이자 혼자가 아닌 다른 분들과 함께 했던 첫 프로젝트였고 소속 프론트엔드팀 팀장님을 비롯하여 사내의 여러 기획자 및 개발자 분들과 함께 프로젝트를 수행하면서 실제 서비스 개발 과정의 전반이 어떻게 진행되는지 파악할 수 있었고, 많은 경험과 좋은 실력을 갖추고 계신 분들의 지도를 받으면서 입사 초기에 부족한 개발역량을 채우는데 많은 도움이 되었습니다.",
    link: [],
  },
  {
    id: 4,
    title: "CINEACCA",
    fullLogo: CineaccaFullLogo,
    logo: CineaccaLogo,
    images: [Cineacca1SVG, Cineacca2SVG, Cineacca3SVG, Cineacca4SVG],
    subtitle: "이탈리아 학생영화 스트리밍 플랫폼",
    stacks: [DjangoSVG, JavascriptSVG, FfmpegwasmSVG, ScssSVG],
    startDate: "2021. 07",
    endDate: "2022. 03.",
    description:
      "이탈리아에서 영화학교를 중퇴한 후 개발을 시작하면서 친구들을 위해 만든 첫 개인 프로젝트입니다. 실력에 비해 비교적 기회가 적은 젊은 영화학도들이 자신의 작품을 보여주고 대중들에게 피드백을 받을 수 있는 공간을 만들고자 했습니다. Custom Video Player의 구현과 FFmpeg-wasm을 통한 비디오 컨버팅 및 업로드 작업이 특히 도전적인 과제 였습니다. 백엔드 개발 및 파일 스토리지(AWS S3) 구축 등을 경험해보면서 프론트 외적인 지식들을 쌓는데 많이 도움이 되었습니다.",
    link: [],
  },
  {
    id: 5,
    title: "Hello Korea",
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
    startDate: "2022. 02.",
    endDate: "2022. 10.",
    description:
      "한국에 베트남 유학생들이 부쩍 많아지면서 이들이 한국생활에 좀 더 편리하게 정착할 수 있도록 다양한 서비스를 제공하기 위한 커뮤니티 서비스입니다. 실제 배포까지 이루어지지는 못했지만 Node.js와 MongoDB를 기반으로 한 백엔드 개발을 경험하면서 프론트엔드 뒤에서 어떤 일들이 이루어지는지 많이 공부할 수 있었습니다. 프론트엔드 영역에서는 Redux를 활용한 세션 관리가 꽤 어려운 작업이었고 React Query를 처음 접해보면서 프론트엔드에서의 서버사이드 데이터 관리에 관해서도 많이 배울 수 있었습니다.",
    link: [],
  },
  {
    id: 6,
    title: "Stage Cue",
    logo: StagecueLogo,
    fullLogo: StagecueFullLogo,
    images: [],
    subtitle: "극단-배우 단원모집 중계 플랫폼",
    stacks: [
      ReactSVG,
      TypescriptSVG,
      StyledComponentsSVG,
      ViteSVG,
      ReactHookFormSVG,
      ReactQuerySVG,
      SwiperSVG,
    ],
    startDate: "2024. 05.",
    endDate: "진행중",
    description:
      "스테이지큐는 극단주에게는 단원모집과 간편한 지원자 관리를, 지원자에게는 공고검색과 빠른 지원절차를 제공하기 위한 서비스입니다. React/Typescript 기반으로 개발을 진행하였고 현재 1차 개발 종료 후 리팩토링 및 React Qeury를 도입하고 있습니다. 다양하고 복잡한 input을 포함하고 있는 from 관리를 구현하면서 React Hook Form의 활용법에 대해 많이 연구할 수 있었고 Multiple Range Input이나 Custom Calander Input 같은 custom ui 구현 작업도 재미있는 작업이었습니다.",
  },
  {
    id: 7,
    title: "금요일의 티붕이",
    logo: FridayTLogo,
    fullLogo: FridayTFullLogo,
    images: [FridayT1SVG, FridayT2SVG, FridayT3SVG],
    subtitle: "사내 근태시간 계산 시뮬레이터",
    stacks: [ReactSVG, MobxSVG, StyledComponentsSVG],
    url: "https://fridaytmax.com",
    startDate: "2023. 01",
    endDate: "2023. 04.",
    description:
      "사내 직원들이 주간 근태 시간을 엑셀 시트로 계산하는 것을 보고, 해당 기능을 웹 애플리케이션으로 옮겨 좀 더 간편한 입력과 보기 좋은 ui를 제공해보고자 시작된 프로젝트입니다. 근태 시간 계산의 다양한 조건들과 계산에 관한 로직들을 좀 더 깔끔한 코드로 작성해보고자 많이 고민했었습니다. AWS Amplify를 통해 서비스를 배포하였고 이후 많은 직원들이 이용하게 되면서 서비스 사용 경험에 대한 다양한 피드백도 받아 볼 수 있었습니다.",
    link: [],
  },
  {
    id: 8,
    title: "BoardMe",
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
    startDate: "2022. 11.",
    endDate: "2023. 02.",
    description:
      "웹에서의 커뮤니케이션은 대부분 일회적이며 쉽게 휘발됩니다. 조금 더 따뜻한 연결을, 조금 더 기억에 남는 방식으로 남길 수 없을까? 하는 것이 보드미 팀의 질문이었습니다. React로 개발되었으며 AWS Amplify로 배포했습니다. 입사 후 첫 사이드 프로젝트이자 혼자가 아닌 다른 분들과 함께 했던 첫 프로젝트였고 소속 프론트엔드팀 팀장님을 비롯하여 사내의 여러 기획자 및 개발자 분들과 함께 프로젝트를 수행하면서 실제 서비스 개발 과정의 전반이 어떻게 진행되는지 파악할 수 있었고, 많은 경험과 좋은 실력을 갖추고 계신 분들의 지도를 받으면서 입사 초기에 부족한 개발역량을 채우는데 많은 도움이 되었습니다.",
    link: [],
  },
  {
    id: 9,
    title: "CINEACCA",
    fullLogo: CineaccaFullLogo,
    logo: CineaccaLogo,
    images: [Cineacca1SVG, Cineacca2SVG, Cineacca3SVG, Cineacca4SVG],
    subtitle: "이탈리아 학생영화 스트리밍 플랫폼",
    stacks: [DjangoSVG, JavascriptSVG, FfmpegwasmSVG, ScssSVG],
    startDate: "2021. 07",
    endDate: "2022. 03.",
    description:
      "이탈리아에서 영화학교를 중퇴한 후 개발을 시작하면서 친구들을 위해 만든 첫 개인 프로젝트입니다. 실력에 비해 비교적 기회가 적은 젊은 영화학도들이 자신의 작품을 보여주고 대중들에게 피드백을 받을 수 있는 공간을 만들고자 했습니다. Custom Video Player의 구현과 FFmpeg-wasm을 통한 비디오 컨버팅 및 업로드 작업이 특히 도전적인 과제 였습니다. 백엔드 개발 및 파일 스토리지(AWS S3) 구축 등을 경험해보면서 프론트 외적인 지식들을 쌓는데 많이 도움이 되었습니다.",
    link: [],
  },
  {
    id: 10,
    title: "Hello Korea",
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
    startDate: "2022. 02.",
    endDate: "2022. 10.",
    description:
      "한국에 베트남 유학생들이 부쩍 많아지면서 이들이 한국생활에 좀 더 편리하게 정착할 수 있도록 다양한 서비스를 제공하기 위한 커뮤니티 서비스입니다. 실제 배포까지 이루어지지는 못했지만 Node.js와 MongoDB를 기반으로 한 백엔드 개발을 경험하면서 프론트엔드 뒤에서 어떤 일들이 이루어지는지 많이 공부할 수 있었습니다. 프론트엔드 영역에서는 Redux를 활용한 세션 관리가 꽤 어려운 작업이었고 React Query를 처음 접해보면서 프론트엔드에서의 서버사이드 데이터 관리에 관해서도 많이 배울 수 있었습니다.",
    link: [],
  },
];

export default projects;
