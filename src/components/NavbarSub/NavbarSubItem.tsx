import { useContext } from "react";
import { CurrentLocationContext } from "../../context/CurrentLocationContext";
import * as S from "./NavbarSubStyled";

interface NavbarSubItemProps {
  path: string;
  title: string;
  hash: string;
}

const NavbarSubItem = ({ path, title }: NavbarSubItemProps) => {
  const { currentLocation, currentLocationColor } = useContext(
    CurrentLocationContext
  );

  return (
    <S.NavbarSubLink
      key={path}
      href={`/${currentLocation}#${path}`}
      color={currentLocationColor}
      isActive={window.location.hash === `#${path}`}
    >
      {title}
    </S.NavbarSubLink>
  );
};

export default NavbarSubItem;
