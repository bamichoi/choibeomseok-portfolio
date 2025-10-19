import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { Sidemenu } from "@/app/ui";
import { Toast } from "@/shared/ui";

export const Layout = () => {
  return (
    <LayoutContainer>
      <Sidemenu />
      <Body>
        {/* <Header /> */}
        <Outlet />
      </Body>
      <Toast />
    </LayoutContainer>
  );
};


const LayoutContainer = styled.div`
  background-color: #1d4e89;
  display: flex;
  height: 100vh;
`;

const Body = styled.div`
  width: 100%;
  height: 100%;
`;
