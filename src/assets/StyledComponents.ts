import styled from "styled-components";

export const Img = styled.img`
  max-width: 50%;
  border-radius: 1rem;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media only screen and (max-width: 1100px) {
    padding: 0 3rem;
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100rem;
  gap: 2rem;
  padding: 1rem 0;
`;

export const SectionTitle = styled.h2`
  font-size: 3.2rem;
  font-weight: 600;
`;

export const SectionContent = styled.p`
  font-size: 2rem;
  font-weight: 300;
  text-align: justify;
`;

export const SectionCode = styled.div<{ flex?: true; big?: true }>`
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

    @media only screen and (min-width: 1100px) {
      grid-template-columns: 3fr 1fr;
      pre {
        width: 100%;
        padding-right: 0;
      }
    }
  `}
`;

export const SpanBold = styled.span`
  font-weight: 600;
`;

export const ModalButton = styled.span`
  background-color: #087ea4;
  padding: 1rem 2rem;
  font-size: 2rem;
  border-radius: 1rem;
  font-weight: 600;
  cursor: pointer;
  text-align: center;

  &:hover {
    filter: brightness(0.95);
  }

  &:active {
    filter: brightness(0.85);
  }
`;

export const SubTitle = styled.h2`
  font-size: 2.2rem;
`;
