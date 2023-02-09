import * as S from "../../assets/StyledComponents";

const FormHandling = () => {
  const getValuesCode = `
    <body>
        <form>
            <label for="imie">Imię:</label>
            <input type="text" name="imie" id="imie" /><br/>
            <label for="wiek">Wiek:</label>
            <input type="number" name="wiek" id="wiek" /><br/>
            <label for="potwierdz">Potwierz regulamin:</label>
            <input type="checkbox" name="potwierdz" id="potwierdz" /><br/>
            <button type="button" onclick="sprawdzDane()">Sprawdz dane</button>
        </form>
        <script>
            function sprawdzDane() {
                // document.getElementById("id");
                // I sposób | pobranie elementu i wartości osobno
                const elementImie = document.getElementById("imie");
                var imie = elementImie.value;
                // II sposób | pobranie danych od razu
                var wiek = document.getElementById("wiek").value;
                var potwierdzenie = document.getElementById("potwierdzenie").checked;
            }
        </script>
    </body>
    `;
  return (
    <S.Section id="pobieranieWartosci">
      <S.SectionTitle>Obsługa inputów</S.SectionTitle>
      <S.SectionContent>
        Obsługa formularzy jest bardzo prosta. Pobieramy elementy, a następnie
        pobieramy z nich dane i możemy robić z nimi co chcemy. Zapamiętaj, że
        elementom, które w późniejszym czasie będziesz chcieł pobrać, musisz
        nadać identyfikator (id).
      </S.SectionContent>
      <S.SectionImg>
        <pre>
          <code className="language-html">{getValuesCode}</code>
        </pre>
      </S.SectionImg>
    </S.Section>
  );
};

export default FormHandling;
