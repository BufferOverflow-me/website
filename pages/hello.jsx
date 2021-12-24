import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../context/authUserContext';
import {Container, Row, Col, Button} from 'reactstrap';

const LoggedIn = () => {
  const { User, loading, signOut } = useAuth();
  const router = useRouter();

  // Listen for changes on loading and authUser, redirect if needed
  useEffect(() => {
    if (!loading && !User)
      router.push('/')
  }, [User, loading, router])

  return (
    <Container>

        {
          loading ?
            <Row>
              <Col>Loading....</Col>
            </Row> :
            <>
              <Row>
                <Col>
                  { User && <div>Congratulations {User?.email}! You are logged in.</div> }
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button onClick={signOut}>Sign out</Button>
                </Col>
              </Row>
            </>
        }
    </Container>
  )
}

export default LoggedIn;
