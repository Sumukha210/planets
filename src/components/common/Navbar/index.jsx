import React from "react";
import { AiFillStar } from "react-icons/ai";
import { IoMdPlanet } from "react-icons/io";
import { useHistory } from "react-router-dom";
import {
  Brand,
  Container,
  CustomNavLink,
  NavBar,
  NavItem,
  NavMenu,
} from "./NavbarStyles";

const Navbar = () => {
  const history = useHistory();

  return (
    <NavBar>
      <Container>
        <Brand onClick={() => history.push("/")}>Planetrode</Brand>
        <NavMenu>
          {links.map(({ name, to, icon: IconName }) => (
            <NavItem key={name}>
              <CustomNavLink exact activeClassName="true" to={to}>
                <IconName />
                <span>{name}</span>
              </CustomNavLink>
            </NavItem>
          ))}
        </NavMenu>
      </Container>
    </NavBar>
  );
};

export default Navbar;

const links = [
  { name: "planets", to: "/", icon: IoMdPlanet },
  { name: "Favorite", to: "/favorite", icon: AiFillStar },
];
