import * as S from "../../assets/StyledComponents";
import { useHighlight } from "../../Hooks/useHighlight";

const Functions = () => {
  const highlight = useHighlight();
  highlight();
  const functionCode = `  <script>
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
  </script>`;

  return (
    <S.Section id="funkcje">
      <S.SectionTitle>Funkcje</S.SectionTitle>
      <S.SectionContent>
        Funkcja to fragment kodu naszego skryptu, który się powtarza i można
        wywołać go wielokrotnie. Funkcje tworzymy na dwa sposoby. Wszystkie
        funkcje mogą zostać wywołane za pomocą zdarzeń! Oto przykład funkcji
        zwracającej sumę liczb oraz funkcji wyświetlającej tekst w pobranym
        akapicie.
      </S.SectionContent>
      <S.SectionCode>
        <pre>
          <code className="language-html">{functionCode}</code>
        </pre>
      </S.SectionCode>
    </S.Section>
  );
};

export default Functions;
