import * as S from "../../assets/StyledComponents";
import { useHighlight } from "../../Hooks/useHighlight";

const DeclaringVariables = () => {
  const highlight = useHighlight();
  highlight();
  const code = `  <script>
    var zmienna = 1;
    let drugaZmienna = true;
    const trzecia_zmienna = "3";
  </script>`;

  return (
    <S.Section id="deklarowanieZmiennych">
      <S.SectionTitle>Deklarowanie zmiennych</S.SectionTitle>
      <S.SectionContent>
        Nazywanie zmiennych powinno się odbywać z odpowiednimi zasadami: nie
        powinny zaczynać się od cyfry, nie powinny zawierać spacji, a jeżeli
        chcemy, aby nazwa była złożona z kilku słów, to używamy znaku
        podkreślenia (nie myślnika!), albo każde nowe słowo zaczynamy z dużej
        litery i wszystko zapisujemy jednym ciągiem. Zapamiętaj, że JavaScript
        rozróżnia wielkość liter i nazwa <S.SpanBold>zmienna</S.SpanBold> nie
        jest tym samym co <S.SpanBold>ZmienNa</S.SpanBold>.
      </S.SectionContent>
      <S.SectionContent>
        Deklarowanie zmiennej za pomocą{" "}
        <S.SpanBold>var (ang. variable - zmienna)</S.SpanBold> i{" "}
        <S.SpanBold>let (ang. let - niech)</S.SpanBold> są bardzo podobne i obie
        mogą zostać modyfikowane w każdym momencie w skrypcie, jednak różnią się
        “życiem” w blokach i funkcjach, lecz ta wiedza nie jest aż tak potrzebna
        na egzaminie, więc nie ma znaczenia jak ją zadeklarujesz. Natomiast
        zmienna <S.SpanBold>const (łac. constans - stały)</S.SpanBold> powoduje,
        że wartość zmiennej nie może zostać zmieniona.
      </S.SectionContent>
      <S.SectionContent>
        Poniżej znajdują się przykłady deklarowania zmiennych wraz z odpowiednią
        techniką nazywania:
      </S.SectionContent>
      <S.SectionCode>
        <pre>
          <code className="language-html">{code}</code>
        </pre>
      </S.SectionCode>
    </S.Section>
  );
};

export default DeclaringVariables;
