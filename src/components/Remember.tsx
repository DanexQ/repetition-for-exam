import styled from "styled-components";
import * as S from "../assets/StyledComponents";

const Remember = () => {
  return (
    <RememberContainer>
      <S.SectionTitle>
        Praktyka czyni mistrza! Link do wszystkich egzaminów z poprzednich lat
      </S.SectionTitle>
    </RememberContainer>
  );
};

export default Remember;

const RememberContainer = styled.div`
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
  margin-top: 4rem;
  text-align: center;
`;
