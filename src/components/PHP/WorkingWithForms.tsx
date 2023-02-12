import * as S from "../../assets/StyledComponents";
import { useHighlight } from "../../Hooks/useHighlight";

const WorkingWithForms = () => {
  const highlight = useHighlight();
  highlight();

  const formsCode = ` <body>
  <form action="" method="POST">
    <input type="text" name="nazwisko"></br>
    <button type="submit">Wyślij</button>
    <?php 
      $polaczenie = mysqli_connect('localhost', 'root', '', 'nazwa_bazy');

      if(isset($_POST['nazwisko']) && !isempty($_POST['nazwisko']){
        $nazwisko = $_POST['nazwisko'];
        $kwerenda = "INSERT INTO 'nazwa_tabeli' ('id','nazwisko') VALUES (NULL,'".$nazwisko."');";
        mysqli_query($polaczenie, $kwerenda);
      }
      mysqli_close($polaczenie);
    ?>
  </form>
</body>`;

  return (
    <S.Section id="formularze">
      <S.SectionTitle>Praca z formularzami</S.SectionTitle>
      <S.SectionContent>
        Może być zadanie trudniejsze, w którym będziesz musiał pobrać dane z
        formularza, a następnie wysłać je na serwer. Wykonanie jest bardzo
        podobne do pobierania danych z bazy, z tym wyjątkiem, że wysyłając
        zapytanie nie musisz zapisywać wyniku, a w kwerendzie trzeba podmienić
        dane. Natomiast musisz mieć ustawioną metodę POST (lub GET, jeżeli
        polecenie tak nakazuje) w formularzu żeby móc otrzymać dane. Dzięki temu
        w PHP za pomocą <S.SpanBold>$_POST['name_inputa']</S.SpanBold> albo{" "}
        <S.SpanBold>$_GET['name_inputa']</S.SpanBold> pobierasz dane z
        formularza, jednak została ostatnia rzecz, aby to wszystko było dobrze
        zrobione. Trzeba sprawdzić czy{" "}
        <S.SpanBold>$_POST['name_inputa']</S.SpanBold> został{" "}
        <S.SpanBold>ustawiony(isset())</S.SpanBold> lub{" "}
        <S.SpanBold>nie jest pusty(!empty())</S.SpanBold> oraz przycisk musi być
        typu potwierdzającego <S.SpanBold>type="submit"</S.SpanBold>. Te
        ostatnie elementu są bardzo ważne dla działania całego skryptu, bo bez
        tego skrypt nie będzie działał.
      </S.SectionContent>
      <S.SectionCode>
        <pre>
          <code className="language-php">{formsCode}</code>
        </pre>
      </S.SectionCode>
      <S.SectionContent>
        Powyżej jest przykład poprawnego skryptu, który pobiera dane z
        formularza i wysyła je do bazy. Zauważ w jaki sposób zmienne zostały
        dodane do kwerendy.
      </S.SectionContent>
    </S.Section>
  );
};

export default WorkingWithForms;
