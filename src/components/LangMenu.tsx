import React from "react";
import styled from "styled-components";

const LangMenu = ({ children }: { children: React.ReactNode }) => {
  return (
    <AlignCheck>
      <Container>{children}</Container>
    </AlignCheck>
  );
};

export default LangMenu;

const Container = styled.div`
  position: relative;
`;

const AlignCheck = styled.div`
  width: 10px;
  height: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: red;
  z-index: -2;
`;
