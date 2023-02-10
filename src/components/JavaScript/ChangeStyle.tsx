import * as S from "../../assets/StyledComponents";
import { useHighlight } from "../../Hooks/useHighlight";

const ChangeStyle = () => {
  const highlight = useHighlight();
  highlight();
  const changeStyleCode = ` <body>
    <div id="blok"></blok>
    <script>
      const blok = document.getElementById("blok");
      blok.style.width = "100px";
      blok.style.height = "100px";
      blok.style.backgroundColor = "red";
      blok.style.marginRight = "24px";
      blok.style.display= "none";
    </script>
  </body>`;

  return (
    <S.Section id="zmianaStylu">
      <S.SectionTitle>Zmiana stylu elementów</S.SectionTitle>
      <S.SectionContent>
        Styl elementu możesz zmienić dzięki własności{" "}
        <S.SpanBold>style.nazwaStylu</S.SpanBold>. Możesz zmienić{" "}
        <S.SpanBold>dowolną</S.SpanBold> wartość stylu danego elementu, jednak
        musisz pamiętać o prawidłowej składni. Gdy w CSS jest kilka wyrazów
        oddzielonych myślnikiem np. <S.SpanBold>background-color</S.SpanBold>,
        to w skrypcie musisz zapisać wszystko razem, a każdą literę kolejnego
        słowa zamienić na wielką, czyli <S.SpanBold>backgroundColor</S.SpanBold>
        .
      </S.SectionContent>
      <S.SectionCode>
        <pre>
          <code className="language-html">{changeStyleCode}</code>
        </pre>
      </S.SectionCode>
    </S.Section>
  );
};

export default ChangeStyle;
