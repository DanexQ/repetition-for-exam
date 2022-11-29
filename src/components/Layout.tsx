import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./Navbar";
import Remember from "./Remember";

const Layout = () => {
  return (
    <Prefix>
      <Navbar />
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
