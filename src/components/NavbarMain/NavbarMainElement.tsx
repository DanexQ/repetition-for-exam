import styled from "styled-components";
import { CurrentLocationContext } from "../../context/CurrentLocationContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

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

export const SSpan = styled(Link)<{ color: string }>`
  ${({ color }) => `color: ${color};`}
  font-size: 5rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s;
  backface-visibility: none;
  text-decoration: none;

  :hover {
    transform: scale(1.05);
  }

  @media only screen and (max-width: 600px) {
    font-size: 4rem;
  }
`;
