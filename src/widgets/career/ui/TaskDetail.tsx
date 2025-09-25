import { CAREER_DATA } from "@/entities/career";
import { RESEARCH_DATA } from "@/entities/research";
import styled from "styled-components";

interface TaskDetailProps {
  selectedProjectId: number;
  selectedCareerId: string;
}

export const TaskDetail = ({
  selectedProjectId,
  selectedCareerId,
}: TaskDetailProps) => {
  const selectedCareer = CAREER_DATA.find(
    (career) => career.id === selectedCareerId
  );

  const selectedProject = selectedCareer?.projects.find(
    (project) => project.id === selectedProjectId
  );
  const articles = RESEARCH_DATA.filter(
    (article) => article.projectId === selectedProjectId
  );

  const handleArticleClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <TaskDetailContainer>
      {selectedProject ? (
        <>
          <ContentWrapper>
            <Title>{selectedProject.summary.projectTitle}</Title>
            <Subtitle>Tasks</Subtitle>
            <Tasks>
              {selectedProject.tasks.map((task, index) => (
                <Task key={index}>{task}</Task>
              ))}
            </Tasks>
          </ContentWrapper>
          {selectedProject.stacks && selectedProject.stacks.length > 0 && (
            <ContentWrapper>
              <Subtitle>Stacks</Subtitle>
              <Stacks>
                {selectedProject.stacks.map((stack, index) => (
                  <StackImage key={index} src={stack} alt="stack" />
                ))}
              </Stacks>
            </ContentWrapper>
          )}
          {articles.length !== 0 && (
            <ContentWrapper>
              <Subtitle>Articles</Subtitle>
              <Articles>
                {articles.map((article) => (
                  <Article
                    key={article.id}
                    onClick={() => handleArticleClick(article.url)}
                  >
                    - {article.title}
                  </Article>
                ))}
              </Articles>
            </ContentWrapper>
          )}
        </>
      ) : (
        <EmptyState>프로젝트를 선택해주세요.</EmptyState>
      )}
    </TaskDetailContainer>
  );
};

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
  font-size: 1rem;
`;

const Subtitle = styled.div`
  width: fit-content;
  padding: 6px;
  border-radius: 2px;
  color: #1c4e89;
  font-size: 1%.2;
  font-weight: medium;
  background-color: #9bb7d4;
  display: flex;
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

const Stacks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;

const StackImage = styled.img`
  width: 40px;
  height: 40px;
  object-fit: contain;
`;

const EmptyState = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: #9bb7d4;
  font-size: 1.2rem;
  opacity: 0.6;
`;
