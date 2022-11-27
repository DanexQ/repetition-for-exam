import React, { useContext, useState } from "react";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";
import { CurrentLocationContext } from "../context/CurrentLocationContext";

const Home = () => {
  const [lang, setLang] = useState<string | undefined>(undefined);
  const [color, setColor] = useState<string>("#EED81C");
  const { setCurrentLocation } = useContext(CurrentLocationContext);

  const navigate = useNavigate();
  const handleChangeTitle = (lang: string, color: string) => {
    setLang(lang);
    setColor(color);
  };

  const handleNavigate = (location: string) => {
    setCurrentLocation(location);
    navigate(`/topic/${location}`);
  };

  return (
    <SHomeContainer>
      <SHomeHeader color={color}>
        <span>Powtórz</span>
        {!!lang && <SLanguage color={color}>{lang}</SLanguage>}
        <span>przed</span>
        <span>egzaminem</span>
        <span>praktycznym</span>
      </SHomeHeader>
      <SChoicesContainer>
        <SChoice
          bgcol="#EED81C"
          onMouseEnter={() => handleChangeTitle("JavaScript", "#EED81C")}
          onClick={() => handleNavigate("js")}
        >
          JavaScript
        </SChoice>
        <SChoice
          bgcol="#767AB3"
          onMouseEnter={() => handleChangeTitle("PHP", "#767AB3")}
          onClick={() => handleNavigate("php")}
        >
          PHP
        </SChoice>
        <SChoice
          bgcol="#FF9A00"
          onMouseEnter={() => handleChangeTitle("SQL", "#FF9A00")}
          onClick={() => handleNavigate("sql")}
        >
          SQL
        </SChoice>
        <SChoice
          bgcol="#E34E27"
          onMouseEnter={() => handleChangeTitle("HTML", "#E34E27")}
          onClick={() => handleNavigate("html")}
        >
          HTML
        </SChoice>
        <SChoice
          bgcol="#274CE4"
          onMouseEnter={() => handleChangeTitle("CSS", "#274CE4")}
          onClick={() => handleNavigate("css")}
        >
          CSS
        </SChoice>
      </SChoicesContainer>
    </SHomeContainer>
  );
};

export default Home;

const animation = keyframes`
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
`;

const animationSlide = keyframes`
  0%{
    transform: translateX(100%);
  }
  100%{
    transform: translateX(25%);
  }
`;

const SHomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background-color: #222;
`;

const SHomeHeader = styled.div<{ color: string }>`
  width: 50%;
  color: #222222;
  height: 100%;
  font-size: 8rem;
  letter-spacing: -1px;
  line-height: 0.9;
  text-transform: uppercase;
  font-weight: 900;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 8rem;
  animation-name: ${animation};
  animation-duration: 2s;

  ${({
    color,
  }) => `text-shadow: -2px -2px 0px ${color}, 0px -2px 0px ${color}, 2px -2px 0px ${color},
  -2px 0px 0px ${color}, 2px 0px 0px ${color}, -2px 2px 0px ${color},
  0px 2px 0px ${color}, 2px 2px 0px ${color};`}
`;

const SChoicesContainer = styled.div`
  width: 50%;
  background-color: #222222;
  color: #222;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  overflow: hidden;
`;

const SLanguage = styled.span<{ color: string }>`
  color: ${({ color }) => (!!color ? color : "#222")};
  text-shadow: -1px -1px 0px #222, 0px -1px 0px #222, 1px -1px 0px #222,
    -1px 0px 0px #222, 1px 0px 0px #222, -1px 1px 0px #222, 0px 1px 0px #222,
    1px 1px 0px #222;
`;

const SChoice = styled.span<{ bgcol: string }>`
  background-color: ${({ bgcol }) => bgcol};
  padding: 4rem;
  width: 100%;
  font-size: 3rem;
  cursor: pointer;
  transition: transform 0.2s ease;
  text-transform: uppercase;
  transform: translateX(25%);
  border-radius: 2rem;
  font-weight: 900;
  animation-name: ${animationSlide};
  animation-duration: 2s;
  animation-iteration-count: 1;
  animation-fill-mode: backwards;

  &:nth-child(2) {
    animation-delay: 0.2s;
  }
  &:nth-child(3) {
    animation-delay: 0.4s;
  }
  &:nth-child(4) {
    animation-delay: 0.6s;
  }
  &:nth-child(5) {
    animation-delay: 0.8s;
  }

  &:hover {
    animation-fill-mode: none;
    transform: translateX(10%);
  }

  &:active {
    transform: translateX(10%) scale(0.98);
  }
`;
