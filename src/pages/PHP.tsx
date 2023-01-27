import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  SContainer,
  SSection,
  SSectionContent,
  SSectionImg,
  SSectionTitle,
  SSpanBold,
  SImg,
} from "../assets/StyledComponents";
import { CurrentLocationContext } from "../context/CurrentLocationContext";

const PHP = () => {
  const { setCurrentLocation } = useContext(CurrentLocationContext);

  useEffect(() => {
    setCurrentLocation("php");
  }, []);

  return (
    <SContainer>
      <SSection>
        <SSectionTitle>Co to jest PHP?</SSectionTitle>
        <SSectionContent>
          PHP to interpretowany, skryptowy język programowania zaprojektowany do
          generowania stron internetowych i budowania aplikacji webowych w
          czasie rzeczywistym. PHP jest najczęściej stosowany do tworzenia
          skryptów po stronie serwera WWW.
        </SSectionContent>
      </SSection>
      <SSection>
        <SSectionTitle>PHP w dokumencie</SSectionTitle>
        <SSectionContent>
          Tak samo jak JavaScript musimy podłączyć PHP do dokumentu za pomocą
          znaczników {"<?php ?>"}
        </SSectionContent>
        <SSectionImg>
          <SImg src="../PHP/podlaczenie.png" alt="Podłączenie" />
        </SSectionImg>
      </SSection>
      <SSection>
        <SSectionTitle>Deklarowanie zmiennych i wypisywanie</SSectionTitle>
        <SSectionContent>
          Deklarowanie zmiennych w języku PHP jest bardzo łatwe. Wystarczy, że
          dodamy znak <SSpanBold>$</SSpanBold> przed nazwą zmiennej. Jednak
          trzeba pamiętać, że za każdym kolejnym użyciem zmiennej trzeba dodawać
          ten znak. Wypisywanie w PHP wykonujemy za pomocą{" "}
          <SSpanBold>echo 'Przykładowy tekst'</SSpanBold>. Jeśli chcesz dodać do
          wyświetlanego tekstu np. wartość zmiennej to musisz użyć operatora
          łączenia tekstu <SSpanBold>.</SSpanBold> (po prostu kropka).
        </SSectionContent>
        <SSectionImg>
          <SImg src="../PHP/zmienne.png" alt="zmienne" />
        </SSectionImg>
      </SSection>
      <SSection>
        <SSectionTitle>Instrukcje warunkowe</SSectionTitle>
        <SSectionContent>
          Instrukcja warunkowa określa, który z fragmentów skryptu zostanie
          wykonany w zależności od spełnienia określonych warunków. W PHP
          instrucją warunkową jest if (ang. jeżeli), a w przypadku nie
          spełnienia warunku else (ang. w przeciwnym razie). Oczywiście
          instrukcję możemy przedłużać o kolejne warunki za pomocą elseif().
          Operatory logiczne są identyczne jak w JS (==, &&, ||).
        </SSectionContent>
        <SSectionImg>
          <SImg src="../PHP/if.png" alt="Instrukcja if" />
        </SSectionImg>
      </SSection>
      <SSection>
        <SSectionTitle>Praca z bazą danych</SSectionTitle>
        <SSectionContent>
          Najważniejszą umiejętnością na egzaminie z pisania skryptów w PHP jest
          łączenie się z bazą i pozyskiwanie danych. Większość zadań opiera się
          właśnie na tym jak nie tylko na tym. Trzeba to zrobić według danego
          schematu. Połączenie się z bazą, wysłać do bazy zapytanie (i zapisać
          wynik), pobranie za pomocą pętli wierszy z wyniku, wyświetlenie kolumn
          i zakończenie połączenia z bazą.
        </SSectionContent>
        <SSectionImg big={true}>
          <SImg src="../PHP/schemat.png" alt="Schemat" />
        </SSectionImg>
        <SSectionContent>
          Powyżej znajduje się przykład poprawnego skryptu, pobierającego i
          wyświetlającego dane z bazy na stronie.
        </SSectionContent>
      </SSection>
      <SSection>
        <SSectionTitle>Praca z formularzami</SSectionTitle>
        <SSectionContent>
          Możesz dostać zadanie, w którym będziesz musiał pobrać dane z
          formularza, a następnie wysłać je na serwer. Wykonanie jest bardzo
          podobne do pobierania danych, z tym wyjątkiem, że wysyłając zapytanie
          nie musimy zapisywać wyniku, a w kwerendzie trzeba podmienić dane.
          Natomiast żeby otrzymać dane z formularza to musi mieć ustawioną
          metodę na POST. Dzięki temu dane są zaszyfrowane, a PHP za pomocą{" "}
          <SSpanBold>$_POST['name_inputa']</SSpanBold> pobieramy dane z
          formularza, jednak została nam ostatnia rzecz, aby to wszystko było
          dobrze zrobione. Sprawdzamy czy $_POST['name_inputa'] został
          ustawiony(isset()) i czy nie jest pusty(!empty()).
        </SSectionContent>
        <SSectionImg big={true}>
          <SImg src="../PHP/formularze.png" alt="Schemat" />
        </SSectionImg>
        <SSectionContent>
          Powyżej jest przykład poprawnego skryptu, który pobiera dane z
          formularza i wysyła je do bazy. Zauważ w jaki sposób zmienna{" "}
          <SSpanBold>$odpowiedz</SSpanBold> została dodana do kwerendy.
        </SSectionContent>
      </SSection>
      <SSection>
        <SSectionTitle>Praca z cookies</SSectionTitle>
        <SSectionContent>
          Ciasteczka (ang. cookies) to niewielkie pliki, zapisywane i
          przechowywane na komputerze lokalnym lub innym urządzeniu, podczas gdy
          odwiedzasz różne strony WWW w sieci Internet. W ciasteczkach na
          egzaminie bardzo ważne jest sprawdzanie czy już zostały utworzone.
          Dane z cookies pobieramy tak samo jak z formularza z metodą POST.
          Warto jest pracować z ciasteczkami na samym początku dokumentu (po{" "}
          {"<!DOCTYPE>"}).
        </SSectionContent>
        <SSectionImg>
          <SImg src="../PHP/cookies.png" alt="Cookies" />
        </SSectionImg>
      </SSection>
    </SContainer>
  );
};

export default PHP;
