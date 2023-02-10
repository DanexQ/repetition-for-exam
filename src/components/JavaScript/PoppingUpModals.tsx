import * as S from "../../assets/StyledComponents";
import { useHighlight } from "../../Hooks/useHighlight";

const PoppingUpModals = () => {
  const highlight = useHighlight();
  highlight();
  const alertCode = `  <script>
    alert("Wyskakujący alert");
  </script>`;

  const confirmCode = `  <script>
    var potwierdzenie = confirm("Wyskakujący confirm");
  </script>`;

  const promptCode = `  <script>
    var imie = prompt("Podaj imię", "Domyślna wartość");

    //gdy potrzebujesz liczbę zmiennoprzecinkową
    var cena = parseFloat(prompt("Podaj cenę", "Domyślna wartość"));
    //gdy potrzebujesz liczbę całkowitą
    var liczba = parseInt(prompt("Podaj liczbę", "Domyślna wartość"));
  </script>`;

  return (
    <S.Section id="okienka">
      <S.SectionTitle>
        Wyskakujące okienka: alert, prompt, confirm
      </S.SectionTitle>
      <S.SectionContent>
        Rolą alertu jest przekazanie określonej informacji, nie mającej wpływu
        na działanie skryptu.
      </S.SectionContent>
      <S.SectionCode flex={true}>
        <pre>
          <code className="language-html">{alertCode}</code>
        </pre>
        <S.ModalButton onClick={() => alert("Wyskakujący alert")}>
          Sprawdź alert
        </S.ModalButton>
      </S.SectionCode>
      <S.SectionContent>
        Confirm ukazuje alert z dwoma przyciskami, które zwracają true albo
        false.
      </S.SectionContent>
      <S.SectionCode flex={true}>
        <pre>
          <code className="language-html">{confirmCode}</code>
        </pre>
        <S.ModalButton onClick={() => confirm("Wyskakujący confirm")}>
          Sprawdź confirm
        </S.ModalButton>
      </S.SectionCode>
      <S.SectionContent>
        Za pomocą prompt pobiera się dane od użytkownika. Zapamiętaj, że każde
        dane pobrane w taki sposób jest typem znakowym! Gdy potrzebujesz danych
        liczbowych, zamienisz je za pomocą{" "}
        <S.SpanBold>parseFloat( )</S.SpanBold> lub{" "}
        <S.SpanBold>parseInt( )</S.SpanBold>.
      </S.SectionContent>
      <S.SectionCode flex={true}>
        <pre>
          <code className="language-html">{promptCode}</code>
        </pre>
        <S.ModalButton onClick={() => prompt("Podaj imię", "Domyślna wartość")}>
          Sprawdź prompt
        </S.ModalButton>
      </S.SectionCode>
    </S.Section>
  );
};

export default PoppingUpModals;
