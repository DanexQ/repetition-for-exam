import styled from "styled-components";

export const NavbarSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 1100px) {
    display: none;
  }
`;

export const NavbarSubList = styled.nav`
  position: sticky;
  top: 4rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  list-style: none;
`;

export const NavbarSubLink = styled.a<{ color: string; isActive: boolean }>`
  display: block;
  text-decoration: none;
  color: inherit;
  font-size: 1.8rem;
  padding: 1rem 2rem;
  border-radius: 0 2rem 2rem 0;
  cursor: pointer;
  transition: all 0.5s;

  &:hover {
    background-color: #1e232a50;
  }

  ${({ isActive, color }) =>
    isActive &&
    `
    background-color: ${color}30;
    font-weight:600;
    
    &:hover {
      background-color: ${color}40;
    }`};
`;

export const NavbarSubTopic = styled(NavbarSubLink)<{ color: string }>`
  color: ${({ color }) => color};
  font-size: 2rem;
`;
