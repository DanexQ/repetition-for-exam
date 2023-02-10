import { useContext } from "react";
import styled from "styled-components";
import { CurrentLocationContext } from "../../context/CurrentLocationContext";
import { navbarRawElements } from "../../const/ElementsForNavbar";
import NavbarMainElement from "./NavbarMainElement";
import { SSpan } from "./NavbarMainElement";

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
    </SNavbarContainer>
  );
};

export default NavbarMain;

const SNavbarContainer = styled.div`
  display: flex;
  align-self: flex-start;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  margin: 0 auto;
`;

const SNavbarMenu = styled.div`
  position: sticky;
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

  @media only screen and (max-width: 600px) {
    font-size: 6rem;
  }
`;
