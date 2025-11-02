import {
  AGEFREE_PROJECTS,
  BLISS_PROJECTS,
  TMAX_PROJECTS,
} from "./careerProjects";
import type { CareerItem } from "@shared/types/career";
import { TmaxLogo, BlissLogo } from "@shared/assets";

export const CAREER_DATA: CareerItem[] = [
  {
    id: "tmax",
    title: "TmaxAI",
    period: "2022.10 - 2024.10",
    logo: TmaxLogo,
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
    title: "Studio Bliss",
    period: "2025.07 - 현재",
    logo: BlissLogo,
    projects: BLISS_PROJECTS,
  },
];
