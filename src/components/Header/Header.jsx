import React from "react";
import "bootstrap/dist/js/bootstrap.esm";
import "bootstrap/dist/css/bootstrap.min.css";
import "./estilo.css";
import { Container, Nav, Navbar } from "react-bootstrap";

function headerView() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Task Menager</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="menu-ajust" href="https://github.com/montanari2019/aula_react_alura">Git Hub</Nav.Link>
              <Nav.Link className="menu-ajust" href="#pricing">Tarefas</Nav.Link>
              <Nav.Link className="menu-ajust" href="#pricing">Equipes</Nav.Link>
            </Nav>  
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default headerView;
