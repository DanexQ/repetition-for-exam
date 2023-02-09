import * as S from "../../assets/StyledComponents";

const ChangeStyle = () => {
  const changeStyleCode = `
    <script>
        const blok = document.getElementById("blok");
        blok.style.backgroundColor = "red";
        blok.style.marginRight = "24px";
        blok.style.display= "none";
    </script>
    `;
  return (
    <S.Section id="zmianaStylu">
      <S.SectionTitle>Zmiana stylu elementów</S.SectionTitle>
      <S.SectionContent>
        Styl elementu możesz zmienić dzięki{" "}
        <S.SpanBold>style.nazwaStylu</S.SpanBold>. Możesz zmienić dowolną
        wartość stylu danego elementu, jednak musisz pamiętać o prawidłowej
        składni. Gdy w CSS jest <S.SpanBold>background-color</S.SpanBold>, to w
        skrypcie musisz zapisać <S.SpanBold>backgroundColor</S.SpanBold>.
      </S.SectionContent>
      <S.SectionImg>
        <pre>
          <code className="language-html">{changeStyleCode}</code>
        </pre>
      </S.SectionImg>
    </S.Section>
  );
};

export default ChangeStyle;
