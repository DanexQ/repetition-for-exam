import React, { SyntheticEvent, useContext, useState } from "react";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";
import { CurrentLocationContext } from "../context/CurrentLocationContext";
import { BackendInfo, FrontendInfo } from "../const/ElementsForMenu";
import LangOption from "../components/LangOption";
import LangMenu from "../components/LangMenu";

const Home = () => {
  const navigate = useNavigate();
  const [showOptions, setShowOptions] = useState({ 0: false, 1: false });

  const handleClick = (url: string) => {
    navigate(`${url}`);
  };

  const FrontendElements = FrontendInfo.map((info, index) => (
    <LangOption
      key={info.id}
      imgSrc={info.src}
      imgAlt={info.alt}
      index={index}
      handleClick={handleClick}
    />
  ));
  const BackendElements = BackendInfo.map((info, index) => (
    <LangOption
      key={info.id}
      imgSrc={info.src}
      imgAlt={info.alt}
      index={index}
      handleClick={handleClick}
    />
  ));

  const handleMouseOver = (e: React.MouseEvent, index: number) => {
    setShowOptions((prevState) => ({
      ...prevState,
      [index]: !prevState[index as keyof typeof showOptions],
    }));
  };

  return (
    <>
      <SHomeContainer>
        <ButtonsContainer>
          <ButtonContainer>
            {showOptions[0] && <LangMenu>{FrontendElements}</LangMenu>}
            <ButtonChoice
              clicked={showOptions[0]}
              onClick={(e) => handleMouseOver(e, 0)}
            >
              Tworzenie stron i aplikacji internetowych
            </ButtonChoice>
          </ButtonContainer>
          <ButtonContainer>
            {showOptions[1] && <LangMenu>{BackendElements}</LangMenu>}
            <ButtonChoice
              clicked={showOptions[1]}
              onClick={(e) => handleMouseOver(e, 1)}
            >
              Tworzenie i administrowanie bazami danych
            </ButtonChoice>
          </ButtonContainer>
        </ButtonsContainer>
      </SHomeContainer>
    </>
  );
};

export default Home;

const SHomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 5rem;
  width: 100%;
  min-height: 100vh;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 5rem;
  flex-wrap: wrap;
  font-size: 3rem;
`;

const ButtonContainer = styled.div`
  width: 80%;
  position: relative;
  z-index: 5;
`;

const ButtonChoice = styled.button<{ clicked: boolean }>`
  background-color: #087ea4;
  border: none;
  color: white;
  padding: 4rem;
  font-size: inherit;
  width: 100%;
  border-radius: 20px;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
  backface-visibility: hidden;
  transition: transform 0.1s;
  font-family: inherit;
  font-weight: 900;

  &:hover {
    filter: brightness(0.9);
  }

  &:active {
    transform: scale(0.98);
  }

  ${({ clicked }) =>
    clicked &&
    `
    transform:scale(.9); 
    filter: brightness(0.9);
  
    &:hover {
      filter: brightness(0.85);
    }

    &:active{
      transform:scale(.85) ; 
    }
    `}
`;
