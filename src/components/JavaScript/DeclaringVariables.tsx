import * as S from "../../assets/StyledComponents";

const DeclaringVariables = () => {
  const code = `
    <script>
        var zmienna = 1;
        let drugaZmienna = true;
        const trzecia_zmienna = '3';
    </script>
    `;

  return (
    <S.SSection>
      <S.SSectionTitle>Deklarowanie zmiennych</S.SSectionTitle>
      <S.SSectionContent>
        Zmienne możemy deklarować na kilka sposobów, które się od siebie różnią
        funkcjonalnością. Nazywanie zmiennych powinno się odbywać z odpowiednimi
        zasadami: nie powinna ona zaczynać się od cyfry, nie powinna zawierać
        spacji, a jeżeli chcemy, aby nazwa była złożona z kilku słów, to używamy
        znaku podkreślenia zamiast myślnika, albo każde nowe słowo zaczynamy z
        dużej litery i wszystko zapisujemy jednym ciągiem. Zapamiętaj, że
        JavaScript rozróżnia wielkość liter i nazwa zmienna nie jest tym samym
        co ZmienNa.
      </S.SSectionContent>
      <S.SSectionContent>
        Deklarowanie zmiennej za pomocą{" "}
        <S.SSpanBold>var (ang. skrót od variable - zmienna)</S.SSpanBold>i{" "}
        <S.SSpanBold>let (ang. niech)</S.SSpanBold> są bardzo podobne i obie
        mogą zostać modyfikowane w każdym momencie w skrypcie, jednak różnią się
        “życiem” w blokach i funkcjach, lecz ta wiedza nie jest potrzebna na
        egzaminie (najlepiej jest używać wszędzie var). Natomiast zmienna{" "}
        <S.SSpanBold>const (łac. constans - stały)</S.SSpanBold> powoduje, że
        zmienna nie może zostać zmieniona.
      </S.SSectionContent>
      <S.SSectionContent>
        Poniżej znajdują się przykłady deklarowania zmiennych wraz z
        odpowiednimi nazwami::
      </S.SSectionContent>
      <pre>
        <code className="language-html">{code}</code>
      </pre>
    </S.SSection>
  );
};

export default DeclaringVariables;
