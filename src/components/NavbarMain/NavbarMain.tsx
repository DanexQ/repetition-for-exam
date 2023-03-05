import { SetStateAction, useContext, useState } from "react";
import { CurrentLocationContext } from "../../context/CurrentLocationContext";
import { navbarRawElements } from "../../const/ElementsForNavbar";
import NavbarMainElement from "./NavbarMainElement";
import TopicNavigate from "../NavbarSub/NavbarSub";
import * as S from "./NavbarMainStyled";

interface NavbarMainProps {
  show: boolean;
  setShowMobileMenu: React.Dispatch<SetStateAction<boolean>>;
}

const NavbarMain = ({ show, setShowMobileMenu }: NavbarMainProps) => {
  const { currentLocation, currentLocationColor } = useContext(
    CurrentLocationContext
  );

  const navbarElements = navbarRawElements
    .filter((el) => el.name !== currentLocation)
    .map((el, index) => (
      <NavbarMainElement key={index} name={el.name} color={el.color} />
    ));

  const handleOnClick = () => {
    setShowMobileMenu((prevVal) => !prevVal);
  };

  return (
    <S.NavbarContainer>
      <S.MenuButton onClick={handleOnClick}>
        <S.ShowNavbarSub show={show} />
      </S.MenuButton>
      <S.MenuContainer>
        <S.CurrentLocation to={currentLocation} color={currentLocationColor}>
          {currentLocation.toUpperCase()}
        </S.CurrentLocation>
        <S.NavbarMenu>{navbarElements}</S.NavbarMenu>
      </S.MenuContainer>
      <TopicNavigate show={show} setShowMobileMenu={setShowMobileMenu} />
    </S.NavbarContainer>
  );
};

export default NavbarMain;
