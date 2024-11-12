import researchs from "@/e_entities/researchs";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Article = () => {
  const { id } = useParams();

  const selectedArticle = researchs.find((article) => `${article.id}` === id);
  return <ArticleContainer>{selectedArticle?.article}</ArticleContainer>;
};

export default Article;

const ArticleContainer = styled.div`
  padding: 8.1rem;
  padding-top: 6rem;
`;
