import { Outlet } from "react-router-dom";
import styled from "styled-components";
import TopicNavigate from "./NavbarSub/NavbarSub";
import Navbar from "./NavbarMain/NavbarMain";
import Footer from "./Footer";
import { NavbarSubContainer } from "./NavbarSub/NavbarSubStyled";

const Layout = () => {
  return (
    <Prefix>
      <SShowNavbarSub />
      <TopicNavigate />
      <MiddleContainer>
        <Navbar />
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

const SShowNavbarSub = styled.button`
  position: fixed;
  top: 4.5rem;
  right: 3rem;
  width: 30px;
  height: 2px;
  border: none;
  background-color: white;
  z-index: 101;
  transform: translateY(-50%);

  &::after,
  &::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background-color: inherit;
  }

  &::after {
    position: absolute;
    top: 7px;
  }
  &::before {
    position: absolute;
    bottom: 7px;
  }
`;
