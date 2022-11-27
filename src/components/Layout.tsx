import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <Prefix>
      <Navbar />
      <Outlet />
    </Prefix>
  );
};

export default Layout;

const Prefix = styled.div`
  display: grid;
  place-items: center;
  padding-bottom: 10rem;
`;
