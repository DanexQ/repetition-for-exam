import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { topicNavbarLinks } from "../../../const/ElementsForNavbar";
import { CurrentLocationContext } from "../../../context/CurrentLocationContext";
import * as S from "./TopicNavStyled";

const TopicNavigate = () => {
  const { currentLocation, currentLocationColor } = useContext(
    CurrentLocationContext
  );
  return (
    <S.NavContainer>
      <S.LinksList>
        <S.CurrLocation color={currentLocationColor}>
          Spis treści {currentLocation.toUpperCase()}
        </S.CurrLocation>
        {topicNavbarLinks[
          currentLocation as keyof typeof topicNavbarLinks
        ]?.map(({ path, title }) => (
          <S.LinkItem key={path} to={`${currentLocation}/${path}`}>
            {title}
          </S.LinkItem>
        ))}
      </S.LinksList>
    </S.NavContainer>
  );
};

export default TopicNavigate;
