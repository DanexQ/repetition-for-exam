import * as S from "../../assets/StyledComponents";
import { useHighlight } from "../../Hooks/useHighlight";

const TableConnection = () => {
  const highlight = useHighlight();
  highlight();
  const innerJoinCode = `SELECT * FROM filmy INNER JOIN postac ON filmy.film_id=postac.film_id`;
  const outerJoinCode = `  // LEFT OUTER JOIN - pozwala zwrócić wszystkie filmy i odpowiadające im wartości z tabeli postac
  // jezeli tabela postac nie ma odpowiednich wartosci to zostanie przypisane NULL.    
  SELECT * FROM filmy OUTER JOIN postac ON filmy.film_id=postac.film_id`;
  return (
    <S.Section id="polaczanietabel">
      <S.SectionTitle>Łączenie tabel</S.SectionTitle>
      <S.SectionContent>
        Łączenie tabel umożliwia odczytywanie danych z wielu tabel jednocześnie.
        Tabele zostają połączone pomiędzy kluczem podstawowym jednej tabeli, a
        kluczem obcym drugiej. Połączenia tabel dzielą się na wewnętrzne i
        zewnętrzne.
      </S.SectionContent>
      <S.SubTitle>Połączenia wewnętrzne - INNER JOIN</S.SubTitle>
      <S.SectionContent>
        Połączenia wewnętrzne są realizowane przy pomocy instrukcji INNER JOIN,
        która wybiera te wiersze, dla których warunek złączenia jest spełniony.
        Dodatkowo żadna kolumna nie może posiadać NULL.
      </S.SectionContent>
      <S.SectionCode>
        <pre>
          <code className="language-sql">{innerJoinCode}</code>
        </pre>
      </S.SectionCode>
      <S.SectionContent>
        Połączenia zewnętrzne są realizowane przy pomocy instrukcji OUTER JOIN,
        ale posiada ona 3 różne metody.
      </S.SectionContent>
      <S.SectionCode>
        <pre>
          <code className="language-sql">{outerJoinCode}</code>
        </pre>
      </S.SectionCode>
    </S.Section>
  );
};

export default TableConnection;
