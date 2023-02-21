import styled from "styled-components";
import { NavbarSubContainer } from "../NavbarSub/NavbarSubStyled";
import { Link } from "react-router-dom";

export const MenuContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #171717;
  width: 100%;
  padding: 2rem 0;

  @media only screen and (max-width: 1100px) {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media only screen and (max-width: 1100px) {
    width: 100%;
    top: 0;
    left: 0;
    z-index: 100;
    justify-content: flex-start;

    ${NavbarSubContainer} {
      display: block;
    }
  }

  @media only screen and (min-width: 1100px) {
    ${NavbarSubContainer} {
      display: none;
    }
  }
`;

export const NavbarMenu = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  width: 100%;
  flex-wrap: wrap;
`;

export const SSpan = styled(Link)<{ color: string }>`
  ${({ color }) => `color: ${color};`}
  font-size: 5rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s;
  backface-visibility: none;
  text-decoration: none;

  :hover {
    transform: scale(1.05);
  }

  @media only screen and (max-width: 1100px) {
    font-size: 3rem;
  }
`;

export const CurrentLocation = styled(SSpan)`
  font-size: 7rem;
  font-weight: 800;

  &:hover {
    font-weight: 800;
  }

  @media only screen and (max-width: 1100px) {
    font-size: 4rem;
  }
`;

export const MenuButton = styled.button`
  position: fixed;
  top: 4.5rem;
  right: 3rem;
  padding: 1rem 0;
  transform: translateY(-50%);
  z-index: 101;
  background-color: transparent;
  border: none;
  cursor: pointer;

  @media only screen and (min-width: 1100px) {
    display: none;
  }
`;

export const ShowNavbarSub = styled.div<{ show: boolean }>`
  width: 30px;
  height: 2px;
  background-color: ${({ show }) => (show ? `transparent` : `white`)};
  margin: 1rem 0;
  position: relative;
  transition: all 0.2s ease-in;

  &::after,
  &::before {
    content: "";
    display: block;
    width: 20px;
    height: inherit;
    background-color: white;
    transform: translateX(25%);
    transition: all 0.2s ease-in;
  }

  &::after {
    position: absolute;
    transform: translateY(7px) translateX(25%);
    ${({ show }) =>
      show &&
      `
      transform: translateX(0%) rotate(45deg) translateY(0px);
      width: 30px;
    `}
  }
  &::before {
    position: absolute;
    transform: translateY(-7px) translateX(25%);
    ${({ show }) =>
      show &&
      `
      transform: translateX(0%) rotate(-45deg) translateY(0px);
      width: 30px;
      `}
  }
`;
