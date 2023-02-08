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
import IncludeJsCode from "../components/JavaScript/IncludeJsCode";
import WhatIsJavaScript from "../components/JavaScript/WhatIsJavaScript";
import DeclaringVariables from "../components/JavaScript/DeclaringVariables";
import ConditionalStatements from "../components/JavaScript/ConditionalStatements";
import PoppingUpModals from "../components/JavaScript/PoppingUpModals";

const JS = () => {
  const { setCurrentLocation } = useContext(CurrentLocationContext);

  useEffect(() => {
    setCurrentLocation("javascript");
    Prism.highlightAll();
  }, []);

  return (
    <SContainer>
      <WhatIsJavaScript />
      <IncludeJsCode />
      <DeclaringVariables />
      <ConditionalStatements />
      <PoppingUpModals />
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
