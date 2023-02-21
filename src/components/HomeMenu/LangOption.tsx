import * as S from "./LangOptionStyled";

interface LangOptionProps {
  imgSrc: string;
  imgAlt: string;
  index: number;
  handleClick: (url: string) => void;
  hide: boolean;
}

const LangOption = ({
  imgSrc,
  imgAlt,
  index,
  handleClick,
  hide,
}: LangOptionProps) => {
  return (
    <S.Button
      hide={hide}
      index={index}
      bottom={imgAlt === "MySql"}
      onClick={() => handleClick(imgAlt.toLowerCase())}
    >
      <S.LangImg src={imgSrc} alt={imgAlt} />
    </S.Button>
  );
};

export default LangOption;
