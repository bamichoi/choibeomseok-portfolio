import MoonAge from "@/c_widgets/home/ui/moonAge";
import styled from "styled-components";

const Home = () => {
  return (
    <HomeContainer>
      <Centerpeice>
        <MoonAge />
      </Centerpeice>
    </HomeContainer>
  );
};

export default Home;

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
