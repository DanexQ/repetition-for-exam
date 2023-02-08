import styled from "styled-components";

export const SImg = styled.img`
  max-width: 50%;
  border-radius: 1rem;
`;

export const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 100rem;
  gap: 4rem;
  color: white;

  @media only screen and (max-width: 1100px) {
    padding: 5rem;
  }
`;

export const SSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
`;

export const SSectionTitle = styled.h2`
  font-size: 5rem;
  font-weight: 500;
`;

export const SSectionContent = styled.p`
  font-size: 2.3rem;
  font-weight: 300;
  text-align: justify;
`;

export const SSectionImg = styled.div<{ flex?: true; big?: true }>`
  display: grid;
  place-items: center;
  overflow: auto;
  pre {
    width: 100%;
  }

  ${({ flex }) =>
    flex &&
    `
    gap: 0.5rem;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;

    @media only screen and (min-width: 1000px) {
      grid-template-columns: 3fr 1fr;
      pre {
        width: 100%;
        padding-right: 0;
      }
    }
  `}
`;

export const SSpanBold = styled.span`
  font-weight: 700;
`;

export const ModalButton = styled.span`
  background-color: #087ea4;
  padding: 1rem 2rem;
  font-size: 2rem;
  border-radius: 1rem;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    filter: brightness(0.95);
  }

  &:active {
    filter: brightness(0.85);
  }
`;
