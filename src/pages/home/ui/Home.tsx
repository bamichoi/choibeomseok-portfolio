import { MoonAge } from "@/widgets/home";
import styled from "styled-components";

export const Home = () => {
  return (
    <HomeContainer>
      <Centerpeice>
        <MoonAge />
      </Centerpeice>
    </HomeContainer>
  );
};


const HomeContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Centerpeice = styled.div`
  color: #9bb7d4;
  padding-right: 300px;
`;
