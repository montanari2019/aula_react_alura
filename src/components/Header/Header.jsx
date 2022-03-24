import React from "react";
import "bootstrap/dist/js/bootstrap.esm";
import "bootstrap/dist/css/bootstrap.min.css";
import "./estilo.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

import Tasks from "../Task/Task";
import Home from "../Home/Home";

function headerView() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Task Menager</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              
              <Link to="/home" className="menu-ajust">
                Home
              </Link>

              <Link to="/task" className="menu-ajust">
                Tarefas
              </Link>

              <Link to="/login" className="menu-ajust">
                Login
              </Link>

              <Link
                to="https://github.com/montanari2019/aula_react_alura"
                className="menu-ajust"
              >
                Git Hub
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default headerView;
