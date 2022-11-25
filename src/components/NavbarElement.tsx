import React from "react";
import styled from "styled-components";

const NavbarElement = (lang: string) => {
  return <span>{lang.toUpperCase()}</span>;
};

export default NavbarElement;

const SSpan = styled.span``;
