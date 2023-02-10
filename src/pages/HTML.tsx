import { useContext, useEffect } from "react";
import * as S from "../assets/StyledComponents";
import { CurrentLocationContext } from "../context/CurrentLocationContext";

const HTML = () => {
  const { setCurrentLocation } = useContext(CurrentLocationContext);

  useEffect(() => {
    setCurrentLocation("html");
  }, []);

  return (
    <S.Container>
      <S.Section>
        <S.SectionTitle>Co to jest HTML?</S.SectionTitle>
        <S.SectionContent>
          HTML czyli HyperText Markup Language (pol. hipertekstowy język
          znaczników) - jest to język służący do tworzenia dokumentów
          hipertekstowych oraz opisywania struktury informacji zawartych
          wewnątrz strony.{" "}
        </S.SectionContent>
      </S.Section>
      <S.Section>
        <S.SectionTitle>Prawidłowa struktura dokumentu</S.SectionTitle>
        <S.SectionContent>
          Prawidłowa struktura dokumentu HTML na egzaminie wygląda następująco.
          Zauważ, że fragment {"<"}!DOCTYPE html{">"} oznacza, że dokument jest
          zapisany w HTML5. Druga linijka deklaruje język witryny na język
          polski (pl-PL). Te dwie rzeczy są naprawdę ważne, bo są łatwe, a jak
          ich nie zrobimy to tracimy głupie punkty.
        </S.SectionContent>
        <S.SectionCode>
          <S.Img src="../HTML/strukturaHTML.png" alt="HTML" />
        </S.SectionCode>
      </S.Section>
      <S.Section>
        <S.SectionTitle>Późniejsza struktura dokumentu</S.SectionTitle>
        <S.SectionContent>
          Niech twój plik nie zawiera samych {"<div></div>"} jako podział
          strony, ponieważ jest to uważane za błąd i tracisz punkty. Zamiast
          tego używaj podanych znaczników, których warto się nauczyć sekcji
          (jeżeli o nich zapomnimy to divy są jedynym wyjściem):
        </S.SectionContent>
        <S.SectionCode>
          <S.Img src="../HTML/strukturaHTML2.png" alt="HTML2" />
        </S.SectionCode>
      </S.Section>
      <S.Section>
        <S.SectionTitle>Zapamiętaj!</S.SectionTitle>
        <S.SectionContent>
          Na egzaminie pamiętaj o tym, że prawie wszystkie znaczniki muszę mieć
          swoje zamknięcie. Jedynym wyjątkiem jest {"<br>"} - przejście do
          następnej linii, {"<hr>"} - linia pozioma, {"<img>"} - zdjęcie i{" "}
          {"<input>"} - pole edytorskie, do którego wprowadzamy dane. Większość
          nazw znaczników pochodzi ze skrótów słów języka angielskiego.
          Wspomniane: {"<br>"} to break - przerwa, a {"<hr>"} to horizontal -
          poziomy, dlatego znajomość języka angielskiego będzie bardzo dużym
          ułatwieniem.
        </S.SectionContent>
      </S.Section>
    </S.Container>
  );
};

export default HTML;
