import { CurrentLocationContext } from "../../context/CurrentLocationContext";
import { useContext } from "react";
import { SSpan } from "./NavbarMainStyled";

const NavbarMainElement = ({
  name,
  color,
}: {
  name: string;
  color: string;
}) => {
  const { setCurrentLocation } = useContext(CurrentLocationContext);

  const handleChangeTopicName = () => {
    setCurrentLocation(name);
  };

  return (
    <SSpan to={`/${name}`} color={color} onClick={handleChangeTopicName}>
      {name.toUpperCase()}
    </SSpan>
  );
};

export default NavbarMainElement;
