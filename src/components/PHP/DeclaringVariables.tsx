import * as S from "../../assets/StyledComponents";
import { useHighlight } from "../../Hooks/useHighlight";

const DeclaringVariables = () => {
  const highlight = useHighlight();
  highlight();

  const declaringCode = ` <?php 
    $zmienna = 1;
    $drugaZmienna = "2";
    $trzecia_zmienna = 3;

    echo "Pierwsza zmienna wynosi: ".$zmienna;
  ?>`;

  return (
    <S.Section id="zmienne">
      <S.SectionTitle>Deklarowanie zmiennych i wypisywanie ich</S.SectionTitle>
      <S.SectionContent>
        Deklarowanie zmiennych w języku PHP jest bardzo łatwe. Wystarczy, że
        dodamy znak <S.SpanBold>$</S.SpanBold> przed nazwą zmiennej. Jednak
        trzeba pamiętać, że za każdym kolejnym użyciem zmiennej trzeba dodawać
        ten znak. Wypisywanie w PHP wykonujemy za pomocą{" "}
        <S.SpanBold>echo 'Przykładowy tekst'</S.SpanBold>. Jeśli chcesz dodać do
        wyświetlanego tekstu np. wartość zmiennej to musisz użyć operatora
        łączenia tekstu <S.SpanBold>.</S.SpanBold> (po prostu kropka).
      </S.SectionContent>
      <S.SectionCode>
        <pre>
          <code className="language-php">{declaringCode}</code>
        </pre>
      </S.SectionCode>
    </S.Section>
  );
};

export default DeclaringVariables;
