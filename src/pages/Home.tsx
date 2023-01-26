import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BackendInfo, FrontendInfo } from "../const/ElementsForMenu";
import LangOption from "../components/HomeMenu/LangOption";
import LangMenu from "../components/HomeMenu/LangMenu";
import * as S from "./StyledHome";

const Home = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState({ 0: false, 1: false });
  const [hideMenu, setHideMenu] = useState({ 0: false, 1: false });

  console.log("showMenu", showMenu, "\nhideMenu", hideMenu);

  const handleClick = (url: string) => {
    navigate(`${url}`);
  };

  const handleHideElements = (index: number) => {
    if (hideMenu[index as keyof typeof hideMenu]) {
      setShowMenu((prevState) => ({
        ...prevState,
        [index]: false,
      }));
      setHideMenu((prevState) => ({
        ...prevState,
        [index]: false,
      }));
    }
  };

  const FrontendElements = FrontendInfo.map((info, index) => (
    <LangOption
      key={info.id}
      imgSrc={info.src}
      imgAlt={info.alt}
      index={index}
      handleClick={handleClick}
      hide={hideMenu[0]}
    />
  ));
  const BackendElements = BackendInfo.map((info, index) => (
    <LangOption
      key={info.id}
      imgSrc={info.src}
      imgAlt={info.alt}
      index={index}
      handleClick={handleClick}
      hide={hideMenu[1]}
    />
  ));

  const handleToggleMenu = (index: number) => {
    const show = showMenu[index as keyof typeof showMenu];
    if (show && !hideMenu[index as keyof typeof showMenu])
      setHideMenu((prevState) => ({
        ...prevState,
        [index]: !prevState[index as keyof typeof showMenu],
      }));
    if (!show) {
      setShowMenu((prevState) => ({
        ...prevState,
        [index]: !prevState[index as keyof typeof showMenu],
      }));
    }
  };

  return (
    <S.HomeContainer>
      <S.ButtonsContainer>
        <S.ButtonContainer>
          {showMenu[0] && (
            <LangMenu handleHideElements={() => handleHideElements(0)}>
              {FrontendElements}
            </LangMenu>
          )}
          <S.ButtonChoice
            clicked={showMenu[0]}
            onClick={() => handleToggleMenu(0)}
          >
            Tworzenie stron i aplikacji internetowych
          </S.ButtonChoice>
        </S.ButtonContainer>
        <S.ButtonContainer>
          {showMenu[1] && (
            <LangMenu handleHideElements={() => handleHideElements(1)}>
              {BackendElements}
            </LangMenu>
          )}
          <S.ButtonChoice
            clicked={showMenu[1]}
            onClick={() => handleToggleMenu(1)}
          >
            Tworzenie i administrowanie bazami danych
          </S.ButtonChoice>
        </S.ButtonContainer>
      </S.ButtonsContainer>
    </S.HomeContainer>
  );
};

export default Home;
