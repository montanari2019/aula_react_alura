import { Button } from "bootstrap";
import React from "react";
import { Card, CardBody, CardSubtitle, CardText, CardTitle } from "reactstrap";

function TaskCard() {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Sipag</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Sipag
          </CardSubtitle>
          <CardText>
            Realizar a criação do painel sipag contendo os tópicos abaixo.
            * Faturamento
            * Domicílio bancário
            * Receita x Despesa
          </CardText>
          <Button className="primary">Button</Button>
        </CardBody>
      </Card>
    </div>
  );
}

export default TaskCard;
