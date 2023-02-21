import * as S from "../../assets/StyledComponents";
import { useHighlight } from "../../Hooks/useHighlight";

const WorkingWithDB = () => {
  const highlight = useHighlight();
  highlight();

  const workWithDBCode = `  <?php 
    // połączenie z bazą danych
    $polaczenie = mysqli_connect('localhost', 'root', '', 'nazwa_bazy');

    // stworzenie kwerendy, wysłanie oraz odebranie wyniku zapytania
    $kwerenda = "SELECT imie, nazwisko, wiek FROM uczniowie WHERE nazwisko = 'Kowalski';";
    $wynik = mysqli_query($polaczenie, $kwerenda);

    //każdy wiersz jest po kolei pobierany z wyniku, a następnie jego kolumny wyświetlone
    while ($wiersz = mysqli_fetch_array($wynik)) {
        echo "<li>$wiersz[0] $wiersz[1] $wiersz[2] lat</li>";
    }
    // zamknięcie połączenie
    mysqli_close($polaczenie);
  ?>`;

  return (
    <S.Section id="baza">
      <S.SectionTitle>Praca z bazą danych</S.SectionTitle>
      <S.SectionContent>
        Najważniejszą umiejętnością na egzaminie z pisania skryptów w PHP jest
        łączenie się z bazą i pozyskiwanie danych. Większość zadań opiera się
        właśnie na tym jak nie tylko na tym. Trzeba to zrobić według pewnego
        schematu. Połączyć się z bazą, wysłać do bazy zapytanie (i zapisać
        wynik), pobrać za pomocą pętli wierszy z wyniku, wyświetlić kolumny i
        zakończyć połączenie z bazą.
      </S.SectionContent>
      <S.SectionCode>
        <pre>
          <code className="language-php">{workWithDBCode}</code>
        </pre>
      </S.SectionCode>
      <S.SectionContent>
        Powyżej znajduje się przykład poprawnego skryptu, pobierającego i
        wyświetlającego dane z bazy na stronie. Pamiętaj, że na egzaminie na
        samym końcu znajdują się wszystkie funkcje, które są wymagane na
        egzaminie.
      </S.SectionContent>
    </S.Section>
  );
};

export default WorkingWithDB;
