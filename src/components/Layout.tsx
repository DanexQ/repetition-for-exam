import { Outlet } from "react-router-dom";
import styled from "styled-components";
import TopicNavigate from "./NavbarSub/NavbarSub";
import Navbar from "./NavbarMain/NavbarMain";
import Footer from "./Footer";

const Layout = () => {
  return (
    <Prefix>
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
    gap: 2rem;
    grid-template-columns: 1fr;
  }
`;

const MiddleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6rem;
  padding: 3rem 0;
  align-items: center;

  @media only screen and (max-width: 1100px) {
    padding: 3rem;
  }
`;
