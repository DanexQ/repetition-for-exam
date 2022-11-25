import { useContext } from "react";
import styled from "styled-components";
import { CurrentLocationContext } from "../context/CurrentLocationContext";

const Navbar = () => {
  const { currentLocation } = useContext(CurrentLocationContext);
  const navbarElements = ["css", "html", "php", "sql", "javascript"]
    .filter((lang) => lang !== currentLocation)
    .map((lang, index) => <span key={index}>{lang.toUpperCase()}</span>);

  return (
    <SNavbarContainer>
      <span>{currentLocation}</span>
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
  gap: 2rem;
`;

const SNavbarMenu = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
`;
