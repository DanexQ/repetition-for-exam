import * as S from "../../assets/StyledComponents";
import { useHighlight } from "../../Hooks/useHighlight";

const MostImportant = () => {
  const highlight = useHighlight();
  highlight();

  const code = `<body>
        <h(1-6)></h(1-6)> // nagłówki stopnia (1 do 6)
        <ul></ul> // lista wypunktowana (unordered list)
        <ol></ol> // lista uporządkowana (ordered list)
        <li></li> // przedmiot listy (list item)
        <p></p> // akapit (paragraph)
        <a href=""></a> // odnośnik (anchor)
        <img src="źródłoZdjęcia" alt="tesktAlternatywny"> // zdjęcie(image) | nie zamyka się znacznika
        <hr/> // pozioma kreska (horizontal)
        <table>
            <tr> // wiersz (table row)
                <th>Nagłówek kolumny 1(table header)</th>
                <th>Nagłówek kolumny 2(table header)</th>
            </tr>
            <tr>
                <td colspan="2">Kontynuacja kolumny (table data)</td>
            </tr>
            <tr rowspan="2"><td>Kontynuacja kolumny (table data)</td></tr>
            <tr></tr>
        </table>
        // formularz 
            // action odwołuje się do miejsca kodu PHP, puste oznacza ten sam plik
            // method oznacza czy przesyłane dane z formularza są szyfrowane POST lub nie GET
        <form action="" method="POST lub GET">  
            // inputów się nie zamyka
            <input type="text" name="login"> // pole edycyjne typu teksowego
            <input type="password" name="haslo"> // pole edycyjne do wpisywania hasła
            <input type="number" name="wiek"> // pole edycyjne typu liczbowego
            <input type="checkbox" name="potwierdzenie" value="Potwierdz regulamin"> // pole edycyjne typu checkbox
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
    </S.Section>
  );
};

export default MostImportant;
