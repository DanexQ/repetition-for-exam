import * as S from "../../assets/StyledComponents";

const ConditionalStatements = () => {
  const code = `
    <script>
        var cenaFarby = 5;
        var dostepnosc = true;

        if(cenaFarby < 10 && dostepnosc == true){
            document.write("Kupuję");
        } else if(dostepnosc == false){
            document.write("Poczekam");
        } else{
            document.write("Nie kupuję");
        }
    </script>
    `;

  return (
    <S.Section id="instrukcjeWarunkowe">
      <S.SectionTitle>Instrukcje warunkowe</S.SectionTitle>
      <S.SectionContent>
        Instrukcja warunkowa określa, który z fragmentów skryptu zostanie
        wykonany w zależności od spełnienia określonych warunków. W JavaScripcie
        instrucją warunkową jest{" "}
        <S.SpanBold>
          if (ang. jeżeli), a w przypadku nie spełnienia warunku else (ang. w
          przeciwnym razie).
        </S.SpanBold>{" "}
        Oczywiście instrukcję możemy przedłużać o kolejne warunki za pomocą{" "}
        <S.SpanBold>else if</S.SpanBold> co będzie ukazane w przykładzie:
      </S.SectionContent>
      <S.SectionImg>
        <pre>
          <code className="language-html">{code}</code>
        </pre>
      </S.SectionImg>
      <S.SectionContent>
        Szybkie omówienie przykładu: jeżeli cena farby jest mniejsza od 10 i
        jest dostępna to kupuję, w innym wypadku jeżeli nie ma farby to czekam,
        a gdy żadne z tych warunków nie zostanie spełnione to nie kupuję.
      </S.SectionContent>
    </S.Section>
  );
};

export default ConditionalStatements;
