import * as S from "../../assets/StyledComponents";
import { useHighlight } from "../../Hooks/useHighlight";

const IncludePHPCode = () => {
  const highlight = useHighlight();
  highlight();

  const phpCode = `  <!DOCTYPE html>
  <html lang="pl-PL">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
     <title>Document</title>
    </head>
    <body>
      <?php 
      // kod php
        $zmienna = 1;
      /?>
      <section id="baner">Tytuł strony</section>
      <?php 
      // następny kod php
        echo zmienna;
      /?>
    </body>
  </html>`;

  return (
    <S.Section id="podlaczanie">
      <S.SectionTitle>PHP w dokumencie</S.SectionTitle>
      <S.SectionContent>
        Muszą być spełnione dwa warunki, aby mógł zadziałać kod PHP.
        Najprostszym sposobem jest pisanie całego HTML w tym samym pliku co kod
        PHP, ale plik musi być z rozszerzeniem <S.SpanBold>.php</S.SpanBold> -
        pierwszy warunek. Drugi to pisanie kodu w znacznikach {"<?php ?>"}.
        Pamiętaj, że ten kod może być rozproszony po całym pliku i nie musi być
        tylko w jednym miejscu.
      </S.SectionContent>
      <S.SectionCode>
        <pre>
          <code className="language-php">{phpCode}</code>
        </pre>
      </S.SectionCode>
    </S.Section>
  );
};

export default IncludePHPCode;
