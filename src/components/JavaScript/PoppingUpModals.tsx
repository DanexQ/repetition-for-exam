import * as S from "../../assets/StyledComponents";

const PoppingUpModals = () => {
  const alertCode = `
    <script>
        alert("Wyskakujący alert");
    </script>
    `;
  const confirmCode = `
    <script>
        confirm("Wyskakujący confirm");
    </script>
    `;
  const promptCode = `
    <script>
        var imie = prompt("Podaj imię", "Domyślna wartość");
        
        //gdy potrzebujemy liczbę zmiennoprzecinkową
        var cena = parseFloat(prompt("Podaj cenę", "Domyślna wartość"));
        //gdy potrzebujemy liczbę całkowitą
        var liczba = parseInt(prompt("Podaj liczbę", "Domyślna wartość"));
    </script>
    `;

  return (
    <S.Section id="okienka">
      <S.SectionTitle>
        Wyskakujące okienka: alert, prompt, confirm
      </S.SectionTitle>
      <S.SectionContent>
        Rolą alertu jest przekazanie określonej informacji, nie mającej wpływu
        na działanie skryptu.
      </S.SectionContent>
      <S.SectionImg flex={true}>
        <pre>
          <code className="language-html">{alertCode}</code>
        </pre>
        <S.ModalButton onClick={() => alert("Wyskakujący alert")}>
          Sprawdź alert
        </S.ModalButton>
      </S.SectionImg>
      <S.SectionContent>
        Confirm ukazuje alert z dwoma przyciskami, które zwracają true albo
        false.
      </S.SectionContent>
      <S.SectionImg flex={true}>
        <pre>
          <code className="language-html">{confirmCode}</code>
        </pre>
        <S.ModalButton onClick={() => confirm("Wyskakujący confirm")}>
          Sprawdź confirm
        </S.ModalButton>
      </S.SectionImg>
      <S.SectionContent>
        Za pomocą prompt pobiera się dane od użytkownika. Zapamiętaj, że każde
        dane pobrane w taki sposób są typem znakowym. Gdy potrzebujemy danych
        liczbowych, zamienimy je tak:
      </S.SectionContent>
      <S.SectionImg flex={true}>
        <pre>
          <code className="language-html">{promptCode}</code>
        </pre>
        <S.ModalButton onClick={() => prompt("Podaj imię", "Domyślna wartość")}>
          Sprawdź prompt
        </S.ModalButton>
      </S.SectionImg>
    </S.Section>
  );
};

export default PoppingUpModals;
