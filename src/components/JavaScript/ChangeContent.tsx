import * as S from "../../assets/StyledComponents";
import { useHighlight } from "../../Hooks/useHighlight";

const ChangeContent = () => {
  const highlight = useHighlight();
  highlight();

  const innerHTMLCode = ` <body>
    <p id="akapit">Akapit z błędem</p>
    <p id="wynik"></p>
    <script>
      document.getElementById("akapit").innerHTML = "Akapit bez <i>błędu</i>.";
      document.getElementById("wynik").innerText = "Wynik działania programu.";
    </script>
  </body>
  `;

  return (
    <S.Section id="zmianaWnetrza">
      <S.SectionTitle>Zmiana wnętrza elementów</S.SectionTitle>
      <S.SectionContent>
        Własność <S.SpanBold>innerHTML</S.SpanBold> pozwala otrzymać lub
        wprowadzić <S.SpanBold>wszystko</S.SpanBold> co może być w elemencie,
        także różne elementy HTML. Natomiast własność{" "}
        <S.SpanBold>innerText</S.SpanBold> pobiera lub wprowadza{" "}
        <S.SpanBold>tylko tekst</S.SpanBold> w elemencie.
      </S.SectionContent>
      <S.SectionCode>
        <pre>
          <code className="language-html">{innerHTMLCode}</code>
        </pre>
      </S.SectionCode>
    </S.Section>
  );
};

export default ChangeContent;
