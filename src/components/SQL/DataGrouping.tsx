import * as S from "../../assets/StyledComponents";
import { useHighlight } from "../../Hooks/useHighlight";

const DataGrouping = () => {
  const groupByCode = `    // Zapytanie ma ukazywać ile książek napisał dany autor. 
    SELECT autor, COUNT(autor) From Książki GROUP BY autor;`;

  const havingCode = `    // Zapytanie ma ukazywać ile książek napisał dany autor, którego nazwisko rozpoczyna się na literę A. 
    SELECT autor, COUNT(autor) From Książki GROUP BY autor HAVING autor="A%";
    // HAVING autor="A%" - szuka znaku "A" na początku
    // HAVING autor="%A%" - szuka znaku "A" w środku 
    // HAVING autor="%A" - szuka znaku "A" na końcu `;
  const highlight = useHighlight();
  highlight();

  return (
    <S.Section id="grupowanie">
      <S.SectionTitle>Grupowanie danych</S.SectionTitle>
      <S.SectionContent>
        Instrukcja <S.SpanBold>GROUP BY</S.SpanBold> grupuje wiersze, które mają
        te same wartości, w wiersze podsumowania. Bardzo często jest używany z
        funkcjami agregującymi.
      </S.SectionContent>
      <S.SectionCode>
        <pre>
          <code className="language-sql">{groupByCode}</code>
        </pre>
      </S.SectionCode>
      <S.SectionTitle>Klauzula HAVING</S.SectionTitle>
      <S.SectionContent>
        Klauzula <S.SpanBold>HAVING</S.SpanBold> została dodana do języka SQL,
        ponieważ słowa kluczowego WHERE nie można używać z funkcjami
        agregującymi.
      </S.SectionContent>
      <S.SectionCode>
        <pre>
          <code className="language-sql">{havingCode}</code>
        </pre>
      </S.SectionCode>
    </S.Section>
  );
};

export default DataGrouping;
