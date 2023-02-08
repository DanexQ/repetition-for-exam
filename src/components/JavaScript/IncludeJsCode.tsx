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
    <S.SSection>
      <S.SSectionTitle>Jak podłączyć skrypt do dokumentu HTML?</S.SSectionTitle>
      <S.SSectionContent>
        Aby zadziałał nasz skrypt napisany w języku JavaScript, musimy go
        odpowiednio podłączyć do dokumentu za pomocą znaczników. Jeżeli chcemy
        pisać skrypt w dokumencie:
      </S.SSectionContent>
      <S.SSectionImg>
        <pre>
          <code className="language-html">{innerScript}</code>
        </pre>
      </S.SSectionImg>
      <S.SSectionContent>
        Jeżeli chcesz pisać kod w osobnym pliku to musisz podłączyć plik w taki
        sposób:
      </S.SSectionContent>
      <S.SSectionImg>
        <pre>
          <code className="language-html">{outerScript}</code>
        </pre>
      </S.SSectionImg>
      <S.SSectionContent>
        Atrybut <S.SSpanBold>src</S.SSpanBold> wskazuje miejsce skryptu w
        zewnętrznym pliku.
      </S.SSectionContent>
    </S.SSection>
  );
};

export default IncludeJsCode;
