import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { CurrentLocationContext } from "../context/CurrentLocationContext";
import { useContext } from "react";

const NavbarElement = ({ name, color }: { name: string; color: string }) => {
  const navigate = useNavigate();
  const { setCurrentLocation } = useContext(CurrentLocationContext);

  const handleNavigate = () => {
    setCurrentLocation(name);
    navigate(`/topic/${name}`);
  };

  return (
    <SSpan color={color} onClick={handleNavigate}>
      {name.toUpperCase()}
    </SSpan>
  );
};

export default NavbarElement;

export const SSpan = styled.span<{ color: string }>`
  ${({ color }) => `color: ${color};`}
  font-size: 5rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s;
  backface-visibility: none;

  :hover {
    transform: scale(1.05);
  }
`;
