import { SetStateAction, useContext } from "react";
import { topicNavbarLinks } from "../../const/ElementsForNavbar";
import { CurrentLocationContext } from "../../context/CurrentLocationContext";
import NavbarSubItem from "./NavbarSubItem";
import * as S from "./NavbarSubStyled";
import React from "react";

interface NavbarSubProps {
  show?: boolean;
  setShowMobileMenu: React.Dispatch<SetStateAction<boolean>>;
}

const TopicNavigate = ({ show, setShowMobileMenu }: NavbarSubProps) => {
  const { currentLocation, currentLocationColor, hashLocation } = useContext(
    CurrentLocationContext
  );
  const topic = "CO MUSISZ WIEDZIEĆ?";

  const navbarSubItems = topicNavbarLinks[
    currentLocation as keyof typeof topicNavbarLinks
  ]?.map(({ path, title }) => (
    <NavbarSubItem key={path} title={title} path={path} hash={hashLocation} />
  ));

  const handleOnClick = () => {
    if (show) setShowMobileMenu(false);
  };

  return (
    <S.NavbarSubContainer show={show}>
      <S.NavbarSubList onClick={handleOnClick}>
        <S.NavbarSubTopic
          href="#"
          isActive={window.location.hash === ""}
          color={currentLocationColor}
        >
          {topic}
        </S.NavbarSubTopic>
        {navbarSubItems}
      </S.NavbarSubList>
    </S.NavbarSubContainer>
  );
};

export default TopicNavigate;
