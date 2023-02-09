import * as S from "../../assets/StyledComponents";

const Loops = () => {
  const forCode = `
    <script>
    // for(początkowa wartość; warunek; wyrażenie modyfikujące){}
    for(var i = 0; i < 5; i++){
        document.write("Liczba wykonań pętli for: ", i, "</br>");
    }
    </script>
    `;

  const whileCode = `
    <script>
    // początkowa wartość
    var i = 0;
    // warunek
    while(i < 10){
        document.write("Liczba wykonań pętli for: ", i, "</br>").
        // wyrażenie modyfikujące
        i++;
    }
    </script>
    `;
  const forWhileCode = `
    <script>
    // początkowa wartość
    var i = 0;
    do {
        document.write("Liczba wykonań pętli for: ", i, "</br>").
        // wyrażenie modyfikujące
        i++;
    // warunek
    } while(i < 0);
    </script>
    `;

  const breakCode = `
    <script>
    var i = 0;
    while(i < 10){
        document.write("Liczba wykonań pętli for: ", i, "</br>").
        if(i == 3) break;
        i++;
    }
    </script>
    `;

  return (
    <S.Section id="petle">
      <S.SectionTitle>Pętle</S.SectionTitle>
      <S.SectionContent>
        Pętlę <S.SpanBold>for</S.SpanBold> używamy, gdy znana jest liczba
        wykonań pętli oraz jest znany warunek, który musi być spełniony aby
        wykonywać pętle:
      </S.SectionContent>
      <S.SectionImg>
        <pre>
          <code className="language-html">{forCode}</code>
        </pre>
      </S.SectionImg>
      <S.SectionContent>
        Pętla <S.SpanBold>while</S.SpanBold> będzie wykonywana do momentu, aż
        podany warunek nie będzie spełniony. Ważne jest, aby wyrażenie
        modyfikujące początkową wartość znajdowało się w odpowiednim miejscu w
        pętli.
      </S.SectionContent>
      <S.SectionImg>
        <pre>
          <code className="language-html">{whileCode}</code>
        </pre>
      </S.SectionImg>
      <S.SectionContent>
        Pętla <S.SpanBold>do...while</S.SpanBold> w przeciwieństwie do pętli for
        i while zawsze zostanie wykonana 1 raz, ponieważ warunek sprawdzany jest
        na samym końcu pętli.
      </S.SectionContent>
      <S.SectionImg>
        <pre>
          <code className="language-html">{forWhileCode}</code>
        </pre>
      </S.SectionImg>
      <S.SectionContent>
        <S.SpanBold>Zapamiętaj!</S.SpanBold> Każda pętla może zostać szybciej
        zakończona za pomocą: <S.SpanBold>break</S.SpanBold>. Przykład: jeżeli{" "}
        <S.SpanBold>i</S.SpanBold> będzie wynosiło 3 to pętla się zakończy.
      </S.SectionContent>
      <S.SectionImg>
        <pre>
          <code className="language-html">{breakCode}</code>
        </pre>
      </S.SectionImg>
    </S.Section>
  );
};

export default Loops;
