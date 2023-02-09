import * as S from "../../assets/StyledComponents";

const DeclaringVariables = () => {
  const code = `
    <script>
        var zmienna = 1;
        let drugaZmienna = true;
        const trzecia_zmienna = "3";
    </script>
    `;

  return (
    <S.Section id="deklarowanieZmiennych">
      <S.SectionTitle>Deklarowanie zmiennych</S.SectionTitle>
      <S.SectionContent>
        Zmienne możemy deklarować na kilka sposobów, które się od siebie różnią
        funkcjonalnością. Nazywanie zmiennych powinno się odbywać z odpowiednimi
        zasadami: nie powinna ona zaczynać się od cyfry, nie powinna zawierać
        spacji, a jeżeli chcemy, aby nazwa była złożona z kilku słów, to używamy
        znaku podkreślenia zamiast myślnika, albo każde nowe słowo zaczynamy z
        dużej litery i wszystko zapisujemy jednym ciągiem. Zapamiętaj, że
        JavaScript rozróżnia wielkość liter i nazwa zmienna nie jest tym samym
        co ZmienNa.
      </S.SectionContent>
      <S.SectionContent>
        Deklarowanie zmiennej za pomocą{" "}
        <S.SpanBold>var (ang. skrót od variable - zmienna)</S.SpanBold>i{" "}
        <S.SpanBold>let (ang. niech)</S.SpanBold> są bardzo podobne i obie mogą
        zostać modyfikowane w każdym momencie w skrypcie, jednak różnią się
        “życiem” w blokach i funkcjach, lecz ta wiedza nie jest potrzebna na
        egzaminie (najlepiej jest używać wszędzie var). Natomiast zmienna{" "}
        <S.SpanBold>const (łac. constans - stały)</S.SpanBold> powoduje, że
        zmienna nie może zostać zmieniona.
      </S.SectionContent>
      <S.SectionContent>
        Poniżej znajdują się przykłady deklarowania zmiennych wraz z
        odpowiednimi nazwami::
      </S.SectionContent>
      <pre>
        <code className="language-html">{code}</code>
      </pre>
    </S.Section>
  );
};

export default DeclaringVariables;
