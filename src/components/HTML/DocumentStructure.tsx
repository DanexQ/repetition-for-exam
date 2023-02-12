import * as S from "../../assets/StyledComponents";
import { useHighlight } from "../../Hooks/useHighlight";

const DocumentStructure = () => {
  const highlight = useHighlight();
  highlight();

  const docCode = ` <!DOCTYPE html>
  <html lang="pl-PL">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title>Document</title>
    </head>
    <body>
    </body>
  </html>`;

  return (
    <S.Section id="strukturadokumentu">
      <S.SectionTitle>Prawidłowa struktura dokumentu</S.SectionTitle>
      <S.SectionContent>
        Prawidłowa struktura dokumentu HTML na egzaminie wygląda następująco.Nie
        trzeba tego całego kodu znać na pamięć, ponieważ Visual Studio Code ma
        na szybki skrót na to: wpisanie w pustym pliku z rozszerzeniem .html{" "}
        <S.SpanBold>!</S.SpanBold> i naciśnięcie enter. Zauważ, że fragment{" "}
        <S.SpanBold>{"<!DOCTYPE html>"}</S.SpanBold> oznacza, że dokument jest
        zapisany w HTML5. Druga linijka deklaruje językiem witryny jest język
        polski <S.SpanBold>(pl-PL)</S.SpanBold>. Te dwie rzeczy są naprawdę
        ważne, bo to są łatwe punkty na egzaminie.
      </S.SectionContent>
      <S.SectionCode>
        <pre>
          <code className="language-html">{docCode}</code>
        </pre>
      </S.SectionCode>
    </S.Section>
  );
};

export default DocumentStructure;
