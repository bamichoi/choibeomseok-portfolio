import {
  AGEFREE_PROJECTS,
  BLISS_PROJECTS,
  TMAX_PROJECTS,
} from "./careerProjects";
import type { CareerItem } from "@shared/types/career";
import TmaxSVG from "@shared/ui/assets/images/careerLogo/tmaxLogo.svg?react";
import BlissLogo from "@shared/ui/assets/images/careerLogo/blissLogo.png";

export const CAREER_DATA: CareerItem[] = [
  {
    id: "tmax",
    title: "TmaxAI",
    period: "2022.10 - 2024.10",
    logo: TmaxSVG,
    projects: TMAX_PROJECTS,
  },
  {
    id: "agefree",
    title: "에이지프리",
    period: "2025.01 - 2025.03",
    // logo 없음 - DefaultLogo 사용
    projects: AGEFREE_PROJECTS,
  },
  {
    id: "bliss",
    title: "BLISS PROJECT",
    period: "2025.07 - 현재",
    logo: BlissLogo,
    projects: BLISS_PROJECTS,
  },
];
