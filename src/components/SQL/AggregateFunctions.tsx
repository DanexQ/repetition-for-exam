import * as S from "../../assets/StyledComponents";
import { useHighlight } from "../../Hooks/useHighlight";

const AggregateFunctions = () => {
  const highlight = useHighlight();
  highlight();

  const avgFunction = `    // Utwórz zapytanie, które liczy w tabeli samochody średnią arytmetyczną roczników samochodów,
    // których marką jest opel.
    SELECT AVG(rocznik) FROM "samochody" WHERE marka='opel';`;
  const minFunction = `    // Utwórz zapytanie, wybierające najtańszy samochód w tabeli samochody, których marką jest BMW.
    SELECT MIN(cena) FROM "samochody" WHERE marka='BMW';`;
  const maxFunction = `    // Utwórz zapytanie, wybierające najdroższy produkt w tabeli napoje.
    SELECT MAX(cena) FROM "napoje";`;
  const countFunction = `    // Utwórz zapytanie, liczące liczbę wierszy w tabeli dane.
    SELECT COUNT(*) as "Ilość" FROM "dane"; 
    // as "nazwa_kolumny" umożliwia nadanie nazwy kolumnie, inaczej będzie miała nazwę "COUNT(*)"`;
  const sumFunction = `    // Utwórz zapytanie, które wartość wszystkich samochodów w komisie w tabeli komis.
    SELECT SUM(cena) as "Suma" FROM "komis";
    // as "nazwa_kolumny" umożliwia nadanie nazwy kolumnie, inaczej będzie miała nazwę "SUM(cena)"`;
  return (
    <S.Section id="agregujace">
      <S.SectionTitle>Funkcje agregujące</S.SectionTitle>
      <S.SectionContent>
        Funkcja agregująca w języku SQL wykonuje obliczenia na wielu wartościach
        i zwraca pojedynczą wartość. SQL posiada wiele takich funkcji
        agregujących, poniżej znajdują się przykłady funkcji i praktyczne
        użycie:
      </S.SectionContent>
      <S.SubTitle>AVG() - średnia</S.SubTitle>
      <S.SectionContent>
        Funkcja AVG() oblicza średnią arytmetyczną ze wszystkich danych
        określonej kolumny.
      </S.SectionContent>
      <S.SectionCode>
        <pre>
          <code className="language-sql">{avgFunction}</code>
        </pre>
      </S.SectionCode>
      <S.SubTitle>MIN() - minimum</S.SubTitle>
      <S.SectionContent>
        Funkcja MIN() wybiera z podanej grupy najniższą wartość.
      </S.SectionContent>
      <S.SectionCode>
        <pre>
          <code className="language-sql">{minFunction}</code>
        </pre>
      </S.SectionCode>
      <S.SubTitle>MAX() - maksimum</S.SubTitle>
      <S.SectionContent>
        Funkcja MAX() wybiera z podanej grupy najwyższą wartość.
      </S.SectionContent>
      <S.SectionCode>
        <pre>
          <code className="language-sql">{maxFunction}</code>
        </pre>
      </S.SectionCode>
      <S.SubTitle>COUNT() - zliczanie</S.SubTitle>
      <S.SectionContent>
        Funkcja COUNT() zlicza liczbę wierszy, które zostały zwrócone przez
        zapytanie. * - pozwala na zliczenie wszystkich wierszy wraz z pustymi,
        gdy podamy konkretną kolumnę np. COUNT(marka) to te puste zostaną
        pominięte.
      </S.SectionContent>
      <S.SectionCode>
        <pre>
          <code className="language-sql">{countFunction}</code>
        </pre>
      </S.SectionCode>
      <S.SubTitle>SUM() - sumowanie</S.SubTitle>
      <S.SectionContent>
        Funkcja SUM() pozwala dodać do siebie wszystkie wartości z kolumny.
      </S.SectionContent>
      <S.SectionCode>
        <pre>
          <code className="language-sql">{sumFunction}</code>
        </pre>
      </S.SectionCode>
      <S.SubTitle>Dodatkowe informacje</S.SubTitle>
      <S.SectionContent>
        Wszystkie funkcje agregujące możesz używać w wyrażeniach np. odejmować
        wartość maksymalną lub minimalną. Dodatkowo instrukcja{" "}
        <S.SpanBold>DISTINCT</S.SpanBold> też jest dozwolona wewnątrz funkcji.
      </S.SectionContent>
    </S.Section>
  );
};

export default AggregateFunctions;
