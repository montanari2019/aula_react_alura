import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import "../Login/login.css";

function Login() {
  return (
    <div> 


      <Container className="card-body">
   
        <div className="card-centralizer">
            
          <Form className="card">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button className="btn-entrar" type="submit">
              Entrar
            </Button>
            
          </Form>
        </div>
      </Container>
    </div>
  );
}

export default Login;
