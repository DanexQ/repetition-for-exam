import styled from "styled-components";
import * as S from "../assets/StyledComponents";

const Footer = () => {
  return (
    <FooterContainer>
      <S.SectionTitle>
        Praktyka czyni mistrza! Link do wszystkich egzaminów z poprzednich lat
      </S.SectionTitle>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled(S.Section)`
  text-align: center;
`;
