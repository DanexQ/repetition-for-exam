import { Outlet } from "react-router-dom";
import styled from "styled-components";
import TopicNavigate from "./NavbarSub/NavbarSub";
import Navbar from "./NavbarMain/NavbarMain";
import Footer from "./Footer";
import { NavbarSubContainer } from "./NavbarSub/NavbarSubStyled";
import { useState } from "react";

const Layout = () => {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

  return (
    <Prefix>
      <TopicNavigate
        show={showMobileMenu}
        setShowMobileMenu={setShowMobileMenu}
      />
      <MiddleContainer>
        <Navbar show={showMobileMenu} setShowMobileMenu={setShowMobileMenu} />
        <Outlet />
        <Footer />
      </MiddleContainer>
    </Prefix>
  );
};

export default Layout;

const Prefix = styled.div`
  width: 100%;
  display: grid;
  gap: 4rem;

  @media only screen and (min-width: 1100px) {
    grid-template-columns: minmax(250px, 300px) minmax(700px, 1000px) minmax(
        0,
        300px
      );
    justify-content: space-between;
  }

  @media only screen and (max-width: 1100px) {
    grid-template-columns: 1fr;
    & > ${NavbarSubContainer} {
      display: none;
    }
  }
`;

const MiddleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6rem;
  padding-bottom: 3rem;
  align-items: center;
`;
