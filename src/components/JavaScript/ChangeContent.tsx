import * as S from "../../assets/StyledComponents";

const ChangeContent = () => {
  const innerHTMLCode = `
    <body>
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
        <S.SpanBold>innerHTML</S.SpanBold> pozwala otrzymać lub wprowadzić
        wszystko co znajduje się w elemencie, nawet elementy HTML. Natomiast{" "}
        <S.SpanBold>innerText</S.SpanBold> pobiera lub wprowadza tylko tekst w
        elemencie.
      </S.SectionContent>
      <S.SectionImg>
        <pre>
          <code className="language-html">{innerHTMLCode}</code>
        </pre>
      </S.SectionImg>
    </S.Section>
  );
};

export default ChangeContent;
