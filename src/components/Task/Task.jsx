import React from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import Header from "../Header/Header";
import InputTask from "../InputTask/InputTask"
import "./task.css";

function TaskCard() {
  return (
    <div>
      <section>
        <Header />
      </section>

      <section>
        <InputTask />
      </section>

      <section>
        <div>
          <Container className="ajust-padding display">
            
            <Card className="ajust-card" style={{ width: "20rem" }}>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button className="mb-3" variant="danger">Apagar</Button>{' '}
                <Button className="mb-3" variant="warning">Alterar</Button>{' '}
              </Card.Body>
            </Card>

            <Card className="ajust-card" style={{ width: "20rem" }}>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button className="mb-3" variant="danger">Apagar</Button>{' '}
                <Button className="mb-3" variant="warning">Alterar</Button>{' '}
              </Card.Body>
            </Card>

            <Card className="ajust-card" style={{ width: "20rem" }}>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button className="mb-3" variant="danger">Apagar</Button>{' '}
                <Button className="mb-3" variant="warning">Alterar</Button>{' '}
              </Card.Body>
            </Card>

           
          </Container>
        </div>
      </section>
    </div>
  );
}

export default TaskCard;
