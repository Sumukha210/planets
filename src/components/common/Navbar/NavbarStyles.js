import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavBar = styled.div`
  box-shadow: 0px 5px 10px silver;
  padding: 10px;
`;

export const Container = styled.div`
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 700px) {
    width: 90%;
  }
`;

export const Brand = styled.h2`
  font-weight: bold;
  cursor: pointer;
  @media screen and (max-width: 700px) {
    font-size: 1rem;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavItem = styled.li`
  list-style: none;
  margin-right: 10px;
`;

export const CustomNavLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  text-transform: capitalize;
  font-size: 1.1rem;
  font-weight: bold;
  display: flex;
  align-items: center;

  &.true {
    color: red;
  }

  span {
    padding: 0 5px;
  }

  @media screen and (max-width: 700px) {
    font-size: 1.6rem;
    span {
      display: none;
    }
  }
`;
