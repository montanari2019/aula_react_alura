import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import "../Login/login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("evento", {email, password});
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <Container className="card-body">
        <div className="card-centralizer">
          <Form className="card">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
            </Form.Group>

            <Button className="btn-entrar" type="submit" onClick={handleLogin}>
              Entrar
            </Button>
          </Form>
        </div>
      </Container>
    </div>
  );
}

export default Login;
