import { useState } from 'react';
import { useRouter } from 'next/router';

import { useAuth } from '../context/authUserContext';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [passwordOne, setPasswordOne] = useState("");
    const [passwordTwo, setPasswordTwo] = useState("");
    const router = useRouter();
    //error handling
    const [error, setError] = useState(null);

    const { createUserWithEmailAndPassword } = useAuth();

    const onSubmit = event => {
        setError(null)
        if (passwordOne === passwordTwo)
            createUserWithEmailAndPassword(email, passwordOne)
        else
            setError("Password do not match")
        event.preventDefault();
    };

    return (
        <div>
            
        </div>
    )
}

export default SignUp;


// <Input
// type="password"
// name="passwordOne"
// value={passwordOne}
// onChange={(event) => setPasswordOne(event.target.value)}
// id="signUpPassword"
// placeholder="Password" />