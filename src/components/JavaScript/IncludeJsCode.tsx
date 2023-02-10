import * as S from "../../assets/StyledComponents";
import { useHighlight } from "../../Hooks/useHighlight";

const IncludeJsCode = () => {
  const highlight = useHighlight();
  highlight();
  const innerScript = ` <!DOCTYPE html>
  <html lang="pl-PL">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title>Document</title>
    </head>
    <body>
      <script>
        document.write("Prawidłowo podłączony skrypt);      
      </script>
    </body>
  </html>`;

  const outerScript = ` <!DOCTYPE html>
  <html lang="pl-PL">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
     <title>Document</title>
    </head>
    <body>
      <script src="skrypt.js"></script>
    </body>
  </html>`;

  return (
    <S.Section id="podlaczanie">
      <S.SectionTitle>Podłączenie skryptu</S.SectionTitle>
      <S.SectionContent>
        Skrypt napisany w języku JavaScript, musi być odpowiednio podłączony do
        dokumentu za pomocą znaczników{" "}
        <S.SpanBold>{`<script></script>`}</S.SpanBold>. Skrypt podłączysz na dwa
        sposoby w zależności gdzie chcesz go napisać. Jeżeli chcesz pisać skrypt
        w dokumencie:
      </S.SectionContent>
      <S.SectionCode>
        <pre>
          <code className="language-html">{innerScript}</code>
        </pre>
      </S.SectionCode>
      <S.SectionContent>
        Jeżeli chcesz pisać kod w osobnym pliku:
      </S.SectionContent>
      <S.SectionCode>
        <pre>
          <code className="language-html">{outerScript}</code>
        </pre>
      </S.SectionCode>
      <S.SectionContent>
        Atrybut <S.SpanBold>src</S.SpanBold> wskazuje miejsce skryptu w
        zewnętrznym pliku.
      </S.SectionContent>
    </S.Section>
  );
};

export default IncludeJsCode;
