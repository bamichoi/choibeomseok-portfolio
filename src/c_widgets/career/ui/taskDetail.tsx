import careerProjects from "@/e_entities/career/model/careerProjects";
import research from "@/e_entities/research/research";
import styled from "styled-components";

interface TaskDetailProps {
  selectedProjectId: number;
}

const TaskDetail = ({ selectedProjectId }: TaskDetailProps) => {
  const selectedProject = careerProjects.find(
    (project) => project.id === selectedProjectId
  );
  const articles = research.filter(
    (article) => article.projectId === selectedProjectId
  );

  const handleArticleClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <TaskDetailContainer>
      <ContentWrapper>
        <Title>{selectedProject?.summary.projectTitle}</Title>
        <Subtitle>Tasks</Subtitle>
        <Tasks>
          {selectedProject?.tasks.map((task) => (
            <Task>{task}</Task>
          ))}
        </Tasks>
      </ContentWrapper>
      {articles.length !== 0 && (
        <ContentWrapper>
          <Subtitle>Articles</Subtitle>
          <Articles>
            {articles.map((article) => (
              <Article onClick={() => handleArticleClick(article.url)}>
                - {article.title}
              </Article>
            ))}
          </Articles>
        </ContentWrapper>
      )}
    </TaskDetailContainer>
  );
};

export default TaskDetail;

const TaskDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Title = styled.div`
  font-size: 1.8rem;
  color: #9bb7d4;
  font-weight: semibold;
  margin-bottom: 50px;
`;

const Tasks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Task = styled.div`
  color: #9bb7d4;
  font-size: 0.9rem;
`;

const Subtitle = styled.div`
  width: fit-content;
  padding: 5px;
  border-radius: 2px;
  color: #1c4e89;
  font-size: 0.9rem;
  font-weight: medium;
  background-color: #9bb7d4;
`;

const Articles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Article = styled.div`
  color: #9bb7d4;
  font-size: 0.9rem;
  text-decoration: underline;

  cursor: pointer;
  &:hover {
    color: white;
  }
`;
