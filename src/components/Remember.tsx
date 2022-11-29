import styled from "styled-components";
import {
  SContainer,
  SSection,
  SSectionContent,
  SSectionImg,
  SSectionTitle,
  SSpanBold,
} from "../assets/StyledComponents";

const Remember = () => {
  return (
    <RememberContainer>
      <SSectionTitle>
        Praktyka czyni mistrza, nie zdasz egzaminu bez wykonywania poprzednich!
      </SSectionTitle>
    </RememberContainer>
  );
};

export default Remember;

const RememberContainer = styled(SContainer)`
  margin-top: 4rem;
  text-align: center;
`;
