import * as S from "../../assets/StyledComponents";
import { useHighlight } from "../../Hooks/useHighlight";

const Selectors = () => {
  const highlight = useHighlight();
  highlight();

  const typeSelector = `  // Plik CSS zawiera formatowanie: 
  // Obrazu: wysokość 350 px
  // Obu przycisków: marginesy zewnętrzne 10 px, wewnętrzne 5 px, kolor tła #2F180C, kolor czcionki khaki  

  img{
    height: 350px;              // wysokość
  }
  
  button{
    margin: 10px;               // marginesy zewnętrzne
    padding: 5px;               // marginesy wewnętrzne
    background-color: #2F180C,  // kolor tła
    color: khaki;               // kolor czcionki
  }`;

  const idSelector = `  // Plik CSS zawiera formatowanie: 
  // Panelu lewego: szerokość 60%
  // Panelu prawego: rozmiar czcionki 150%, marginesy wewnętrzne 70 px

  #lewyPanel{
    width: 60%;         // szerokość
  }
  
  #prawyPanel{
    font-size: 150%;    // rozmiar czcionki
    padding: 70px;      // marginesy wewnętrzne
  }`;

  const psedoClassSelector = `  // Cechy formatowania CSS:
  // Po najechaniu na przycisk w wizytówce jego tło zamienia się na #004c40

  #przyciskWizytowka{
    background-color: #003d33;  // kolor tła
    color: white;               // kolor czcionki
    width: 100%;                // szerokość
    height: 30px;                // wysokość
  }
  
  #przyciskWizytowka:hover{     // po naciśnięciu elementu to styl zmieni się na podany 
    background-color: #004c40;  // zmiana koloru tła
  }
  `;

  const descendentSelector = `  // Cechy formatowania CSS:
  // Dla przycisku w wizytówce: kolor tła #003d33, biały kolor czcionki, szerokość 100%,
  //                          wysokość 30 px, bez obramowania
  
  #wizytowka button {
    background-color: #003d33;
    color: white;
    width: 100%;
    height: 30px;
    border: none;
  }
  `;

  const classSelector = `  // Cechy formatowania CSS
  // Dla pojedynczego bloku z informacją o drużynach: biały kolor czcionki, wyrównanie tekstu do środka,
  // szerokość 170 px, marginesy zewnętrzne 5 px, obramowanie: 1 px, linia ciągła, kolor biały,
  // zaokrąglenie rogów obramowania 15 px
  
  .infoDruzyna {
    color: white;
    text-align:center;
    width:170px;
    margin: 5px;
    border: 1px solid white;
    border-radius: 15px;
  }
  `;

  return (
    <S.Section id="selektory">
      <S.SectionTitle>Selektory</S.SectionTitle>
      <S.SectionContent>
        CSS posiada wiele rodzajów selektorów, ale na egzaminie najważniejszymi
        jest kilka z nich. Poniżej znajdują się różne selektory wraz z ich
        użyciem na egzaminie.
      </S.SectionContent>
      <S.SectionContent>
        <S.SpanBold>Selektor typu</S.SpanBold> styluje wszystkie elementy danego
        typu(znacznika) w dokumencie HTML.
      </S.SectionContent>
      <S.SectionCode>
        <pre>
          <code className="language-css">{typeSelector}</code>
        </pre>
      </S.SectionCode>
      <S.SectionContent>
        <S.SpanBold>Selektor klasy</S.SpanBold> styluje elementy z określonym
        atrybutem klasy.
      </S.SectionContent>
      <S.SectionCode>
        <pre>
          <code className="language-css">{classSelector}</code>
        </pre>
      </S.SectionCode>
      <S.SectionContent>
        <S.SpanBold>Selektor identyfikatora</S.SpanBold> styluje element, który
        posiada odpowiednie id, które może być użyte tylko raz na całej stronie.
      </S.SectionContent>
      <S.SectionCode>
        <pre>
          <code className="language-css">{idSelector}</code>
        </pre>
      </S.SectionCode>
      <S.SectionContent>
        <S.SpanBold>Pseudo klasy</S.SpanBold> to słowa kluczowe dodane do
        selektora, które określa specjalny stan wybranych elementów. Przykładem
        może być <S.SpanBold>:hover</S.SpanBold>, który oznacza, że jak osoba
        najedzie kursorem na dany element to styl się zmieni,{" "}
        <S.SpanBold>:visited</S.SpanBold> oznacza odwiedzony link, a{" "}
        <S.SpanBold>:active</S.SpanBold> naciśnięcie elementu.
      </S.SectionContent>
      <S.SectionCode>
        <pre>
          <code className="language-css">{psedoClassSelector}</code>
        </pre>
      </S.SectionCode>
      <S.SectionContent>
        <S.SpanBold>Selektor potomka</S.SpanBold> styluje wszystkie elementy,
        które są potomkami określonego elementu.
      </S.SectionContent>
      <S.SectionCode>
        <pre>
          <code className="language-css">{descendentSelector}</code>
        </pre>
      </S.SectionCode>
    </S.Section>
  );
};

export default Selectors;
