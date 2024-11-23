import researchs from "@/e_entities/research/research";
import styled from "styled-components";

const ResearchList = () => {
  const handleArticleClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <ResearchListContainer>
      <Title>Article List</Title>
      <Articles>
        {researchs.map((article) => (
          <Article
            key={article.id}
            onClick={() => handleArticleClick(article.url)}
          >
            <ArticleTitle>{article.title}</ArticleTitle>
          </Article>
        ))}
      </Articles>
    </ResearchListContainer>
  );
};

export default ResearchList;

const ResearchListContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

const Title = styled.div`
  font-size: 1.2rem;
  color: #9bb7d4;
`;

const Articles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ArticleTitle = styled.div`
  font-weight: lighter;
`;

const Article = styled.div`
  color: #9bb7d4;
  font-size: 1.1rem;
  display: flex;
  flex-direction: column;
  gap: 5px;

  cursor: pointer;

  &:hover {
    color: white;
  }
`;
