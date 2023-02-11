import * as S from "../../assets/StyledComponents";
import { useHighlight } from "../../Hooks/useHighlight";

const WorkingWithCookies = () => {
  const highlight = useHighlight();
  highlight();

  const cookiesCode = `  <!DOCTYPE html>
  <?php 
    // setcookie(nazwaCiastka, wartość, czasTrwaniaWSekundach);
    // utworzenie ciasteczka, który zostanie usunięty po godzinie jego utworzenia
    // tutaj za każdym załadowaniem strony dodajemy kolejną liczbę odwiedzin
    setcookie("klient", "1", time()+3600);
    if(isset($_COOKIE['klient'])){
        $iloscOdwiedzin = intval($_COOKIE['klient']) + 1;
        setcookie("klient", $iloscOdwiedzin, time()+3600);
      }else{
        setcookie("klient", "1", time()+3600);
      }
  ?>
  <html lang="pl-PL">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
     <title>Document</title>
    </head>
    <body>
      <?php 
      // sprawdzamy czy na pewno jest ciasteczko
      if(isset($_COOKIE['klient'])){
        echo "W ciągu godziny odwiedziłeś nas ".$iloscOdwiedzin." tyle razy!";
      }
      /?>
    </body>
  </html>
    `;

  return (
    <S.Section id="cookies">
      <S.SectionTitle>Praca z cookies</S.SectionTitle>
      <S.SectionContent>
        Ciasteczka (ang. cookies) to niewielkie pliki, zapisywane i
        przechowywane na komputerze lokalnym lub innym urządzeniu, podczas gdy
        odwiedzasz różne strony WWW w sieci. W ciasteczkach na egzaminie bardzo
        ważne jest sprawdzanie czy już zostały utworzone. Dane z cookies
        pobieramy bardzo podobnie jak dane z formularza, czyli{" "}
        <S.SpanBold>$_COOKIE['nazwa_ciastka']</S.SpanBold>. Warto jest nadawać
        ciasteczka na samym początku dokumentu (po {"<!DOCTYPE  html>"}), aby
        mieć pewność, że utworzą się przed załadowaniem reszty strony. Do tej
        pory cookies bardzo rzadko się zdarzały na egzaminie, ale warto je znać.
      </S.SectionContent>
      <S.SectionCode>
        <pre>
          <code className="language-php">{cookiesCode}</code>
        </pre>
      </S.SectionCode>
    </S.Section>
  );
};

export default WorkingWithCookies;
