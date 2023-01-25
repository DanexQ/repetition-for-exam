import styled, { keyframes } from "styled-components";

const lolo = (index: number, bottom: boolean) => keyframes`
0%{
    top:0;
    left:0
}

100%{
  ${
    bottom
      ? `
      top: 200px;
      left: ${-150 + index * 300}px;`
      : `
    top: -200px;
    left: ${-200 + index * 200}px;
  `
  }
    
}
`;

export const Button = styled.button<{ index: number; bottom: boolean }>`
  padding: 1rem;
  background-color: transparent;
  border: none;
  filter: drop-shadow(2px 2px 10px rgba(0, 0, 0, 0.3));
  height: 10rem;
  width: 15rem;
  position: absolute;
  animation-name: ${({ index, bottom }) => lolo(index, bottom)};
  animation-duration: 0.5s;
  animation-delay: ${({ index }) => 0.25 * index}s;
  animation-fill-mode: both;
  transform: translate(-50%, -50%);
  z-index: 1;
  cursor: pointer;
  transition: transform 0.1s;

  &:hover {
    filter: drop-shadow(2px 2px 10px rgba(0, 0, 0, 0.3)) brightness(0.9);
  }

  &:active {
    transform: translate(-50%, -50%) scale(0.95);
  }
`;

export const LangImg = styled.img`
  min-width: 100%;
  max-height: 100%;
`;
