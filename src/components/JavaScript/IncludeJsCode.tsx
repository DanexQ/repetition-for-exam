import * as S from "../../assets/StyledComponents";

const IncludeJsCode = () => {
  const innerScript = `
  <!DOCTYPE html>
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
  </html>
  `;
  const outerScript = `
  <!DOCTYPE html>
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
  </html>
  `;

  return (
    <S.Section id="podlaczanie">
      <S.SectionTitle>Podłączenie skryptu</S.SectionTitle>
      <S.SectionContent>
        Aby zadziałał nasz skrypt napisany w języku JavaScript, musimy go
        odpowiednio podłączyć do dokumentu za pomocą znaczników. Jeżeli chcemy
        pisać skrypt w dokumencie:
      </S.SectionContent>
      <S.SectionImg>
        <pre>
          <code className="language-html">{innerScript}</code>
        </pre>
      </S.SectionImg>
      <S.SectionContent>
        Jeżeli chcesz pisać kod w osobnym pliku to musisz podłączyć go w taki
        sposób:
      </S.SectionContent>
      <S.SectionImg>
        <pre>
          <code className="language-html">{outerScript}</code>
        </pre>
      </S.SectionImg>
      <S.SectionContent>
        Atrybut <S.SpanBold>src</S.SpanBold> wskazuje miejsce skryptu w
        zewnętrznym pliku.
      </S.SectionContent>
    </S.Section>
  );
};

export default IncludeJsCode;
