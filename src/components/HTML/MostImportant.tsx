import * as S from "../../assets/StyledComponents";
import { useHighlight } from "../../Hooks/useHighlight";

const MostImportant = () => {
  const highlight = useHighlight();
  highlight();

  const code = `  <body>
    <h(1-6)></h(1-6)> // nagłówki stopnia (1 do 6)
    <ul></ul> // lista wypunktowana (unordered list)
    <ol></ol> // lista uporządkowana (ordered list)
    <li></li> // element listy (list item)
    <p></p> // akapit/paragraf (paragraph)
    <a href=""></a> // odnośnik (anchor)
    <img src="źródłoZdjęcia" alt="tesktAlternatywny"> // zdjęcie(image) | nie zamyka się znacznika
    <hr/> // pozioma kreska (horizontal)
  </body>`;

  const tableCode = `  <body>
    <table> // tabela
      <tr> // wiersz (table row)
        <th>Nagłówek kolumny 1(table header)</th>
        <th>Nagłówek kolumny 2(table header)</th>
      </tr>
      <tr>
        <td colspan="2">Połączone dwie kolumny</td>
      </tr>
      <tr>
        <td rowspan="2">Połączone dwa wiersze</td>
        <td>Kolumna</td>
      </tr>
      <tr>
        <td>Kolumna</td>
      </tr>
    </table>
  </body>`;

  const formCode = `  <body>
    // FORMULARZ 
        // action odwołuje się do miejsca kodu PHP, puste oznacza ten sam plik
        // method oznacza czy przesyłane dane z formularza są szyfrowane POST lub nie GET
    <form action="" method="POST lub GET">  
        // inputów się nie zamyka
        <label for="login">Login</label> // etykieta pola edycyjnego - warto zastosować ten znacznik
                                                                        przed inputem w formularzach
        <input type="text" name="login"> // pole edycyjne typu teksowego
        <input type="password" name="haslo"> // pole edycyjne do wpisywania hasła
        <input type="number" name="wiek"> // pole edycyjne typu numerycznego
        <input type="checkbox" name="potwierdzenie" value="Potwierdz regulamin"> // Pole wyboru
        <input type="radio" name="ulubionyKolor" value="niebieski"> // pole edycyjne typu radio 
        <input type="radio" name="ulubionyKolor" value="czerwony"> // ważne żeby było wiecej niż 1 radio
        <button type="submit">Wyślij</button> // przycisk wysyłający formularz
        <button type="reset">Reset</button> // przycisk resetujący formularz
    </form>
  </body>`;
  return (
    <S.Section id="najwazniejsze">
      <S.SectionTitle>Najważniejsze znaczniki</S.SectionTitle>
      <S.SectionContent>
        Osobom, które nie znają języka angielskiego trudniej będzie zrozumieć co
        kryje się za nazwami znaczników. Jednak wszystkiego da się nauczyć i
        niżej znajdują się te najpopularniejsze.
      </S.SectionContent>
      <S.SectionCode>
        <pre>
          <code className="language-html">{code}</code>
        </pre>
      </S.SectionCode>
      <S.SectionTitle>Tabela</S.SectionTitle>
      <S.SectionCode>
        <pre>
          <code className="language-html">{tableCode}</code>
        </pre>
      </S.SectionCode>
      <S.SectionTitle>Formularz</S.SectionTitle>
      <S.SectionCode>
        <pre>
          <code className="language-html">{formCode}</code>
        </pre>
      </S.SectionCode>
    </S.Section>
  );
};

export default MostImportant;
