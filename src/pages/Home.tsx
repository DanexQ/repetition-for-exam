import React, { useState } from "react";
import styled from "styled-components";

const Home = () => {
  const [lang, setLang] = useState<string | undefined>(undefined);
  const [color, setColor] = useState<string>("#EED81C");

  const handleChangeTitle = (lang: string, color: string) => {
    setLang(lang);
    setColor(color);
  };

  return (
    <>
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
        >
          JavaScript
        </SChoice>
        <SChoice
          bgcol="#767AB3"
          onMouseEnter={() => handleChangeTitle("PHP", "#767AB3")}
        >
          PHP
        </SChoice>
        <SChoice
          bgcol="#FF9A00"
          onMouseEnter={() => handleChangeTitle("SQL", "#FF9A00")}
        >
          SQL
        </SChoice>
        <SChoice
          bgcol="#E34E27"
          onMouseEnter={() => handleChangeTitle("HTML", "#E34E27")}
        >
          HTML
        </SChoice>
        <SChoice
          bgcol="#274CE4"
          onMouseEnter={() => handleChangeTitle("CSS", "#274CE4")}
        >
          CSS
        </SChoice>
      </SChoicesContainer>
    </>
  );
};

export default Home;

const SHomeHeader = styled.div<{ color: string }>`
  width: 50%;
  color: #222222;
  height: 100%;
  font-size: 8rem;
  letter-spacing: -1px;
  line-height: 0.9;
  background-color: #222;
  text-transform: uppercase;
  font-weight: 900;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 8rem;

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
  transform: translateX(25%);
  transition: all 0.3s;
  text-transform: uppercase;
  border-radius: 2rem;
  font-weight: 900;

  &:hover {
    transform: translateX(10%);
  }
`;
