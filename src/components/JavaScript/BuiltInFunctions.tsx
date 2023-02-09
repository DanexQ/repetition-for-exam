import * as S from "../../assets/StyledComponents";

export const BuiltInFunctions = () => {
  const builtInFunctionsCode = `
        <script>
            var liczba = parseInt("12"); // zwraca liczbę całkowitą z tekstu
            var cena = parseFloat("12.22"); // zwraca liczbę zmiennoprzecinkową z tekstu
            var czyLiczba = isNaN("32"); // sprawdza czy podana wartość nie jest liczbą
            var czySkonczona = isFinite(32); // sprawdza czy podana wartość jest skończona
            var wyraz = "Powtórka";
            var zWielkichLiter = wyraz.toUpperCase(); // zamienia wszystkie litery w wyrazie na wielkie
            var zMałychLiter = wyraz.toLowerCase(); // zamienia wszystkie litery w wyraze na małe
            var akapit = document.getElementById("wynik"); // pobranie elementu HTML do skryptu
        </script>
    `;
  return (
    <S.Section id="funkcjeWbudowane">
      <S.SectionTitle>Funkcje wbudowane</S.SectionTitle>
      <S.SectionContent>
        Funkcje wbudowane są zwykłymi funkcjami, z tą różnicą, że my ich już nie
        musimy tworzyć, bo już są wbudowane w język. Kilka ważnych funkcji,
        które na egzaminie mogą się przydać:
      </S.SectionContent>
      <S.SectionImg>
        <pre>
          <code className="language-html">{builtInFunctionsCode}</code>
        </pre>
      </S.SectionImg>
    </S.Section>
  );
};
