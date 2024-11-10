import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";

import { useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import styled from "styled-components";
import Footer from "../footer";
import Title from "../title";

type MenuType = "career" | "projects" | "research" | "contact" | "etc" | "home";

interface MenuItem {
  name: MenuType;
  onClick: (menu: MenuType) => void;
}

const Sidemenu = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [selectedMenu, setSelelctedMenu] = useState<MenuType>();
  const [sortedMenuList, setSortedMenuList] = useState<MenuItem[]>();

  const handleTitleClick = () => {
    navigate("/");
  };

  const handleClickMenu = useCallback(
    (menu: MenuType) => {
      setSelelctedMenu(menu);
      navigate(`/${menu}`);
    },
    [navigate]
  );

  const menuList: MenuItem[] = useMemo(
    () => [
      { name: "career", onClick: () => handleClickMenu("career") },
      { name: "projects", onClick: () => handleClickMenu("projects") },
      { name: "research", onClick: () => handleClickMenu("research") },
      { name: "contact", onClick: () => handleClickMenu("contact") },
      { name: "etc", onClick: () => handleClickMenu("etc") },
    ],
    [handleClickMenu]
  );

  useLayoutEffect(() => {
    if (pathname === "/") {
      setSelelctedMenu("home");
    } else {
      setSelelctedMenu(pathname.replace("/", "") as MenuType);
    }
  }, [pathname]);

  useEffect(() => {
    setSortedMenuList([
      ...menuList.filter((menu) => menu.name === selectedMenu),
      ...menuList.filter((menu) => menu.name !== selectedMenu),
    ]);
  }, [selectedMenu, menuList]);

  return (
    <SidemenuContainer>
      <Title onClick={handleTitleClick} />
      <MenuWrapper>
        <AnimatePresence initial={false}>
          {sortedMenuList?.map((menu) => (
            <motion.div key={menu.name} layout transition={{ duration: 0.3 }}>
              <Menu
                onClick={() => menu.onClick(menu.name)}
                $isSelected={selectedMenu === menu.name}
              >
                {menu.name}
              </Menu>
            </motion.div>
          ))}
        </AnimatePresence>
      </MenuWrapper>
      <Footer />
    </SidemenuContainer>
  );
};

export default Sidemenu;

const SidemenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  height: 100vh;
  padding: 40px;
  justify-content: space-between;
  gap: 20px;
`;

const Menu = styled.div<{ $isSelected: boolean }>`
  color: ${({ $isSelected }) => ($isSelected ? "white" : "#9bb7d4;")};
  font-size: ${({ $isSelected }) => ($isSelected ? "40px" : "20px")};
  padding: 20px;
  cursor: pointer;
  border-top: ${({ $isSelected }) =>
    $isSelected ? "2px solid #9bb7d4" : "none"};
  border-bottom: ${({ $isSelected }) =>
    $isSelected ? "2px solid #9bb7d4" : "none"};

  &:hover {
    color: white;
  }
`;

const MenuWrapper = styled.div``;
