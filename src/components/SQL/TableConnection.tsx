import * as S from "../../assets/StyledComponents";
import { useHighlight } from "../../Hooks/useHighlight";

const TableConnection = () => {
  const highlight = useHighlight();
  highlight();
  const innerJoinCode = `SELECT * FROM filmy INNER JOIN postac ON filmy.film_id=postac.film_id`;
  const leftOuterJoinCode = `  // LEFT OUTER JOIN -  zwraca wszystkie wiersze z lewej tabeltki i dodatkowo wiersze,
  // które mają uzupełnienie z prawej tabelki.   
  SELECT * FROM filmy LEFT OUTER JOIN postac ON filmy.film_id = postac.film_id`;
  const rightOuterJoinCode = `  // RIGHT OUTER JOIN - zwraca wszystkie wiersze z prawej tabelki i dodatkowo wiersze, 
  // które mają uzupełnienie z lewej tabelki.    
  SELECT * FROM filmy RIGHT OUTER JOIN postac ON filmy.film_id = postac.film_id`;
  const fullOuterJoinCode = `  // FULL OUTER JOIN - zwraca wszystkie wiersze z obu tabelek
  SELECT * FROM filmy FULL OUTER JOIN postac ON filmy.film_id = postac.film_id`;
  const whereCode = `
  SELECT * FROM filmy, postac WHERE filmy.film_id = postac.film_id;
  `;
  return (
    <S.Section id="laczenietabel">
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
          <code className="language-sql">{leftOuterJoinCode}</code>
        </pre>
      </S.SectionCode>
      <S.SectionCode>
        <pre>
          <code className="language-sql">{rightOuterJoinCode}</code>
        </pre>
      </S.SectionCode>
      <S.SectionCode>
        <pre>
          <code className="language-sql">{fullOuterJoinCode}</code>
        </pre>
      </S.SectionCode>
      <S.SubTitle>Za pomocą WHERE</S.SubTitle>
      <S.SectionContent>
        Łączenie tabelek za pomocą <S.SpanBold>WHERE</S.SpanBold> ma te same
        działanie co FULL OUTER JOIN.
      </S.SectionContent>
      <S.SectionCode>
        <pre>
          <code className="language-sql">{whereCode}</code>
        </pre>
      </S.SectionCode>
    </S.Section>
  );
};

export default TableConnection;
