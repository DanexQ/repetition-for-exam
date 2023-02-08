import * as S from "../../assets/StyledComponents";

const ConditionalStatements = () => {
  const code = `
    <script>
        var cenaFarby = 5;
        var dostepnosc = true;

        if(cenaFarby < 10 && dostepnosc == true){
            document.write('Kupuję');
        } else if(dostepnosc == false){
            document.write('Poczekam');
        } else{
            document.write('Nie kupuję');
        }
    </script>
    `;

  return (
    <S.SSection>
      <S.SSectionTitle>Instrukcje warunkowe</S.SSectionTitle>
      <S.SSectionContent>
        Instrukcja warunkowa określa, który z fragmentów skryptu zostanie
        wykonany w zależności od spełnienia określonych warunków. W JavaScripcie
        instrucją warunkową jest{" "}
        <S.SSpanBold>
          if (ang. jeżeli), a w przypadku nie spełnienia warunku else (ang. w
          przeciwnym razie).
        </S.SSpanBold>{" "}
        Oczywiście instrukcję możemy przedłużać o kolejne warunki za pomocą{" "}
        <S.SSpanBold>else if</S.SSpanBold> co będzie ukazane w przykładzie:
      </S.SSectionContent>
      <S.SSectionImg>
        <pre>
          <code className="language-html">{code}</code>
        </pre>
      </S.SSectionImg>
      <S.SSectionContent>
        Szybkie omówienie przykładu: jeżeli cena farby jest mniejsza od 10 i
        jest dostępna to kupuję, w innym wypadku jeżeli nie ma farby to czekam,
        a gdy żadne z tych warunków nie zostanie spełnione to nie kupuję.
      </S.SSectionContent>
    </S.SSection>
  );
};

export default ConditionalStatements;
