import styled from "styled-components";

export const NavbarSubContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 1100px) {
    z-index: 99;
    width: 100%;
    justify-content: center;
    background-color: #171717;
    text-align: center;
    overflow: auto;
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
    top: 0rem;
    gap: 1rem;
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
    font-size: 3rem
    border-radius: 0;
  }
`;
