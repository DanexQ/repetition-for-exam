import styled from "styled-components";
import * as S from "../assets/StyledComponents";

const Footer = () => {
  return (
    <FooterContainer>
      <S.SectionTitle>
        Praktyka czyni mistrza! Link do wszystkich egzaminów z poprzednich lat:{" "}
        <a
          href="https://www.praktycznyegzamin.pl/inf03ee09e14/praktyka/"
          style={{ color: "yellow" }}
        >
          praktycznyegzamin.pl
        </a>
      </S.SectionTitle>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled(S.Section)`
  text-align: center;
`;
