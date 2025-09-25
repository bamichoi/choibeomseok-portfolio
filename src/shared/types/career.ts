export interface Project {
  id: number;
  summary: {
    projectTitle: string;
    description: string;
  };
  tasks: string[];
  stacks: string[];
}

export interface CareerItem {
  id: string;
  title: string;
  period: string;
  logo?: React.ComponentType | string;
  projects: Project[];
}
