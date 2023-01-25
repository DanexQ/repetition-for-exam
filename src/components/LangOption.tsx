import * as S from "./LangOptionStyled";

interface LangOptionProps {
  imgSrc: string;
  imgAlt: string;
  index: number;
  handleClick: (url: string) => void;
}

const LangOption = ({
  imgSrc,
  imgAlt,
  index,
  handleClick,
}: LangOptionProps) => {
  return (
    <S.Button
      index={index}
      bottom={imgAlt === "MySql" || imgAlt === "PHP"}
      onClick={() => handleClick(imgAlt.toLowerCase())}
    >
      <S.LangImg src={imgSrc} alt={imgAlt} />
    </S.Button>
  );
};

export default LangOption;
