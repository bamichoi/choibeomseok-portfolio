// Widgets Layer Barrel Exports  
// Following FSD architecture - widgets compose entities and shared modules

// Home Widgets
export { default as MoonAge } from './home/ui/moonAge';
export { requestMoonAge } from './home/api/reqMoonAge';

// Career Widgets
export { default as CareerProject } from './career/ui/careerProject';
export { default as TaskDetail } from './career/ui/taskDetail';

// Project Widgets
export { default as Project } from './project/ui/project';
export { default as ProjectList } from './project/ui/projectList';
export { default as ProjectSlide } from './project/ui/projectSlide';
export { default as ProjectSummary } from './project/ui/projectSummary';
export { default as PreviewSlide } from './project/ui/previewSlide';

// Research Widgets
export { default as ResearchList } from './research/ui/reasearchList';