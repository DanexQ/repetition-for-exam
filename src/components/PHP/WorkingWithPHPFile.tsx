import * as S from "../../assets/StyledComponents";

const WorkingWithPHPFile = () => {
  return (
    <S.Section id="pracawpliku">
      <S.SectionTitle>Praca w pliku PHP</S.SectionTitle>
      <S.SectionContent>
        Zanim przejdziesz do pracy z egzaminem ze skryptem PHP pamiętaj, że
        pliki muszą znajdować się na serwerze, aby działały poprawnie. Serwerem
        na egzaminie jest program Xampp, dlatego wszystkie pliki powinny się tam
        znajdować. Domyślnie folder, w którym musi być strona ze skryptem PHP,
        ma taką ścieżkę :
        <S.SpanBold>
          {" "}
          Ten komputer {">"} Dysk lokalny C: {">"} xampp {">"} htdocs.
        </S.SpanBold>{" "}
        Tam tworzysz folder ze swoim PESELem, a w środku ma być cała twoja praca
        na egzaminie. Sprawdzenie w jakim stanie jest strona to`` banalnie
        proste zadanie, bo trzeba włączyć przeglądarkę i w wyszukiwarce wpisać:{" "}
        <S.SpanBold>localhost/PESEL/nazwaPliku.php</S.SpanBold>.
      </S.SectionContent>
    </S.Section>
  );
};

export default WorkingWithPHPFile;
