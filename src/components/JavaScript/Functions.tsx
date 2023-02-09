import * as S from "../../assets/StyledComponents";

const Functions = () => {
  const functionCode = `
    <script>
        // funkcja strzałkowa
        const wyswietlTekst = () => {
            document.getElementById("akapit").innerHTML = "Nowy tekst";
        }
        wyswietlTekst();

        // zwykła funkcja
        function suma(a, b) {
            return a + b;
        }
        var a = 5;
        var b = 6;
        var sumaLiczb = suma(a, b);
    </script>
    `;
  return (
    <S.Section id="funkcje">
      <S.SectionTitle>Funkcje</S.SectionTitle>
      <S.SectionContent>
        Funkcja to fragment kodu naszego skryptu, który się powtarza i można
        wywołać go wielokrotnie. Funkcje tworzymy na dwa sposoby. Wszystkie
        funkcje mogą zostać wywołane za pomocą zdarzeń! Oto przykład funkcji
        zwracającej sumę liczb oraz funkcji wyświetlającą tekst w pobranym
        akapicie.
      </S.SectionContent>
      <S.SectionImg>
        <pre>
          <code className="language-html">{functionCode}</code>
        </pre>
      </S.SectionImg>
    </S.Section>
  );
};

export default Functions;
