import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 5rem;
  width: 100%;
  min-height: 100vh;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 5rem;
  flex-wrap: wrap;
  font-size: 3rem;
`;

export const ButtonContainer = styled.div`
  width: 80%;
  position: relative;
  z-index: 5;
`;

export const ButtonChoice = styled.button<{ clicked: boolean }>`
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
    filter: brightness(0.95);
  }

  &:active {
    filter: brightness(0.85);
  }

  ${({ clicked }) =>
    clicked &&
    `
    transform:scale(.9); 
    filter: brightness(0.9);
  
    &:hover {
      filter: brightness(0.89);
    }

    &:active{
      filter: brightness(0.8);
    }
    `}
`;
