import { useContext, useEffect } from "react";
import * as S from "../assets/StyledComponents";
import { CurrentLocationContext } from "../context/CurrentLocationContext";

const PHP = () => {
  const { setCurrentLocation } = useContext(CurrentLocationContext);

  useEffect(() => {
    setCurrentLocation("php");
  }, []);

  return (
    <S.Container>
      <S.Section>
        <S.SectionTitle>Co to jest PHP?</S.SectionTitle>
        <S.SectionContent>
          PHP to interpretowany, skryptowy język programowania zaprojektowany do
          generowania stron internetowych i budowania aplikacji webowych w
          czasie rzeczywistym. PHP jest najczęściej stosowany do tworzenia
          skryptów po stronie serwera WWW.
        </S.SectionContent>
      </S.Section>
      <S.Section>
        <S.SectionTitle>PHP w dokumencie</S.SectionTitle>
        <S.SectionContent>
          Tak samo jak JavaScript musimy podłączyć PHP do dokumentu za pomocą
          znaczników {"<?php ?>"}
        </S.SectionContent>
        <S.SectionCode>
          <S.Img src="../PHP/podlaczenie.png" alt="Podłączenie" />
        </S.SectionCode>
      </S.Section>
      <S.Section>
        <S.SectionTitle>Deklarowanie zmiennych i wypisywanie</S.SectionTitle>
        <S.SectionContent>
          Deklarowanie zmiennych w języku PHP jest bardzo łatwe. Wystarczy, że
          dodamy znak <S.SpanBold>$</S.SpanBold> przed nazwą zmiennej. Jednak
          trzeba pamiętać, że za każdym kolejnym użyciem zmiennej trzeba dodawać
          ten znak. Wypisywanie w PHP wykonujemy za pomocą{" "}
          <S.SpanBold>echo 'Przykładowy tekst'</S.SpanBold>. Jeśli chcesz dodać
          do wyświetlanego tekstu np. wartość zmiennej to musisz użyć operatora
          łączenia tekstu <S.SpanBold>.</S.SpanBold> (po prostu kropka).
        </S.SectionContent>
        <S.SectionCode>
          <S.Img src="../PHP/zmienne.png" alt="zmienne" />
        </S.SectionCode>
      </S.Section>
      <S.Section>
        <S.SectionTitle>Instrukcje warunkowe</S.SectionTitle>
        <S.SectionContent>
          Instrukcja warunkowa określa, który z fragmentów skryptu zostanie
          wykonany w zależności od spełnienia określonych warunków. W PHP
          instrucją warunkową jest if (ang. jeżeli), a w przypadku nie
          spełnienia warunku else (ang. w przeciwnym razie). Oczywiście
          instrukcję możemy przedłużać o kolejne warunki za pomocą elseif().
          Operatory logiczne są identyczne jak w JS (==, &&, ||).
        </S.SectionContent>
        <S.SectionCode>
          <S.Img src="../PHP/if.png" alt="Instrukcja if" />
        </S.SectionCode>
      </S.Section>
      <S.Section>
        <S.SectionTitle>Praca z bazą danych</S.SectionTitle>
        <S.SectionContent>
          Najważniejszą umiejętnością na egzaminie z pisania skryptów w PHP jest
          łączenie się z bazą i pozyskiwanie danych. Większość zadań opiera się
          właśnie na tym jak nie tylko na tym. Trzeba to zrobić według danego
          schematu. Połączenie się z bazą, wysłać do bazy zapytanie (i zapisać
          wynik), pobranie za pomocą pętli wierszy z wyniku, wyświetlenie kolumn
          i zakończenie połączenia z bazą.
        </S.SectionContent>
        <S.SectionCode big={true}>
          <S.Img src="../PHP/schemat.png" alt="Schemat" />
        </S.SectionCode>
        <S.SectionContent>
          Powyżej znajduje się przykład poprawnego skryptu, pobierającego i
          wyświetlającego dane z bazy na stronie.
        </S.SectionContent>
      </S.Section>
      <S.Section>
        <S.SectionTitle>Praca z formularzami</S.SectionTitle>
        <S.SectionContent>
          Możesz dostać zadanie, w którym będziesz musiał pobrać dane z
          formularza, a następnie wysłać je na serwer. Wykonanie jest bardzo
          podobne do pobierania danych, z tym wyjątkiem, że wysyłając zapytanie
          nie musimy zapisywać wyniku, a w kwerendzie trzeba podmienić dane.
          Natomiast żeby otrzymać dane z formularza to musi mieć ustawioną
          metodę na POST. Dzięki temu dane są zaszyfrowane, a PHP za pomocą{" "}
          <S.SpanBold>$_POST['name_inputa']</S.SpanBold> pobieramy dane z
          formularza, jednak została nam ostatnia rzecz, aby to wszystko było
          dobrze zrobione. Sprawdzamy czy $_POST['name_inputa'] został
          ustawiony(isset()) i czy nie jest pusty(!empty()).
        </S.SectionContent>
        <S.SectionCode big={true}>
          <S.Img src="../PHP/formularze.png" alt="Schemat" />
        </S.SectionCode>
        <S.SectionContent>
          Powyżej jest przykład poprawnego skryptu, który pobiera dane z
          formularza i wysyła je do bazy. Zauważ w jaki sposób zmienna{" "}
          <S.SpanBold>$odpowiedz</S.SpanBold> została dodana do kwerendy.
        </S.SectionContent>
      </S.Section>
      <S.Section>
        <S.SectionTitle>Praca z cookies</S.SectionTitle>
        <S.SectionContent>
          Ciasteczka (ang. cookies) to niewielkie pliki, zapisywane i
          przechowywane na komputerze lokalnym lub innym urządzeniu, podczas gdy
          odwiedzasz różne strony WWW w sieci Internet. W ciasteczkach na
          egzaminie bardzo ważne jest sprawdzanie czy już zostały utworzone.
          Dane z cookies pobieramy tak samo jak z formularza z metodą POST.
          Warto jest pracować z ciasteczkami na samym początku dokumentu (po{" "}
          {"<!DOCTYPE>"}).
        </S.SectionContent>
        <S.SectionCode>
          <S.Img src="../PHP/cookies.png" alt="Cookies" />
        </S.SectionCode>
      </S.Section>
    </S.Container>
  );
};

export default PHP;
