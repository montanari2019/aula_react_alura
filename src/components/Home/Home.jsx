import React from "react";
import "bootstrap/dist/js/bootstrap.esm";
import "bootstrap/dist/css/bootstrap.min.css";
import "./home.css";

import Header from "../Header/Header";

import { Button, Container } from "react-bootstrap";

function home() {

  return (
    <div>
      <section>
        <Header />
      </section>
      <Container className="display-home">
        <div className="text-title">Bem vindo a tela Home</div>
        <div className="card-sub">
          <p className="text-subtitle">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </p>
        </div>
        <div>
          <Button className="button-home" size="lg" variant="primary"> Conheça o nosso repositório</Button>
        </div>
      </Container>
    </div>
  );
}

export default home;
