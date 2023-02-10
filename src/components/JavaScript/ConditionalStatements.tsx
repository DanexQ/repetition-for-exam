import * as S from "../../assets/StyledComponents";
import { useHighlight } from "../../Hooks/useHighlight";

const ConditionalStatements = () => {
  const highlight = useHighlight();
  highlight();

  const code = `  <script>
    var cenaFarby = 5;
    var dostepnosc = true;

    if(cenaFarby < 10 && dostepnosc == true){
      document.write("Kupuję");
    } else if(dostepnosc == false){
      document.write("Poczekam");
    } else {
      document.write("Nie kupuję");
    }
  </script>`;

  return (
    <S.Section id="instrukcjeWarunkowe">
      <S.SectionTitle>Instrukcje warunkowe</S.SectionTitle>
      <S.SectionContent>
        Instrukcje warunkowe określają, który z fragmentów skryptu zostanie
        wykonany w zależności od spełnienia określonych warunków. W JavaScripcie
        instrucją warunkową jest <S.SpanBold>if (ang. jeżeli)</S.SpanBold>, a w
        przypadku nie spełnienia warunku{" "}
        <S.SpanBold>else (ang. w przeciwnym razie)</S.SpanBold>. Oczywiście
        instrukcję możemy przedłużać o kolejne warunki za pomocą{" "}
        <S.SpanBold>else if</S.SpanBold> co będzie ukazane w przykładzie:
      </S.SectionContent>
      <S.SectionCode>
        <pre>
          <code className="language-html">{code}</code>
        </pre>
      </S.SectionCode>
      <S.SectionContent>
        Szybkie omówienie przykładu: jeżeli cena farby jest mniejsza niż 10 i
        jest dostępna to kupuję, w przeciwnym razie jeżeli nie ma farby to
        czekam, a gdy żadne z powyższych warunków nie zostanie spełnione to nie
        kupuję jej.
      </S.SectionContent>
    </S.Section>
  );
};

export default ConditionalStatements;
