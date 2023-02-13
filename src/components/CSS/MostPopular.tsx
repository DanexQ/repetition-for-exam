import * as S from "../../assets/StyledComponents";
import { useHighlight } from "../../Hooks/useHighlight";

const MostPopular = () => {
  const highlight = useHighlight();
  highlight();

  const mostPopularCode = `  p {
    font-size:2px;
    font-family:"Arial";
    color:white;
    background-color:white;
    border:1px solid blue;
    width:50%;
    height: 500px;
    text-align: center;
    margin: 5px;
    padding: 10px;
    border-radius: 2px;
    letter-spacing: 2px;
    text-transform: capitalize;
  }
    `;
  return (
    <S.Section id="podlaczenie">
      <S.SectionTitle>Najpopularniejsze właściwości</S.SectionTitle>
      <S.SectionContent>
        Na każdym egzaminie pewne właściwości się bardzo często powtarzają.
      </S.SectionContent>
      <S.SectionCode>
        <pre>
          <code className="language-css">{mostPopularCode}</code>
        </pre>
      </S.SectionCode>
    </S.Section>
  );
};

export default MostPopular;
