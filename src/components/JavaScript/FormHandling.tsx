import * as S from "../../assets/StyledComponents";
import { useHighlight } from "../../Hooks/useHighlight";

const FormHandling = () => {
  const highlight = useHighlight();
  highlight();
  const getValuesCode = ` <body>
    Imię: <input type="text" name="imie" id="imie" /><br/>
    Wiek: <input type="number" name="wiek" id="wiek" /><br/>
    Potwierdź regulamin: <input type="checkbox" name="potwierdz" id="potwierdz" /><br/>
    <button type="button" onclick="sprawdzDane()">Sprawdz dane</button>

    <script>
      function sprawdzDane() {
        // document.getElementById("id");
        // I sposób | przypisanie najpierw elementu, a później wartości 
        const elementImie = document.getElementById("imie");
        var imie = elementImie.value;

        // II sposób | pobranie wartości od razu
        var wiek = document.getElementById("wiek").value;
        var potwierdzenie = document.getElementById("potwierdzenie").checked;
      }
    </script>
  </body>`;
  return (
    <S.Section id="pobieranieWartosci">
      <S.SectionTitle>Obsługa pól edycyjnych</S.SectionTitle>
      <S.SectionContent>
        Obsługa pól edycyjnych jest bardzo prosta. Pobieramy elementy, a
        następnie pobieramy z nich dane i możemy robić z nimi co chcemy.
        Zapamiętaj, że elementom, które w późniejszym czasie będziesz chcieł
        pobrać, musisz nadać identyfikator (id).
      </S.SectionContent>
      <S.SectionCode>
        <pre>
          <code className="language-html">{getValuesCode}</code>
        </pre>
      </S.SectionCode>
    </S.Section>
  );
};

export default FormHandling;
