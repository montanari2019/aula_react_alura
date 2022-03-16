
import React from "react";
import { Button, Container, Form } from "react-bootstrap";

function InputTask() {
  return (
    <div>
      <Container>
        <div className="ajust-card">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Título da tarefa</Form.Label>
              <Form.Control type="titulo" placeholder="Título da sua tarefa" />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Descrição da sua tarefa</Form.Label>
              <Form.Control as="textarea" rows={6} />
            </Form.Group>
          </Form>

          <Button variant="primary">Criar tarefa</Button>{' '}

        </div>
      </Container>
    </div>
  );
}

export default InputTask;
