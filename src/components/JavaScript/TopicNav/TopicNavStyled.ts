import { NavHashLink } from "react-router-hash-link";
import styled from "styled-components";

export const NavContainer = styled.div`
  position: fixed;
  top: 2rem;
  left: 0;
  display: flex;
  flex-direction: column;
`;

export const CurrLocation = styled.h3<{ color: string }>`
  color: ${({ color }) => color};
`;

export const LinksList = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  list-style: none;
`;

export const LinkItem = styled(NavHashLink)`
  display: block;
  text-decoration: none;
  color: white;
  font-size: 1.7rem;
  padding: 1rem 2rem;

  &:hover {
    background-color: red;
  }

  &.active {
    color: red;
  }
`;
