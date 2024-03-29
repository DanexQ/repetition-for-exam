import styled, { keyframes } from "styled-components";

const lolo = (index: number, bottom: boolean) => keyframes`
0%{
    top:0px;
    left:0px;
}

100%{
  ${
    bottom
      ? `
      top: 20rem;`
      : `
    top: -20rem;
    left: calc(var(--center) + ${index} * var(--icon-gap));
  `
  }
    
}

`;

const hideMe = (index: number, bottom: boolean) => keyframes`
0%{
  ${
    bottom
      ? `
      top: 200px;`
      : `
    top: -200px;
    left: calc(var(--center) + ${index} * var(--icon-gap));
  `
  }
    
}
100%{
  top:0px;
  left:0px;
}
`;

export const Button = styled.button<{
  index: number;
  bottom: boolean;
  hide: boolean;
}>`
  padding: 1rem;
  background-color: transparent;
  border: none;
  filter: drop-shadow(2px 2px 10px rgba(0, 0, 0, 0.3));
  height: 10rem;
  width: 15rem;
  position: absolute;
  animation-name: ${({ index, bottom, hide }) =>
    hide ? hideMe(index, bottom) : lolo(index, bottom)};
  animation-duration: ${({ hide }) => (hide ? 0.25 : 0.5)}s;
  animation-delay: ${({ index, hide }) => (!hide ? 0.25 * index : 0)}s;
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
  --icon-gap: 200px;
  --center: -300px;
  @media only screen and (max-width: 800px) {
    --icon-gap: 100px;
    --center: -150px;
  }
  @media only screen and (max-width: 500px) {
    --icon-gap: 80px;
    --center: -120px;
  }
`;

export const LangImg = styled.img`
  min-width: 100%;
  max-height: 100%;
`;
