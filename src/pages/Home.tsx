import React, { SyntheticEvent, useContext, useState } from "react";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";
import { CurrentLocationContext } from "../context/CurrentLocationContext";

const Home = () => {
  const [lang, setLang] = useState<string | undefined>(undefined);
  const [color, setColor] = useState<string>("#EED81C");
  const { setCurrentLocation } = useContext(CurrentLocationContext);
  const [showOptions, setShowOptions] = useState({ 0: false, 1: false });
  const [alignCheck, setAlignCheck] = useState({ y: 0, x: 0 });
  const element = <AlignCheck x={alignCheck.x} y={alignCheck.y} />;

  const handleMouseOver = (e: React.MouseEvent, index: number) => {};

  console.log(alignCheck);

  return (
    <>
      <SHomeContainer>
        <ButtonsContainer>
          <ButtonContainer>
            {showOptions[0] && element}
            <ButtonChoice
              color="#E34E27"
              onClick={(e) => handleMouseOver(e, 0)}
            >
              Tworzenie stron i aplikacji internetowych
            </ButtonChoice>
          </ButtonContainer>
          <ButtonContainer>
            {showOptions[1] && element}
            <ButtonChoice
              color="#767AB3"
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

const AlignCheck = styled.div<{ x: number; y: number }>`
  width: 10px;
  height: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: red;
`;

const SHomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 5rem;
  width: 100%;
  min-height: 100vh;
  background-color: #222;
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
`;

const ButtonChoice = styled.button<{ color: string }>`
  background-color: transparent;
  border: 5px solid ${({ color }) => color};
  color: ${({ color }) => color};
  padding: 4rem;
  font-size: inherit;
  width: 100%;
  border-radius: 20px;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
`;
