import { Outlet } from "react-router-dom";
import styled from "styled-components";
import TopicNavigate from "./JavaScript/TopicNav/TopicNavigate";
import Navbar from "./Navbar";
import Remember from "./Remember";

const Layout = () => {
  return (
    <Prefix>
      <Navbar />
      <TopicNavigate />
      <Outlet />
      <Remember />
    </Prefix>
  );
};

export default Layout;

const Prefix = styled.div`
  display: grid;
  place-items: center;
  padding-bottom: 10rem;
`;
