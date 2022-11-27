import styled from "styled-components";

export const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 120rem;
  gap: 4rem;
  color: #ededed;
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

export const SSectionImg = styled.div<{ flex?: true }>`
  display: grid;
  place-items: center;

  ${({ flex }) =>
    flex &&
    `
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    img{
      max-width: 90%;
    }
  `}
`;

export const SSpanBold = styled.span`
  font-weight: 700;
`;
