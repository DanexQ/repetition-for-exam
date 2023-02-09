import * as S from "../../assets/StyledComponents";

const Events = () => {
  const eventsCode = `
    <body>
        <button onclick="nacisnij()">Naciśnij mnie</button>
        <div id="blok" onmouseover="zmienKolor('red')">Zmiana koloru po najechaniu</div>
        <script>
            function nacisnij() {
                document.getElementById("blok").innerHTML = "Naciśnięto przycisk";
            }
            function zmienKolor(kolor){
                document.getElementById("blok").style.backgroundColor = kolor;
            }
        </script>
    </body>
    `;
  return (
    <S.Section id="zdarzenia">
      <S.SectionTitle>Zdarzenia w JavaScripcie</S.SectionTitle>
      <S.SectionContent>
        Zdarzenia w JavaScripcie są bardzo ważne dla funkcjonalności strony.
        Dzięki nim możemy np. pokazać obrazek gdy naciśniemy na przycisk.
        Rodzajów zdarzeń jest wiele, ale najważniejszą z nich jest{" "}
        <S.SpanBold>click i onmouseover</S.SpanBold>. Oto sposoby na tworzenie
        zdarzeń, obie są poprawne:
      </S.SectionContent>
      <S.SectionImg>
        <pre>
          <code className="language-html">{eventsCode}</code>
        </pre>
      </S.SectionImg>
    </S.Section>
  );
};

export default Events;
