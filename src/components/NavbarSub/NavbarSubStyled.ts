import styled from "styled-components";

export const NavbarSubContainer = styled.div<{ show?: boolean }>`
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 1100px) {
    width: 100%;
    height: 100dvh;
    background-color: #171717;
    text-align: center;
    position: fixed;
    top: 0;
    z-index: 99;
    overflow: auto;
    right: 0;
    transition: transform 0.2s ease-in;
    transform: translateX(${({ show }) => (show ? "0" : "100%")});
  }
`;

export const NavbarSubList = styled.li`
  position: sticky;
  top: 4rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  list-style: none;

  @media only screen and (max-width: 1100px) {
    position: static;
    gap: 1rem;
    padding: 10rem 0;
    justify-content: center;
  }
`;

export const NavbarSubLink = styled.a<{ color: string; isActive: boolean }>`
  display: block;
  text-decoration: none;
  color: inherit;
  font-size: 2rem;
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

  @media only screen and (max-width: 1100px) {
    border-radius: 0;
  }
`;

export const NavbarSubTopic = styled(NavbarSubLink)<{ color: string }>`
  color: ${({ color }) => color};
  font-size: 2rem;

  @media only screen and (max-width: 1100px) {
    font-size: 3rem;
    border-radius: 0;
    margin-bottom: 1rem;
  }
`;
