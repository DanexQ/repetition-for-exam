import {
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { topicNavbarLinks } from "../../const/ElementsForNavbar";
import { CurrentLocationContext } from "../../context/CurrentLocationContext";
import NavbarSubItem from "./NavbarSubItem";
import * as S from "./NavbarSubStyled";

const TopicNavigate = () => {
  const { currentLocation, currentLocationColor, hashLocation } = useContext(
    CurrentLocationContext
  );
  const topic = "CO MUSISZ WIEDZIEĆ?";

  const navbarSubItems = topicNavbarLinks[
    currentLocation as keyof typeof topicNavbarLinks
  ]?.map(({ path, title }) => (
    <NavbarSubItem key={path} title={title} path={path} hash={hashLocation} />
  ));

  return (
    <S.NavbarSubContainer>
      <S.NavbarSubList>
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
