import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { useAuth } from '../context/authUserContext';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();
  const { signInWithEmailAndPassword, signInwithGoogle } = useAuth();

  const onSubmit = event => {
    setError(null)
    signInWithEmailAndPassword(email, password)
    event.preventDefault();
  };

  const google = event => {
    setError(null)
    signInwithGoogle('/hello')
    event.preventDefault();
  }

  return (
    <Container className="text-center" style={{ padding: '40px 0px' }}>
      <Row>
        <Col>
          <h2>Login</h2>
        </Col>
      </Row>
      <Row style={{ maxWidth: '400px', margin: 'auto' }}>
        <Col>
          <Form onSubmit={onSubmit}>
            {error && <Alert color="danger">{error}</Alert>}
            <FormGroup row>
              <Label for="loginEmail" sm={4}>Email</Label>
              <Col sm={8}>
                <Input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  name="email"
                  id="loginEmail"
                  placeholder="Email" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="loginPassword" sm={4}>Password</Label>
              <Col sm={8}>
                <Input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  id="loginPassword"
                  placeholder="Password" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col>
                <Button>Login</Button>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col>
                No account? <Link href="/sign_up">Create one</Link>
              </Col>
            </FormGroup>
          </Form>
          Sign In with google <Button onClick={google}>Google</Button>
        </Col>
      </Row>
    </Container>
  )
}
