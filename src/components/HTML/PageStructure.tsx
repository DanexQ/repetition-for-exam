import * as S from "../../assets/StyledComponents";
import { useHighlight } from "../../Hooks/useHighlight";

const PageStructure = () => {
  const highlight = useHighlight();
  highlight();

  const pageCode = `  <body>
    <header></header> // znacznik nagłówka/banera strony
    <main></main> // znacznik bloku głównego
    <section></section> lub <aside></aside> // znaczniki bloku lewego i prawego
    <footer></footer> // znacznik stopki
  </body>`;
  return (
    <S.Section id="strukturastrony">
      <S.SectionTitle>Podział strony</S.SectionTitle>
      <S.SectionContent>
        Dzieląc stronę na odpowiednie sekcje musisz uważać na to co jest
        zapisane w poleceniu! "Podział zrealizowany za pomocą znaczników
        sekcji[...]" oznacza, że możesz używać {"<div></div>"}, jeżeli jest tak
        dla ciebie łatwiej, ale "Podział zrealizowany za pomocą semantycznych
        znaczników sekcji[...]" zabrania ich używania. W takiej sytuacji
        przedstawione poniżej znaczniki powinny znaleźć się w dokumencie.
      </S.SectionContent>
      <S.SectionCode>
        <pre>
          <code className="language-html">{pageCode}</code>
        </pre>
      </S.SectionCode>
    </S.Section>
  );
};

export default PageStructure;
