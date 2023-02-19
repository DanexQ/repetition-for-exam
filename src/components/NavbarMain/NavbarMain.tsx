import { useContext } from "react";
import styled from "styled-components";
import { CurrentLocationContext } from "../../context/CurrentLocationContext";
import { navbarRawElements } from "../../const/ElementsForNavbar";
import NavbarMainElement from "./NavbarMainElement";
import { SSpan } from "./NavbarMainElement";
import TopicNavigate from "../NavbarSub/NavbarSub";
import { NavbarSubContainer } from "../NavbarSub/NavbarSubStyled";

const NavbarMain = () => {
  const { currentLocation, currentLocationColor } = useContext(
    CurrentLocationContext
  );

  const navbarElements = navbarRawElements
    .filter((el) => el.name !== currentLocation)
    .map((el, index) => (
      <NavbarMainElement key={index} name={el.name} color={el.color} />
    ));

  return (
    <SNavbarContainer>
      <SCurrentLocation to={currentLocation} color={currentLocationColor}>
        {currentLocation.toUpperCase()}
      </SCurrentLocation>
      <SNavbarMenu>{navbarElements}</SNavbarMenu>
      <TopicNavigate />
    </SNavbarContainer>
  );
};

export default NavbarMain;

const SNavbarContainer = styled.div`
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;

  @media only screen and (max-width: 1100px) {
    position: sticky;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 100;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
    background-color: #171717;

    ${NavbarSubContainer} {
      display: block;
      height: 100vh;
    }
  }

  @media only screen and (min-width: 1100px) {
    ${NavbarSubContainer} {
      display: none;
    }
  }
`;

const SNavbarMenu = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
  width: 100%;
  flex-wrap: wrap;
`;

const SCurrentLocation = styled(SSpan)`
  font-size: 7rem;
  font-weight: 800;

  &:hover {
    font-weight: 800;
  }

  @media only screen and (max-width: 1100px) {
    font-size: 4rem;
  }
`;
