import { useContext, useEffect } from "react";
import {
  SContainer,
  SSection,
  SSectionContent,
  SSectionImg,
  SSectionTitle,
  SSpanBold,
  SImg,
} from "../assets/StyledComponents";
import Prism from "prismjs";
import { CurrentLocationContext } from "../context/CurrentLocationContext";

const JS = () => {
  const { setCurrentLocation } = useContext(CurrentLocationContext);
  const code = `
  1     <!DOCTYPE html>
  2     <html lang="en">
  3       <head>
  4         <meta charset="UTF-8" />
  5         <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  6         <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  7        <title>Document</title>
  8       </head>
  9       <body>
  10        <script>
  11          document.write("Prawidłowo podłączony skrypt);      
  12        </script>
  13      </body>
  14   </html>
  `;
  const output = Prism.highlight(
    code,
    Prism.languages.javascript,
    "javascript"
  );

  useEffect(() => {
    setCurrentLocation("javascript");
    Prism.highlightAll();
  }, []);

  return (
    <SContainer>
      <SSection>
        <SSectionTitle>Co to jest JavaScript?</SSectionTitle>
        <SSectionContent>
          JavaScript jest językiem skryptowym, najczęściej używany przy
          tworzeniu stron WWW, zapewniając interaktywność stron oraz obsługę
          zdarzeń, walidacji formularzy czy budowanie elementów nawigacyjnych.
          Jest interpretowanym językiem programowania, więc nie musimy go
          kompilować żeby zobaczyć efekty naszego kodu. Warto zaznaczyć, że
          JavaScript działa po stronie klienta, a więc nie obciąża w żaden
          sposób nasz serwer.
        </SSectionContent>
      </SSection>

      <SSection>
        <SSectionTitle>Jak podłączyć skrypt do dokumentu HTML?</SSectionTitle>
        <SSectionContent>
          Aby zadziałał nasz skrypt napisany w języku JavaScript, musimy go
          odpowiednio podłączyć do dokumentu za pomocą znaczników. Jeżeli chcemy
          pisać skrypt w dokumencie:
        </SSectionContent>
        <pre>
          <code className="language-html">{code}</code>
        </pre>
        <SSectionImg>
          <SImg src="../JS/podlaczeniejs.png" alt="Podłączenie 1" />
        </SSectionImg>
        <SSectionContent>
          Jeżeli chcemy nasz kod pisać w osobnym pliku (na egzaminie odradzam,
          żeby sobie głowy tym nie zawracać, a w przypadku błędu, żeby nie
          przeskakiwać z jednego pliku do drugiego, aby sprawdzać co jest nie
          tak) to musimy go podłączyć w taki sposób:
        </SSectionContent>
        <SSectionImg>
          <SImg src="../JS/podlaczeniejs3.png" alt="Podłączenie 1" />
        </SSectionImg>
        <SSectionContent>
          Atrybut <SSpanBold>src</SSpanBold> wskazuje adres naszego skryptu,
          który znajduje się w zewnętrznym pliku (nie ma go w dokumencie HTML),
          dlatego pomiędzy znacznikami nic nie wpisujemy, bo i tak nie zadziała.
        </SSectionContent>
      </SSection>

      <SSection>
        <SSectionTitle>Deklarowanie zmiennych</SSectionTitle>
        <SSectionContent>
          Zmienne możemy deklarować na kilka sposobów, które się od siebie
          różnią funkcjonalnością. Nazywanie zmiennych powinno się odbywać z
          odpowiednimi zasadami: nie powinna ona zaczynać się od cyfry, nie
          powinna zawierać spacji, a jeżeli chcemy, aby nazwa była złożona z
          kilku słów, to używamy znaku podkreślenia zamiast myślnika, albo każde
          nowe słowo zaczynamy z dużej litery i wszystko zapisujemy jednym
          ciągiem. Zapamiętaj, że JavaScript rozróżnia wielkość liter i nazwa
          zmienna nie jest tym samym co ZmienNa.
        </SSectionContent>
        <SSectionContent>
          Deklarowanie zmiennej za pomocą{" "}
          <SSpanBold>var (ang. skrót od variable - zmienna)</SSpanBold>i{" "}
          <SSpanBold>let (ang. niech)</SSpanBold> są bardzo podobne i obie mogą
          zostać modyfikowane w każdym momencie w skrypcie, jednak różnią się
          “życiem” w blokach i funkcjach, lecz ta wiedza nie jest potrzebna na
          egzaminie (najlepiej jest używać wszędzie var). Natomiast zmienna{" "}
          <SSpanBold>const (łac. constans - stały)</SSpanBold> powoduje, że
          zmienna nie może zostać zmieniona.
        </SSectionContent>
        <SSectionContent>
          Poniżej znajdują się przykłady deklarowania zmiennych wraz z
          odpowiednimi nazwami::
        </SSectionContent>
        <SSectionImg>
          <SImg src="../JS/zmienne.png" alt="Zmienne" />
        </SSectionImg>
      </SSection>

      <SSection>
        <SSectionTitle>Instrukcje warunkowe</SSectionTitle>
        <SSectionContent>
          Instrukcja warunkowa określa, który z fragmentów skryptu zostanie
          wykonany w zależności od spełnienia określonych warunków. W
          JavaScripcie instrucją warunkową jest{" "}
          <SSpanBold>
            if (ang. jeżeli), a w przypadku nie spełnienia warunku else (ang. w
            przeciwnym razie).
          </SSpanBold>{" "}
          Oczywiście instrukcję możemy przedłużać o kolejne warunki co będzie
          ukazane w przykładzie:
        </SSectionContent>
        <SSectionImg>
          <SImg src="../JS/if.png" alt="Instrukcja if" />
        </SSectionImg>
        <SSectionContent>
          Szybkie omówienie przykładu: jeżeli cena farby jest mniejsza od 10 i
          jest dostępna to kupuję, w innym wypadku jeżeli cena jest równa 10 i
          farba jest dostępna to czekam, aż będzie tańsza, w innym przypadku
          jeżeli nie jest dostępna to myślę kiedy będzie, a w innym przypadku
          nie kupuję bo jest za droga.
        </SSectionContent>
      </SSection>

      <SSection>
        <SSectionTitle>
          Wyskakujące okienka: alert, prompt, confirm
        </SSectionTitle>
        <SSectionContent>
          Rolą alertu jest przekazanie określonej informacji, nie mającej wpływu
          na działanie skryptu.
        </SSectionContent>
        <SSectionImg flex={true}>
          <SImg src="../JS/alert.png" alt="Alert" />
          <SImg src="../JS/alertWynik.png" alt="Alert wynik" />
        </SSectionImg>
        <SSectionContent>
          Confirm ukazuje alert z dwoma przyciskami, które zwracają true albo
          false.
        </SSectionContent>
        <SSectionImg flex={true}>
          <SImg src="../JS/confirm.png" alt="Confirm" />
          <SImg src="../JS/confirmWynik.png" alt="Confirm wynik" />
        </SSectionImg>
        <SSectionContent>
          Za pomocą prompt można pobierać dane od użytkownika
        </SSectionContent>
        <SSectionImg flex={true}>
          <SImg src="../JS/prompt.png" alt="Prompt" />
          <SImg src="../JS/promptWynik.png" alt="Prompt wynik" />
        </SSectionImg>
      </SSection>

      <SSection id="petle">
        <SSectionTitle>Pętle</SSectionTitle>
        <SSectionContent>
          Pętlę <SSpanBold>for</SSpanBold> używamy, gdy znana jest liczba
          wykonań pętli oraz jest znany warunek, który musi być spełniony aby
          wykonywać pętle:
        </SSectionContent>
        <SSectionImg>
          <SImg src="../JS/petlaFor.png" alt="Pętla for" />
        </SSectionImg>
        <SSectionContent>
          Pętla <SSpanBold>while</SSpanBold> będzie wykonywana, aż do momentu w
          którym warunek nie będzie spełniony. Ważne jest, aby wyrażenie
          modyfikujące początkową wartość znajdowało się w pętli, najlepiej na
          końcu, lecz zależy to od tego co chcemy wykonać.
        </SSectionContent>
        <SSectionImg>
          <SImg src="../JS/petlaWhile.png" alt="Pętla while" />
        </SSectionImg>
        <SSectionContent>
          Pętla <SSpanBold>do...while</SSpanBold> w przeciwieństwie do pętli for
          i while zawsze zostanie wykonana 1 raz, ponieważ warunek sprawdzany
          jest na samym końcu pętli.
        </SSectionContent>
        <SSectionImg>
          <SImg src="../JS/petlaDoWhile.png" alt="Pętla do...while" />
        </SSectionImg>
        <SSectionContent>
          <SSpanBold>Zapamiętaj!</SSpanBold> Każda pętla może zostać szybciej
          zakończona za pomocą: <SSpanBold>break</SSpanBold>
        </SSectionContent>
      </SSection>

      <SSection>
        <SSectionTitle>Funkcja</SSectionTitle>
        <SSectionContent>
          Funkcja to fragment kodu naszego skryptu, który się powtarza i można
          wywołać go wielokrotnie. Zasady deklarowania funkcji są takie same jak
          przy zmiennych. W nawiasach możemy zadeklarować argumenty, które
          musimy podać przy wywoływaniu jej. Jeżeli ich nie zadeklarowaliśmy to
          funkcję wywołujemy pustym nawiasem. Wszystkie funkcje mogą zostać
          wywołane za pomocą zdarzeń! Oto przykład funkcji zwracającej sumę
          liczb oraz wywołanie jej w skrypcie.
        </SSectionContent>
        <SSectionImg>
          <SImg src="../JS/funkcja.png" alt="Funkcja" />
        </SSectionImg>
      </SSection>

      <SSection>
        <SSectionTitle>Funkcje wbudowane</SSectionTitle>
        <SSectionContent>
          Funkcje wbudowane ma te same zadanie co funkcje, z tą różnicą, że my
          ich już nie musimy tworzyć, bo już są wbudowane w język. Kilka ważnych
          funkcji, które na egzaminie mogą się przydać:
        </SSectionContent>
        <SSectionImg>
          <SImg src="../JS/funkcjeWbudowane.png" alt="Funkcja" />
        </SSectionImg>
      </SSection>

      <SSection>
        <SSectionTitle>Zdarzenia w JavaScripcie</SSectionTitle>
        <SSectionContent>
          Zdarzenia w JavaScripcie są bardzo ważne dla funkcjonalności strony.
          Dzięki nim możemy np. pokazać obrazek gdy naciśniemy na przycisk.
          Rodzajów zdarzeń jest wiele, ale najważniejszą z nich jest{" "}
          <SSpanBold>click</SSpanBold>. Oto sposoby na tworzenie zdarzeń, obie
          są poprawne:
        </SSectionContent>
        <SSectionImg flex={true}>
          <SImg src="../JS/listener.png" alt="Zdarzenia" />
          <SImg src="../JS/listener2.png" alt="Zdarzenia" />
        </SSectionImg>
      </SSection>

      <SSection>
        <SSectionTitle>Tablice</SSectionTitle>
        <SSectionContent>
          Tablice pozwalają przechowywać wiele zmiennych o różnych rodzajach.
        </SSectionContent>
        <SSectionImg>
          <SImg src="../JS/tablica.png" alt="Tablica" />
        </SSectionImg>
      </SSection>

      <SSection>
        <SSectionTitle>Obsługa formularzy i pobieranie elementów</SSectionTitle>
        <SSectionContent>
          Obsługa formularzy jest bardzo prosta. Pobieramy elementy, a następnie
          pobieramy z nich dane i możemy robić z nimi co chcemy. Zapamiętaj, że
          elementom, które w późniejszym czasie będziemy chcieli pobrać, musimy
          nadać identyfikator (id).
        </SSectionContent>
        <SSectionImg>
          <SImg src="../JS/formularz.png" alt="Formularz" />
        </SSectionImg>
      </SSection>

      <SSection>
        <SSectionTitle>Zmiana wnętrza elementów</SSectionTitle>
        <SSectionContent>
          Jeżeli chcemy zmienić np. tekst w danym elemencie to za pomocą
          .innerHTML. Możemy tam dodać tekst, a także znaczniki HTML.
        </SSectionContent>
        <SSectionImg>
          <SImg src="../JS/zamianaWnetrza.png" alt="Zamiana wnętrza" />
        </SSectionImg>
      </SSection>

      <SSection>
        <SSectionTitle>Zmiana stylu elementów</SSectionTitle>
        <SSectionContent>
          Natomiast jeżeli chcemy zmienić styl danego elementu to dzięki:
          element.style.nazwaStylu.
        </SSectionContent>
        <SSectionImg>
          <SImg src="../JS/zmianaStylu.png" alt="Zmiana Stylu" />
        </SSectionImg>
      </SSection>

      <SSection>
        <SSectionTitle>Pamiętaj o średnikach na końcu!</SSectionTitle>
      </SSection>
    </SContainer>
  );
};

export default JS;
