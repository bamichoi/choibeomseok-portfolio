import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Sidemenu from "../sidemenu";
import Header from "../header";
import Toast from "../toast";

const Layout = () => {
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

export default Layout;

const LayoutContainer = styled.div`
  background-color: #1d4e89;
  display: flex;
  height: 100vh;
`;

const Body = styled.div`
  width: 100%;
  height: 100%;
`;
