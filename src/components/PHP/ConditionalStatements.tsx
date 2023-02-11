import * as S from "../../assets/StyledComponents";
import { useHighlight } from "../../Hooks/useHighlight";

const ConditionalStatements = () => {
  const highlight = useHighlight();
  highlight();

  const ifCode = ` <?php 
    $pierwszaZmienna = 2;
    $drugaZmienna = 3;
    if($pierwszaZmienna < $drugaZmienna) {
        echo "Liczba ".$pierwszaZmienna." jest mniejsza od ".$drugaZmienna;
    } elseif($pierwszaZmienna == $drugaZmienna) {
        echo "Liczby są takie same";
    } else {
        echo "Liczba ".$drugaZmienna." jest mniejsza od ".$pierwszaZmienna;
    }
  ?>`;
  return (
    <S.Section id="instrukcjeWarunkowe">
      <S.SectionTitle>Instrukcje warunkowe</S.SectionTitle>
      <S.SectionContent>
        Instrukcja warunkowa określa, który z fragmentów skryptu zostanie
        wykonany w zależności od spełnienia określonych warunków. W PHP
        instrucją warunkową jest if (ang. jeżeli), a w przypadku nie spełnienia
        warunku else (ang. w przeciwnym razie). Oczywiście instrukcję możemy
        przedłużać o kolejne warunki za pomocą elseif(). Operatory logiczne są
        identyczne jak w JS (==, &&, ||).
      </S.SectionContent>
      <S.SectionCode>
        <pre>
          <code className="language-php">{ifCode}</code>
        </pre>
      </S.SectionCode>
    </S.Section>
  );
};

export default ConditionalStatements;
