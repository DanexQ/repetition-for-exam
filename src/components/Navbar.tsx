import { useContext } from "react";
import styled from "styled-components";
import { CurrentLocationContext } from "../context/CurrentLocationContext";
import { navbarRawElements } from "../const/ElementsForNavbar";
import NavbarElement from "./NavbarElement";
import { SSpan } from "./NavbarElement";

const Navbar = () => {
  const { currentLocation } = useContext(CurrentLocationContext);
  const navbarElements = navbarRawElements
    .filter((el) => el.name !== currentLocation)
    .map((el, index) => (
      <NavbarElement key={index} name={el.name} color={el.color} />
    ));
  const currentLocationColor =
    currentLocation &&
    navbarRawElements.filter((el) => el.name === currentLocation)[0].color;

  return (
    <SNavbarContainer>
      <SCurrentLocation color={currentLocationColor}>
        {currentLocation.toUpperCase()}
      </SCurrentLocation>
      <SNavbarMenu>{navbarElements}</SNavbarMenu>
    </SNavbarContainer>
  );
};

export default Navbar;

const SNavbarContainer = styled.div`
  display: flex;
  align-self: flex-start;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  padding: 5rem 0;
  margin: 0 auto;
`;

const SNavbarMenu = styled.div`
  display: flex;
  justify-content: center;
  gap: 4rem;
`;

const SCurrentLocation = styled(SSpan)`
  font-size: 10rem;
  font-weight: 800;

  &:hover {
    font-weight: 800;
  }
`;
