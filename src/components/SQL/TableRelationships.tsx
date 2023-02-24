import * as S from "../../assets/StyledComponents";
import { useHighlight } from "../../Hooks/useHighlight";
const TableRelationship = () => {
  const highlight = useHighlight();
  highlight();
  const foreignKeyCode = `  ALTER TABLE klasa ADD FOREIGN KEY (id_uczen) REFERENCES uczniowie(id_uczen);`;
  const foreignKeyCode2 = `   CREATE TABLE Książki{
    id_książki int AUTO_INCREMENT NOT NULL PRIMARY KEY,
    tytul varchar(100) NOT NULL,
    id_autora int REFERENCES Autor (id_autora),
  }`;
  return (
    <S.Section id="cotojestsql">
      <S.SectionTitle>Relacje w tabelach</S.SectionTitle>
      <S.SectionContent>
        Więzy integralnosci stanowią system reguł zapewniąjacy poprawność
        zwiazków między rekordami tabel powiazanych relacją i uniemożliwiajacy
        przypadkowe usunięcie lub zmianę powiązanych danych. Wynikają z
        konieczności zapewnienia w bazie spójności danych. Sprawdzanie spójności
        w bazie danych odbywa się po jawnym zdefiniowaniu klucza obcego.
      </S.SectionContent>
      <S.SubTitle>Dodawanie klucza obcego</S.SubTitle>
      <S.SectionContent>
        Dodawanie klucza obcego do intniejącej tabeli powinno się odbyć w
        przedstawiony sposób:
      </S.SectionContent>
      <S.SectionCode>
        <pre>
          <code className="language-sql">{foreignKeyCode}</code>
        </pre>
      </S.SectionCode>
      <S.SectionContent>
        Natomiast dodawanie klucza obcego podczas tworzenia tabeli:
      </S.SectionContent>
      <S.SectionCode>
        <pre>
          <code className="language-sql">{foreignKeyCode2}</code>
        </pre>
      </S.SectionCode>
    </S.Section>
  );
};

export default TableRelationship;
