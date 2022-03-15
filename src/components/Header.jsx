import React from "react";
import "bootstrap/dist/js/bootstrap.esm";

import "bootstrap/dist/css/bootstrap.min.css";
import {
  Collapse,
  //   Container,
  Nav,
  Navbar,
  NavbarBrand,
  //   NavbarText,
  NavbarToggler,
  NavItem,
  NavLink,
} from "reactstrap";

function headerView() {
  return (
    <div>
      <Navbar color="dark" dark container="lg" expand="lg" fixed="top">
        <NavbarBrand href="/">Task Meneger</NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Collapse navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Tarefas</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                Equipes
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="https://github.com/montanari2019/aula_react_alura"
                target="_black"
              >
                GitHub
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default headerView;
