import * as S from "../../assets/StyledComponents";
import { useHighlight } from "../../Hooks/useHighlight";

const Events = () => {
  const highlight = useHighlight();
  highlight();
  const eventsCode = `  <body>
    <button onclick="nacisnij()">Naciśnij mnie</button>
    <div id="blok" onmouseover="zmienKolor('red')">Najedź na mnie</div>
    
    <script>
      function nacisnij() {
        document.getElementById("blok").innerHTML = "Naciśnięto przycisk";
      }

      function zmienKolor(kolor){
          document.getElementById("blok").style.backgroundColor = kolor;
      }
      </script>
  </body>`;

  return (
    <S.Section id="zdarzenia">
      <S.SectionTitle>Zdarzenia w JavaScripcie</S.SectionTitle>
      <S.SectionContent>
        Zdarzenia w JavaScripcie są bardzo ważne dla funkcjonalności strony.
        Dzięki nim możesz np. pokazać obrazek gdy naciśniesz na przycisk.
        Rodzajów zdarzeń jest wiele, ale na egzaminie najważniejszymi z nich
        jest <S.SpanBold>click</S.SpanBold> i{" "}
        <S.SpanBold>onmouseover</S.SpanBold>. Oto sposoby na tworzenie zdarzeń,
        obie są poprawne i nie ma znaczenie, którego użyjesz:
      </S.SectionContent>
      <S.SectionCode>
        <pre>
          <code className="language-html">{eventsCode}</code>
        </pre>
      </S.SectionCode>
    </S.Section>
  );
};

export default Events;
