import * as S from "../../assets/StyledComponents";
import { useHighlight } from "../../Hooks/useHighlight";

const IncludeCSS = () => {
  const highlight = useHighlight();
  highlight();

  const includeCode = ` <!DOCTYPE html>
    <html lang="pl-PL">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>TYTUŁ STRONY</title>
        <link rel="stylesheet" href="źródłoCSS.css"> // podłączenie css
      </head>
      <body>
      </body>
    </html>`;

  return (
    <S.Section id="podlaczenie">
      <S.SectionTitle>Podłączanie CSS</S.SectionTitle>
      <S.SectionContent>
        Podłączenie stylu CSS do pliku HTML na egzaminie powinno odbywać się
        tylko na jeden sposób, dlatego że trzeba utworzyć osobny, zewnętrzny
        plik i w nim stylować stronę. Nie możesz tego zrobić w sposób
        wewnętrzny(za pomocą znaczników {"<style></style>"}), bądź lokalnie(w
        znacznikach elementów).
      </S.SectionContent>
      <S.SectionCode>
        <pre>
          <code className="language-html">{includeCode}</code>
        </pre>
      </S.SectionCode>
    </S.Section>
  );
};

export default IncludeCSS;
