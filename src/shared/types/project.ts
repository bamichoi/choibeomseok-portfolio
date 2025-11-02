export interface SideProject {
  id: number;
  title: string;
  logo: string;
  fullLogo: string;
  subtitle: string;
  url?: string;
  appStoreUrl?: string;
  playStoreUrl?: string;
  images: string[];
  stacks: string[];
  startDate: string;
  endDate: string;
  description: string;
  tasks: string[];
}